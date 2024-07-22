import { ScrollArea } from '@/src/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from '@/src/components/ui/sheet';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { SidebarItem } from './sidebar-item';

interface SideBarProps {
  sidebarOpen: boolean;
  handleOpenSide: (open: boolean) => void;
}

export const Sidebar = ({ sidebarOpen, handleOpenSide }: SideBarProps) => {
  const { t } = useTranslation('sidebar');
  const router = useRouter();
  const pathname = usePathname();

  const handleRedirect = (path: string) => {
    if (path) {
      router.push(`${path}`);
      handleOpenSide(false);
    }
  };

  const menuItems = [
    {
      id: 'credit',
      icon: '/assets/images/home/credit.svg',
      path: '#',
      name: 'Créditos'
    }
  ];

  return (
    <Sheet open={sidebarOpen} onOpenChange={handleOpenSide}>
      <SheetContent side="left" className="w-[304px]">
        <SheetHeader>
          <SheetTitle className="text-2xl pt-6 font-bold px-16 mb-4">
            {t('SIDEBAR.TITLE')}
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-full w-full pb-24">
          {menuItems.map((item) => (
            <div key={item.id}>
              <SidebarItem
                item={item}
                handleRedirect={handleRedirect}
                currentPath={pathname}
              />
            </div>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
