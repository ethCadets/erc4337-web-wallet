import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode, useContext } from 'react';
import { GlobalContext } from '../contexts';
import { Landing } from './Landing';
import { Sidebar } from './Sidebar';

interface ILayoutProps {
  children?: ReactNode;
  sidebarContent?: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({
  sidebarContent = <Sidebar />,
  children,
}) => {
  const { authState } = useContext(GlobalContext);
  const router = useRouter();

  if (router.pathname === '/') {
    return <Landing />;
  }

  if (router.pathname.startsWith('/import')) {
    return (
      <div className="p-4 flex flex-col">
        <a className="cursor-pointer underline" onClick={() => router.back()}>
          Back
        </a>
        {children}
      </div>
    );
  }

  return (
    <div className="flex">
      {authState === 'unlocked' ? (
        <>
          <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 flex-shrink-0">
            {sidebarContent}
          </div>
          <div className="md:pl-64 flex flex-col flex-1">{children}</div>
        </>
      ) : (
        <Landing />
      )}
    </div>
  );
};
