import * as React from "react";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "no", label: "Post ID", minWidth: 100 },
  { id: "title", label: "Title", minWidth: 300 },
  {
    id: "description",
    label: "Description",
    minWidth: 500,
  },
];

export default function StickyHeadTable({ data, setData, setPage, page }) {
  function createData(no, title, description) {
    return { no, title, description };
  }

  const rows = [];
  const [rowSet, setRowSet] = useState([]);

  useEffect(() => {
    if (data.length > 1) {
      data?.map((item) => {
        rows.push(createData(item?.id, item?.title, item?.body));
      });

      setRowSet(rows);
    } else {
      setRowSet([createData(data?.id, data?.title, data?.body)]);
    }
  }, [data]);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <h2 style={{ color: "blue" }}>Post's Details</h2>
      <br />
      <Paper sx={{ width: "95%", marginLeft: "3%", overflow: "hidden" }}>
        <TableContainer
          sx={{ maxHeight: 440 }}
          style={{ backgroundColor: "#e7f2fb" }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowSet
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rowSet.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
