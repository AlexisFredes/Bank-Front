import Icon from '@/src/components/ui/icon';
import { cn } from '@/src/lib/utils';
import { Column } from '@tanstack/react-table';
import { columnVisibility } from '../ui/column-visibility-store';

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
  toggleVisibilityColumn?: boolean;
}

export const PrimaryTableColumnHeader = <TData, TValue>({
  column,
  title,
  className,
  toggleVisibilityColumn
}: DataTableColumnHeaderProps<TData, TValue>) => {
  const { toggleVisibility, visibility } = columnVisibility((state) => state);

  const handleColumnClick = () => {
    column.toggleSorting();
  };

  const handleVisibilityToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleVisibility();
  };

  return (
    <div
      className={cn('flex items-center space-x-2 cursor-pointer', className)}
      onClick={handleColumnClick}
    >
      {toggleVisibilityColumn && (
        <div onClick={handleVisibilityToggle} className="flex items-center">
          <Icon
            name={visibility ? 'visibility' : 'visibility_off'}
            className="select-none leading-6"
          />
        </div>
      )}
      <span>{title}</span>
      {column.getCanSort() && column.getIsSorted() ? (
        <Icon
          name={
            column.getIsSorted() === 'desc'
              ? 'keyboard_arrow_down'
              : 'keyboard_arrow_up'
          }
          className="ml-2 text-red-600 select-none leading-6"
        />
      ) : (
        <div className="w-6 h-6"></div>
      )}
    </div>
  );
};
