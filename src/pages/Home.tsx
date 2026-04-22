import { useAccount } from 'wagmi';
import styled from 'styled-components';
import { HomeDashboard } from '@/components/HomeDashboard';
import { HomeNotConnected } from '@/components/HomeNotConnected';
import { ParMd } from '@/lib/ui';

const StagingNote = styled(ParMd)`
  margin: 0 0 2.4rem;
  font-weight: 700;
`;

export const Home = () => {
  const { isConnected } = useAccount();
  return (
    <>
      <StagingNote>this is temporary staging for prism development</StagingNote>
      {isConnected ? <HomeDashboard /> : <HomeNotConnected />}
    </>
  );
};
