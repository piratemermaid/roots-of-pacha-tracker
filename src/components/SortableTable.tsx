import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
} from '@mui/material';

import { stableSort, getComparator, type Order } from '../utils/tableSort';

type HeadCellProps = {
  id: string;
  label: string;
};

type Props = {
  headCells: HeadCellProps[];
  rows: Record<string, string | number>[];
  defaultOrderBy?: string;
};

export default function SortableTable({
  headCells,
  rows,
  defaultOrderBy = 'name',
}: Props) {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState(defaultOrderBy);

  const rowsSorted = React.useMemo(
    () => stableSort(rows, getComparator(order, orderBy)),
    [rows, order, orderBy]
  );

  const handleChangeOrderBy = (name: string) => {
    if (orderBy === name) {
      setOrder(order === 'asc' ? 'desc' : 'asc');
    } else {
      setOrderBy(name);
      setOrder('asc');
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="table" size="small">
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => {
                const isSelected = orderBy === headCell.id;

                return (
                  <TableCell
                    sortDirection={isSelected ? order : false}
                    sx={{ fontWeight: 600, color: 'var(--color-secondary)' }}
                    onClick={() => handleChangeOrderBy(headCell.id)}
                  >
                    <TableSortLabel
                      active={isSelected}
                      direction={isSelected ? order : 'asc'}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {rowsSorted.map((row) => {
              return (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {headCells.map((headCell) => (
                    <TableCell
                      component={headCell.id === 'name' ? 'th' : 'td'}
                      sx={headCell.id === 'name' ? { fontWeight: 600 } : null}
                    >
                      {row[headCell.id] !== 0 ? row[headCell.id] : '- -'}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
