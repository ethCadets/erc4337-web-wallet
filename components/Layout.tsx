import { FC, ReactNode, useContext } from 'react';
import { GlobalContext } from '../contexts';
import { Landing } from './Landing';

interface ILayoutProps {
  children?: ReactNode;
  sidebarContent?: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ sidebarContent, children }) => {
  const { authState } = useContext(GlobalContext);

  return (
    <div className='flex'>
      {authState === 'unlocked' && (
        <aside className='w-64 h-screen bg-slate-200 flex flex-col'>
          {sidebarContent}
        </aside>
      )}
      {authState === 'unlocked' ? children : <Landing />}
    </div>
  );
};
