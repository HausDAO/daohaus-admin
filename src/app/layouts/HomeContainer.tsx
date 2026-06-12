import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { H4 } from '@/lib/ui';
import { AppLayout } from './AppLayout';
import { ErrorBoundary } from '@/app/components/ErrorBoundary';

type HomeContainerProps = {
  children?: ReactNode;
};

export const HomeContainer = ({ children }: HomeContainerProps) => {
  return (
    <AppLayout
      leftNav={<H4>DAOhaus Admin</H4>}
      navLinks={[
        { label: 'Hub', href: '/' },
        { label: 'Summon', href: '/summon' },
      ]}
    >
      <ErrorBoundary>
        {children ?? <Outlet />}
      </ErrorBoundary>
    </AppLayout>
  );
};
