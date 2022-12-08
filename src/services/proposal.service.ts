import { networkProvider } from "@/src/providers/network.provider";
import {
  SwapProposalEntity,
  GetProposalsDto,
} from "@/src/entities/proposal.entity";
import { DetailDto } from "@/src/dto/detail.dto";
import { CreateProposalDto, ProposalDto } from "@/src/dto/proposal.dto";
import qs from "qs";

export class ProposalService {
  /**
   * @dev Get proposal items.
   * @param {GetProposalsDto} getProposalsDto
   * @returns {SwapProposalEntity} data.
   */
  public async getProposals(
    getProposalsDto?: GetProposalsDto
  ): Promise<SwapProposalEntity> {
    return networkProvider.request<SwapProposalEntity>("/proposal", {
      method: "GET",
      params: getProposalsDto
        ? {
            ownerAddresses: getProposalsDto.walletAddress,
            ...getProposalsDto.options,
          }
        : {},
      paramsSerializer: {
        serialize: (params: any) => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        },
      },
    });
  }

  /**
   * @dev Get list proposal
   * @returns {ProposalDto[]}
   */
  listProposal(): Promise<ProposalDto[]> {
    return networkProvider.request<ProposalDto[]>("/proposal", {});
  }

  /**
   * @dev Get proposal by id.
   * @param {DetailDto} payload
   * @returns {ProposalDto}
   */
  getProposal(payload: DetailDto): Promise<ProposalDto> {
    return networkProvider.request<ProposalDto>(`/proposal/${payload.id}`, {});
  }

  /**
   * @dev Create proposal.
   * @param {CreateProposalDto} payload.
   * @returns {ProposalDto}
   */
  createProposal(payload: CreateProposalDto): Promise<ProposalDto> {
    return networkProvider.request<ProposalDto>(`/proposal/`, {
      method: "POST",
      data: payload,
    });
  }
}

export const proposalService = new ProposalService();
