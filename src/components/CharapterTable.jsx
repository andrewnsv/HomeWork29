import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BasicModal from "./HeroModalInfo";
import Box from "@mui/material/Box";

import HeroTablePagination from "./HeroPagination";

import useFetchHeroes from "../hooks/useFetchHeroes";

const StyledTableCell = styled(TableCell)(({ theme }) => {
  return {
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  };
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const HeroTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [selectedHero, setSelectedHero] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const offset = page * rowsPerPage;
  const { data, loading } = useFetchHeroes(
    `character/?page=${offset / 20 + 1}`
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const openModal = (id) => {
    const hero = data.results.find((hero) => hero.id === id);
    setSelectedHero(hero);
    setOpen(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TableContainer
        sx={{
          background: "transparent",
          mt: 3,
          boxShadow: "none",
          maxHeight: 700,
          maxWidth: 500,
        }}
        component={Paper}
      >
        <Table
          sx={{ overflowY: "scroll", maxWidth: 500 }}
          aria-label="customized table"
        >
          <TableHead sx={{ position: "sticky", top: 0 }}>
            <TableRow>
              <StyledTableCell style={{ width: 6 }}>ID</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading &&
              data.results.map((row, index) => (
                <StyledTableRow
                  sx={{
                    "&:hover": {
                      backgroundColor: "lightgray",
                      cursor: "pointer",
                    },
                  }}
                  key={index}
                  onClick={() => {
                    openModal(row.id);
                  }}
                >
                  <StyledTableCell
                    align="center"
                    style={{ borderRight: "0.5px solid rgb(0, 0, 0, 0.3)" }}
                  >
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="left" component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.status}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeroTablePagination
            component={"div"}
            rowsPerPageOptions={[]}
            count={data?.info?.count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage=""
          />
        </Box>
      )}
      <BasicModal data={selectedHero} open={open} setOpen={setOpen} />
    </Box>
  );
};

export default HeroTable;
