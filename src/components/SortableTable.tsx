import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type HeadCellProps = {
  id: string;
  label: string;
};

type Props = {
  headCells: HeadCellProps[];
  rows: Record<string, string | number>[];
};

export default function SortableTable({ headCells, rows }: Props) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="table" size="small">
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  sx={{ fontWeight: 600, color: 'var(--color-secondary)' }}
                >
                  {headCell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
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
                      {row[headCell.id]}
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
