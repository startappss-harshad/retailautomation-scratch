import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
const columns = [
  { id: 'name', label: 'Product Name', minWidth: 170 },
  { id: 'code', label: 'Order Number', minWidth: 100 },
  { id: 'date', label: 'Order Date', minWidth: 170 },
];

const dummyData = [
  { name: 'Oil', code: 'A123', date: '2023-10-01' },
  { name: 'tshirt', code: 'B456', date: '2023-10-02' },
  { name: 'tshirt', code: 'C789', date: '2023-10-03' },
  { name: 'tshirt', code: 'A123', date: '2023-10-04' },
  { name: 'tshirt', code: 'B456', date: '2023-10-05' },
  { name: 'tshirt', code: 'C789', date: '2023-10-06' },
  { name: 'tshirt', code: 'A123', date: '2023-10-07' },
  { name: 'tshirt', code: 'B456', date: '2023-10-08' },
  { name: 'tshirt', code: 'C789', date: '2023-10-09' },
  { name: 'tshirt', code: 'A123', date: '2023-10-10' },
  { name: 'tshirt', code: 'B456', date: '2023-10-11' },
  { name: 'tshirt', code: 'C789', date: '2023-10-12' },
  
];

const Ordersummery = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState(dummyData);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const applyFilters = () => {

    const filtered = rows.filter((row) => {
      const startDatePass = startDate ? new Date(row.date) >= new Date(startDate) : true;
      const endDatePass = endDate ? new Date(row.date) <= new Date(endDate) : true;
      const searchTextPass = searchText
        ? row.name.toLowerCase().includes(searchText.toLowerCase()) ||
          row.code.toLowerCase().includes(searchText.toLowerCase())
        : true;
      return startDatePass && endDatePass && searchTextPass;
    });
    setFilteredData(filtered);
    setPage(0); 
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: "50px" }}>
        <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Start Date"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="End Date"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Search"
            value={searchText}
            onChange={handleSearchTextChange}
          />
          <Button variant="contained" color="primary" onClick={applyFilters}>
            Apply Filters
          </Button>
        </Box>
        </div>
       

    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                {column.label}
              </TableCell>
            ))}
            <TableCell key="actions">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id}>{value}</TableCell>
                    );
                  })}
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        // Handle the action to view the details of the product here
                        console.log(`View details of ${row.name}`);
                      }}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={filteredData.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
  );
};

export default Ordersummery;