import Sidebar from './Sidebar';
import Topbar from './Topbar';

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-100 min-h-screen">
            <Topbar />
            <div className="p-6">
                {children}
            </div>
        </div>
    </div> 
  );
}
