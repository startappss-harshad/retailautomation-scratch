
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const columns = [
  { id: "product_name", label: "Product Name", minWidth: 170 },
  { id: "price", label: "Price", minWidth: 100 },
  { id: "discount", label: "Discount", minWidth: 100 },
  { id: "delivery_charge", label: "Delivery Charge", minWidth: 120 },
  { id: "tax", label: "Tax", minWidth: 100 },
  { id: "date", label: "Date", minWidth: 100 },
];

const dummyData = [
  {
    "product_name": "Laptop",
    "price": 799.99,
    "discount": 10,
    "delivery_charge": 19.99,
    "tax": 5,
    "date": "2023-10-01"
  },
  {
    "product_name": "Smartphone",
    "price": 499.99,
    "discount": 5,
    "delivery_charge": 9.99,
    "tax": 3,
    "date": "2023-10-02"
  },
  
    {
      "product_name": "Television",
      "price": 699.99,
      "discount": 15,
      "delivery_charge": 29.99,
      "tax": 7,
      "date": "2023-10-03"
    },
    {
      "product_name": "Headphones",
      "price": 99.99,
      "discount": 20,
      "delivery_charge": 4.99,
      "tax": 2,
      "date": "2023-10-04"
    },
    {
      "product_name": "Coffee Maker",
      "price": 49.99,
      "discount": 5,
      "delivery_charge": 6.99,
      "tax": 2.5,
      "date": "2023-10-05"
    },
    {
      "product_name": "Gaming Console",
      "price": 299.99,
      "discount": 10,
      "delivery_charge": 14.99,
      "tax": 6,
      "date": "2023-10-05"
    },
    {
      "product_name": "Refrigerator",
      "price": 899.99,
      "discount": 20,
      "delivery_charge": 39.99,
      "tax": 8,
      "date": "2023-10-06"
    },
    {
      "product_name": "Digital Camera",
      "price": 249.99,
      "discount": 5,
      "delivery_charge": 9.99,
      "tax": 4,
      "date": "2023-10-07"
    },
    {
      "product_name": "Fitness Tracker",
      "price": 79.99,
      "discount": 10,
      "delivery_charge": 4.99,
      "tax": 2,
      "date": "2023-10-08"
    },
    {
      "product_name": "Microwave Oven",
      "price": 149.99,
      "discount": 15,
      "delivery_charge": 12.99,
      "tax": 4.5,
      "date": "2023-10-09"
    },
    {
      "product_name": "Tablet",
      "price": 199.99,
      "discount": 10,
      "delivery_charge": 9.99,
      "tax": 3.5,
      "date": "2023-10-10"
    },
    {
      "product_name": "Wireless Speaker",
      "price": 69.99,
      "discount": 5,
      "delivery_charge": 5.99,
      "tax": 2.5,
      "date": "2023-10-11"
    },
    {
      "product_name": "Vacuum Cleaner",
      "price": 129.99,
      "discount": 10,
      "delivery_charge": 11.99,
      "tax": 4,
      "date": "2023-10-12"
    },
    {
      "product_name": "Washing Machine",
      "price": 499.99,
      "discount": 20,
      "delivery_charge": 24.99,
      "tax": 7.5,
      "date": "2023-10-13"
    },
    {
      "product_name": "Blender",
      "price": 39.99,
      "discount": 5,
      "delivery_charge": 5.99,
      "tax": 2,
      "date": "2023-10-14"
    },
    {
      "product_name": "Digital Watch",
      "price": 69.99,
      "discount": 10,
      "delivery_charge": 4.99,
      "tax": 2.5
    },
    {
      "product_name": "Toaster",
      "price": 29.99,
      "discount": 5,
      "delivery_charge": 4.99,
      "tax": 2,
      "date": "2023-10-02"
    },
    {
      "product_name": "Desk Chair",
      "price": 89.99,
      "discount": 10,
      "delivery_charge": 9.99,
      "tax": 3,
      "date": "2023-10-02"
    },
    {
      "product_name": "Power Bank",
      "price": 19.99,
      "discount": 5,
      "delivery_charge": 3.99,
      "tax": 1.5,
      "date": "2023-10-02"
    },
    {
      "product_name": "Hiking Backpack",
      "price": 49.99,
      "discount": 10,
      "delivery_charge": 6.99,
      "tax": 2.5,
      "date": "2023-10-02"
    }
  
  
];

const Ordersummery = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(dummyData); 


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
    const startDateObj = startDate ? new Date(startDate) : null;
    const endDateObj = endDate ? new Date(endDate) : null;

    const filtered = dummyData.filter((row) => {
      const startDatePass =
        !startDateObj || new Date(row.date) >= startDateObj;
      const endDatePass = !endDateObj || new Date(row.date) <= endDateObj;

      const searchTextPass =
        !searchText ||
        row.product_name.toLowerCase().includes(searchText.toLowerCase());

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
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "50px",  }}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
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
        <Button
          variant="contained"
          color="primary"
          style={{ width: "200px", height: "55px" }}
          onClick={applyFilters}
        >
          Apply Filters
        </Button>
      </Box>

      <TableContainer>
        <Table stickyHeader aria-label="sticky table"  >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth ,backgroundColor: "#304146",color: "white",}}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell key="actions" style={{backgroundColor: "#304146",color: "white",}}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return <TableCell key={column.id}>{value}</TableCell>;
                  })}
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        alert('hi')
                        console.log(`View details of ${row.product_name}`);
                      }}
                      style={{ backgroundColor: "green",color: "white",}}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
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
