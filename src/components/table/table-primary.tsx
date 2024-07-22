'use client';
import {
  ColumnDef,
  SortingState,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { useState } from 'react';
import Icon from '../ui/icon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../ui/table';
import { TableEmptyState } from './table-empty';
import { TableErrorState } from './table-error';

export interface DataTableProps<TData> {
  loading: boolean;
  error?: Error | null;
  pageSize: number;
  columns: Array<ColumnDef<TData>>;
  data: TData[];
  onRowClick?: (row: TData) => void;
}

export const PrimaryTable = <TData,>({
  loading,
  error,
  pageSize,
  columns,
  data,
  onRowClick
}: DataTableProps<TData>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable<TData>({
    data,
    columns,
    state: { sorting },
    initialState: {
      pagination: {
        pageSize
      }
    },
    meta: {
      showNumbers: false
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  if (!table) return null;

  return (
    <div className="space-y-4 flex-1">
      <Table>
        <TableHeader className="bg-gray-200 h-9 lg:h-[56px]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  colSpan={header.colSpan}
                  className="px-4 first:pl-8 last:pr-8"
                >
                  {header.isPlaceholder
                    ? null
                    : typeof header.column.columnDef.header === 'function'
                      ? header.column.columnDef.header(header.getContext())
                      : ''}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="bg-white">
          {!!table?.getRowModel().rows.length &&
            !loading &&
            table?.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => onRowClick && onRowClick(row.original)}
                className={onRowClick ? 'cursor-pointer' : ''}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="first:pl-8 last:pr-8 md:h-[56px]"
                  >
                    {typeof cell.column.columnDef.cell === 'function'
                      ? cell.column.columnDef.cell(cell.getContext())
                      : cell.column.columnDef.cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          {!table?.getRowModel().rows.length && !loading && !error && (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <TableEmptyState />
              </TableCell>
            </TableRow>
          )}
          {loading && (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <div className="w-full flex-1 flex justify-center items-center my-6">
                  <Icon
                    name="progress_activity"
                    className="animate-spin text-8xl font-bold text-red-600"
                  />
                </div>
              </TableCell>
            </TableRow>
          )}
          {error && (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <TableErrorState error={error} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
