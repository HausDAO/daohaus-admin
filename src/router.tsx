import { createBrowserRouter } from 'react-router-dom';
import { HomeContainer } from '@/app/layouts/HomeContainer';
import { DaoContainer } from '@/app/layouts/DaoContainer';
import { isValidNetwork } from '@/lib/keychain-utils';
import { Home } from '@/app/routes/Home';
import { Summon } from '@/app/routes/Summon';
import { DaoOverview } from '@/app/routes/DaoOverview';
import { Proposals } from '@/app/routes/Proposals';
import { Proposal } from '@/app/routes/Proposal';
import { Members } from '@/app/routes/Members';
import { Member } from '@/app/routes/Member';
import { Safes } from '@/app/routes/Safes';
import { Settings } from '@/app/routes/Settings';
import { UpdateSettings } from '@/app/routes/UpdateSettings';
import { NewProposal } from '@/app/routes/NewProposal';
import { RageQuit } from '@/app/routes/RageQuit';
import { NotFound } from '@/app/routes/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeContainer />,
    errorElement: (
      <HomeContainer>
        <NotFound />
      </HomeContainer>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'summon', element: <Summon /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '/molochv3/:daochain/:daoid',
    element: <DaoContainer />,
    loader: ({ params }) => {
      if (!isValidNetwork(params.daochain)) {
        throw new Response('Not Found', {
          status: 404,
          statusText: 'Not Found',
        });
      }

      return null;
    },
    errorElement: (
      <HomeContainer>
        <NotFound />
      </HomeContainer>
    ),
    children: [
      { index: true, element: <DaoOverview /> },
      { path: 'proposals', element: <Proposals /> },
      { path: 'proposal/:proposalId', element: <Proposal /> },
      { path: 'members', element: <Members /> },
      { path: 'member/:memberAddress', element: <Member /> },
      { path: 'safes', element: <Safes /> },
      { path: 'settings', element: <Settings /> },
      { path: 'settings/update', element: <UpdateSettings /> },
      { path: 'new-proposal', element: <NewProposal /> },
      { path: 'ragequit', element: <RageQuit /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '*',
    element: (
      <HomeContainer>
        <NotFound />
      </HomeContainer>
    ),
  },
]);
