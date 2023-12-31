import { FC, useState, useCallback } from "react";
import { Button } from "@hamsterbox/ui-kit";
import { useConnectedWallet } from "@saberhq/use-solana";
import { useWalletKit } from "@gokiprotocol/walletkit";
import { useWallet } from "@/src/hooks/useWallet";
import {
  ConfirmedTransactionModal,
  ConfirmTransactionModal,
  WalletEmptyModal,
} from "@/src/components/modal";
import { useMain } from "@/src/hooks/pages/main";
import { OptimizeTransactionModal } from "@/src/components/create-proposal/modal/optimize-transaction-modal";

const BuyButton: FC<{
  handleSwap(): Promise<void | {
    proposalId?: string;
    fns: { optimize(): Promise<void>; confirm(): Promise<void> };
  }>;
  optionIndex: number;
}> = (props) => {
  /**
   * @dev Get user wallet
   */
  const wallet = useConnectedWallet();
  const { connect } = useWalletKit();
  const { programService, solanaWallet } = useWallet();

  /**
   * @dev Import redux states.
   */
  const { proposal, hPublicProfile: seller, hProfile: buyer } = useMain();

  /**
   * States to handle display modal component
   */
  const [isTransFailed, setIsTransFailed] = useState(false);
  const [isDisplayConfirm, setIsDisplayConfirm] = useState(false);
  const [isDisplayConfirmed, setIsDisplayConfirmed] = useState(false);
  const [isBuyButtonLoading, setIsBuyButtonLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * @dev Condition to show popup to optimize proposal and submit proposal onchain.
   */
  const [optimizedProposalOpen, setOptimizedProposalOpen] = useState(false);

  const handleSwap = useCallback(async () => {
    if (!proposal) return;
    if (!solanaWallet.publicKey) return connect();

    /**
     * @dev Turn on loading status in buy button.
     */
    setIsLoading(true);
    setIsBuyButtonLoading(true);
    setIsDisplayConfirm(false);
    /**
     * @dev Turn on optimized transaction modal if having optimized option.
     */
    setOptimizedProposalOpen(true);
  }, [wallet, programService, solanaWallet, proposal, props.optionIndex]);

  return (
    <>
      <Button
        text={
          (proposal as any)?.swapOptions?.length > 1
            ? `Buy with option ${props.optionIndex + 1}`
            : "Buy"
        }
        className="!rounded-[100px] after:!rounded-[100px] float-right !w-[120px] md:!w-[200px]"
        size="large"
        onClick={() => setIsDisplayConfirm(true)}
        loading={isBuyButtonLoading}
      />
      <Button
        text="Order / Bid"
        shape="secondary"
        className="!border-[1.5px] ml-[24px] !rounded-[100px] after:!rounded-[100px] float-right !w-[150px] md:!w-[200px]"
        size="large"
        onClick={() => setIsDisplayConfirm(true)}
      />
      <ConfirmTransactionModal
        isLoading={isLoading}
        buyer={buyer}
        seller={seller}
        handleOk={() => handleSwap()}
        handleCancel={() => setIsDisplayConfirm(false)}
        isModalOpen={isDisplayConfirm}
      />
      <ConfirmedTransactionModal
        buyer={buyer}
        seller={seller}
        handleOk={() => setIsDisplayConfirmed(false)}
        handleCancel={() => setIsDisplayConfirmed(false)}
        isModalOpen={isDisplayConfirmed}
      />
      <WalletEmptyModal
        handleOk={() => setIsTransFailed(false)}
        handleCancel={() => setIsTransFailed(false)}
        isModalOpen={isTransFailed}
      />
      <OptimizeTransactionModal
        isModalOpen={optimizedProposalOpen}
        instructionHandler={async () =>
          (await props.handleSwap()) as unknown as {
            proposalId?: string;
            fns: {
              optimize(): Promise<void>;
              confirm(): Promise<void>;
            };
          }
        }
        handleCancel={() => {
          setOptimizedProposalOpen(false);
          setIsBuyButtonLoading(false);
          setIsLoading(false);
        }}
        handleOk={(proposalId) => {
          console.log(proposalId);
          setOptimizedProposalOpen(false);
          setIsDisplayConfirm(false);
          setIsDisplayConfirmed(true);
          setIsBuyButtonLoading(false);
          setIsLoading(false);
        }}
      />
    </>
  );
};

export default BuyButton;
