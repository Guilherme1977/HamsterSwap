import { FC, useEffect, useState, useCallback } from "react";
import type { NextPage } from "next";
import MainLayout from "@/src/layouts/main";
import { ProposalDetailPageProvider } from "@/src/hooks/pages/proposal-detail";
import { ProposalItem } from "@/src/components/proposal-item";
import { StyledProposalDetailPage } from "@/src/styled/proposal-detail-page.style";
import { LayoutSection } from "@/src/components/layout-section";
import { GuaranteedCard } from "@/src/components/guaranteed.card";
import { UserInfoCard } from "@/src/components/user-card";
import { BreadCrumb } from "@/src/components/bread-crumb";
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getProposal } from "@/src/redux/actions/proposal/proposal.action";
import {
  SwapOptionEntity,
  SwapProposalEntity,
  SwapProposalStatus,
} from "@/src/entities/proposal.entity";
import { DATE_TIME_FORMAT, parseProposal } from "@/src/utils";
import { useWallet } from "@/src/hooks/useWallet";
import { useMain } from "@/src/hooks/pages/main";
import { useConnectedWallet } from "@saberhq/use-solana";
import moment from "moment";
import BuyButton from "@/src/components/advertisment/buy-button";

const Layout: FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { programService, solanaWallet } = useWallet();
  const {
    platformConfig: { allowCurrencies },
  } = useMain();

  /**
   * @dev Declare option which user chose to swap.
   * @default {0}.
   */
  const [optionSelected, setOptionSelected] = useState(0);

  /**
   * @dev Decalre state condition whenther the proposal is expired.
   */
  const [isExpired, setIsExpired] = useState(false);

  /**
   * @dev Get user wallet
   */
  const wallet = useConnectedWallet();

  /**
   * @dev Proposal state.
   */
  const [proposal, setProposal] = useState<SwapProposalEntity>();

  /**
   * @dev The function to process swaping when click buy button.
   */
  const handleSwap = useCallback(async () => {
    return await programService.swapProposal(
      solanaWallet,
      proposal.id,
      proposal.swapOptions[optionSelected].id
    );
  }, [wallet, programService, solanaWallet, proposal, optionSelected]);

  /**
   * @dev Get proposal detail by id.
   */
  useEffect(() => {
    if (!router.query.id) return;
    dispatch(
      getProposal({ id: router.query.id as string }, (data) =>
        setProposal(data)
      )
    );
  }, [router.query.id]);

  /**
   * @dev Watch changes in proposal and process state.
   */
  useEffect(() => {
    Date.now() > new Date(proposal?.expiredAt)?.getTime() && setIsExpired(true);
  }, [proposal]);

  return (
    <MainLayout>
      <StyledProposalDetailPage>
        <div className="cover-container">
          <LayoutSection>
            <BreadCrumb data={["Home", "Advertiser"]} />
            <div className="mt-4 block md:flex items-center">
              <p className="text-[32px]">Advertisement #{proposal?.numberId}</p>
              <GuaranteedCard className="md:ml-[12px]" />
            </div>

            <div className="mt-20 mb-[20px]">
              <h3 className="text-[24px] semi-bold font-bold tracking-tight text-gray-900">
                Advertiser
              </h3>
              <div className="block mt-[20px]">
                {proposal?.ownerId && (
                  <UserInfoCard userId={proposal.ownerId} />
                )}
              </div>
            </div>
          </LayoutSection>
        </div>
        <LayoutSection className="relative">
          <h3 className="mt-[60px] semi-bold text-2xl font-bold tracking-tight text-gray-900">
            Active Swaps
          </h3>
          <div className="block mt-[20px]">
            <ProposalItem
              data={proposal}
              changeOption={(value) => {
                setOptionSelected(value);
              }}
              swapItems={
                proposal?.offerItems.map((_) =>
                  parseProposal(_, allowCurrencies)
                ) ?? []
              }
              receiveItems={
                proposal?.swapOptions.map((swapOption: SwapOptionEntity) => {
                  return swapOption.items.map((_) =>
                    parseProposal(_, allowCurrencies)
                  );
                }) ?? []
              }
            />
          </div>

          <div className="mt-14">
            <Row gutter={20} className="mb-[20px]">
              <Col span={10}>
                <div className="text-2xl semi-bold tracking-tight text-gray-900">
                  Note
                </div>
                <div className="block mt-2">
                  <p className="regular-text text-[16px] break-all">
                    {proposal?.note}
                  </p>
                  <p className="regular-text text-[14px] text-red300 mt-10">
                    {isExpired ? (
                      "Expired"
                    ) : (
                      <>
                        Expiration date:{" "}
                        {moment(proposal?.expiredAt)
                          .utc()
                          .format(DATE_TIME_FORMAT)}
                      </>
                    )}
                  </p>
                </div>
              </Col>
              <Col offset={4} span={10}>
                <div className="text-2xl semi-bold tracking-tight text-gray-900">
                  Warranty
                </div>
                <p className="mt-2 text-[16px] regular-text flex">
                  Guarantee deposit amount:
                  <img
                    src="/assets/images/solana-icon.svg"
                    alt="Solana Icon"
                    className="h-[24px] w-[24px] mx-[12px]"
                  />
                  <span className="semi-bold">300.00 SOL</span>
                </p>
              </Col>
            </Row>
          </div>

          <div className="mt-12">
            <Row justify="end">
              {solanaWallet.publicKey &&
                solanaWallet.publicKey?.toBase58().toString() !==
                  proposal?.ownerAddress &&
                !isExpired &&
                proposal?.status !== SwapProposalStatus.FULFILLED &&
                proposal?.status !== SwapProposalStatus.SWAPPED &&
                proposal?.status !== SwapProposalStatus.REDEEMED && (
                  <BuyButton
                    handleSwap={handleSwap}
                    optionIndex={optionSelected}
                  />
                )}
            </Row>
          </div>
        </LayoutSection>
      </StyledProposalDetailPage>
    </MainLayout>
  );
};

const ProposalDetailPage: NextPage = () => {
  return (
    <ProposalDetailPageProvider>
      <Layout />
    </ProposalDetailPageProvider>
  );
};

export default ProposalDetailPage;
