'use client';

import { ColumnDef } from '@tanstack/react-table';

import { PrimaryTableColumnHeader } from '@/src/components/table/table-column-header';
import { Transaction } from '@/src/interfaces/account';
import { formatDate } from '@/src/lib/utils';

export const TransactionsTableColumns: Array<ColumnDef<Transaction>> = [
  {
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <PrimaryTableColumnHeader
        column={column}
        title="Fecha"
        className="text-left"
      />
    ),
    cell: ({ row }) => <div>{formatDate(row.getValue('createdAt'))}</div>,
    enableSorting: true,
    enableHiding: false
  },
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <PrimaryTableColumnHeader
        className="text-left"
        column={column}
        title="Tipo"
      />
    ),
    cell: ({ row }) => (
      <div>
        {row.getValue('type') === 'withdraw' ? 'Transferencia' : 'Depósito'}
      </div>
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => (
      <PrimaryTableColumnHeader
        column={column}
        title="Importe"
        className="text-left"
      />
    ),
    cell: ({ row }) => (
      <div
        className={
          row.getValue('type') === 'withdraw'
            ? 'text-red-500'
            : 'text-green-500'
        }
      >
        $ {row.getValue('amount')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false
  }
];
