import { useMemo } from 'react';
import styled from 'styled-components';
import { mintDark, slateDark, tomatoDark } from '@radix-ui/colors';

import { Progress } from '@/lib/ui';
import { getProposalVoteTotal, percentage } from '@/lib/utils';
import type { ProposalItem } from '@/lib/dao-hooks';

const VoteBarBox = styled.div`
  width: 100%;
  margin-bottom: 1.2rem;
`;

export const VoteBar = ({ proposal }: { proposal: ProposalItem }) => {
  const proposalVoteTotal = getProposalVoteTotal(proposal);

  const sections = useMemo(
    () => [
      {
        percentage: `${percentage(Number(proposal.yesBalance), proposalVoteTotal)}%`,
        color: mintDark.mint10,
      },
      {
        percentage: `${percentage(Number(proposal.noBalance), proposalVoteTotal)}%`,
        color: tomatoDark.tomato10,
      },
    ],
    [proposal, proposalVoteTotal]
  );

  return (
    <VoteBarBox>
      <Progress backgroundColor={slateDark.slate8} progressSection={sections} />
    </VoteBarBox>
  );
};
