import { FC, useEffect } from "react";
import type { NextPage } from "next";
import { ProfilePageProvider } from "@/src/hooks/pages/profile";
import { LayoutSection } from "@/src/components/layout-section";
import { UserInfoCard } from "@/src/components/user-card";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getExploreProposals } from "@/src/redux/actions/proposal/proposal.action";
import { SwapProposalStatus } from "@/src/entities/proposal.entity";
import { useMain } from "@/src/hooks/pages/main";
import MainLayout from "@/src/layouts/main";
import Breadcrumb from "@/src/components/user/breadcrumb";
import SubMenu from "@/src/components/user/sub-menu";
import Title from "@/src/components/user/history/title";
import Proposal from "@/src/components/user/history/proposal";

const Layout: FC = () => {
  const router = useRouter();
  const { hPublicProfile: profile, proposals } = useMain();

  /**
   * Fetch proposal by user id
   */
  const dispatch = useDispatch();
  const handleSearch = (_search?: string) => {
    dispatch(
      getExploreProposals({
        walletAddress: profile.walletAddress,
        options: {
          countParticipation: true,
          statuses: [SwapProposalStatus.SWAPPED, SwapProposalStatus.REDEEMED],
          search: _search,
        },
      })
    );
  };
  useEffect(() => {
    if (!profile || !profile.walletAddress) return;
    handleSearch();
  }, [profile]);

  return (
    <MainLayout>
      <Breadcrumb title="Profile" />
      <LayoutSection className="relative top-[-180px]">
        <div className="mb-[20px]">
          <div className="block mt-[20px]">
            {router.query.id && (
              <UserInfoCard userId={router.query.id as string} />
            )}
          </div>
        </div>
        <SubMenu curTab={1} />
        <div className="mt-10">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            History
          </h3>
          <Title />
          {proposals.map((_) => (
            <Proposal key={`proposal-${_.id}`} data={_} />
          ))}
        </div>
      </LayoutSection>
    </MainLayout>
  );
};

const HistoryPage: NextPage = () => {
  return (
    <ProfilePageProvider>
      <Layout />
    </ProfilePageProvider>
  );
};

export default HistoryPage;
