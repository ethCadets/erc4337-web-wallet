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

  return (
    <div className="flex">
      {authState === 'unlocked' && sidebarContent}
      {authState === 'unlocked' ? children : <Landing />}
    </div>
  );
};
