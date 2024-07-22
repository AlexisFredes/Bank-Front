'use client';
import Image from 'next/image';
import { Button } from '../ui/button';

interface MenuItem {
  id: string;
  icon: string;
  path: string;
  name: string;
}

export const SidebarItem = ({
  item,
  handleRedirect,
  currentPath
}: {
  item: MenuItem;
  handleRedirect: (path: string) => void;
  currentPath: string;
}) => {
  const isActive = (path: string) => currentPath === path;

  return (
    <div className="flex" key={item.id}>
      <Button
        key={item.id}
        variant="ghost"
        className={`flex-1 justify-start pl-4 text-start mx-4 gap-4 h-14 ${isActive(item.path) ? 'bg-accent' : ''}`}
        onClick={() => handleRedirect(item.path)}
      >
        <Image
          alt={item.name}
          width="24"
          height="24"
          src={item.icon}
          className="flex items-center justify-center"
        />
        {item.name}
      </Button>
    </div>
  );
};
