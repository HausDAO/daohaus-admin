import styled from 'styled-components';
import { useAccount } from 'wagmi';
import { HomeDashboard } from '@/components/HomeDashboard';
import { HomeNotConnected } from '@/components/HomeNotConnected';

const HomeStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const PrismBanner = styled.pre`
  margin: 0;
  padding: 1.6rem 2rem;
  border: 0.1rem solid ${({ theme }) => theme.secondary.step7};
  border-radius: 1.2rem;
  background: ${({ theme }) => theme.secondary.step2};
  color: ${({ theme }) => theme.secondary.step11};
  font-family: ${({ theme }) => theme.font.family.data}, monospace;
  font-size: clamp(1rem, 1vw + 0.7rem, 1.4rem);
  font-weight: 700;
  line-height: 1.4;
  white-space: pre-wrap;
  overflow-x: auto;
`;

const prismWasHereArt = String.raw`____  ____  ___ ____  __  __
|  _ \|  _ \|_ _/ ___||  \/  |
| |_) | |_) || |\___ \| |\/| |
|  __/|  _ < | | ___) | |  | |
|_|   |_| \_\___|____/|_|  |_|

__        ___    ____    _   _ _____ ____  _____ _
\ \      / / \  / ___|  | | | | ____|  _ \| ____|
 \ \ /\ / / _ \ \___ \  | |_| |  _| | |_) |  _|
  \ V  V / ___ \ ___) | |  _  | |___|  _ <| |___
   \_/\_/_/   \_\____/  |_| |_|_____|_| \_\_____|

   ____  ___   ___   ___   ___  ____      _      _   _  ____    _
  / ___|/ _ \ / _ \ / _ \ / _ \|  _ \    / \    | \ | |/ ___|  / \
 | |  _| | | | | | | | | | | | | |_) |  / _ \   |  \| | |  _  / _ \
 | |_| | |_| | |_| | |_| | |_| |  _ <  / ___ \  | |\  | |_| |/ ___ \
  \____|\___/ \___/ \___/ \___/|_| \_\/_/   \_\ |_| \_|\____/_/   \_\\`;

export const Home = () => {
  const { isConnected } = useAccount();

  return (
    <HomeStack>
      <PrismBanner aria-label="PRISM WAS HERE! GOOOORANGA">
        {prismWasHereArt}
      </PrismBanner>
      {isConnected ? <HomeDashboard /> : <HomeNotConnected />}
    </HomeStack>
  );
};
