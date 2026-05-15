import { PROPOSAL_TYPE_LABELS } from '../constants';
import type { ProposalItem } from '@/lib/dao-hooks';

export const getProposalTypeLabel = (
  proposalType: string,
  proposalTypes: Record<string, string> = PROPOSAL_TYPE_LABELS
) => proposalTypes?.[proposalType] || 'Unknown Proposal Type';

export const getProposalVoteTotal = (proposal: ProposalItem): number => {
  const historicalVoteTotal = Number(proposal.maxTotalSharesAndLootAtYesVote);

  if (historicalVoteTotal > 0) return historicalVoteTotal;

  return Number(proposal.dao.totalShares);
};
