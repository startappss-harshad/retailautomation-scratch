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
  { id: "image", label: "image", minWidth: 100 },
  { id: "price", label: "Price", minWidth: 100 },

  { id: "tax", label: "Tax %", minWidth: 100 },
  { id: "date", label: "Date", minWidth: 100 },
];

const dummyData = [
  {
    product_name: "Laptop",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUQ_uvUglkJX1pkypZf1c6A1zGbSrWU8qs9HX-zyfJ&s",
    price: 79999,
    tax: 5,
    date: "2023-10-01",
  },
  {
    product_name: "Smartphone",
    price: 49999,

    tax: 3,
    date: "2023-10-02",
  },

  {
    product_name: "Television",
    price: 7000,

    tax: 7,
    date: "2023-10-03",
  },
  {
    product_name: "Headphones",
    price: 99.99,

    tax: 2,
    date: "2023-10-04",
  },
  {
    product_name: "Coffee Maker",
    price: 4999,

    tax: 2.5,
    date: "2023-10-05",
  },
  {
    product_name: "Gaming Console",
    price: 299.99,

    tax: 6,
    date: "2023-10-05",
  },
  {
    product_name: "Refrigerator",
    price: 18999.0,

    tax: 8,
    date: "2023-10-06",
  },
  {
    product_name: "Digital Camera",
    price: 25000,

    tax: 4,
    date: "2023-10-07",
  },
  {
    product_name: "Fitness Tracker",
    price: 900,

    tax: 2,
    date: "2023-10-08",
  },
  {
    product_name: "Microwave Oven",
    price: 14999,

    tax: 4.5,
    date: "2023-10-09",
  },
];

const PriceList = () => {
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
      const startDatePass = !startDateObj || new Date(row.date) >= startDateObj;
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
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "50px" }}>
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
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#304146",
                    color: "white",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell
                key="actions"
                style={{ backgroundColor: "#304146", color: "white" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];

                    if (column.id === "image") {
                      return (
                        <TableCell key={column.id}>
                          <img
                            src={
                              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUQ_uvUglkJX1pkypZf1c6A1zGbSrWU8qs9HX-zyfJ&s"
                            }
                            alt={`${row.product_name} Image`}
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                        </TableCell>
                      );
                    }

                    return <TableCell key={column.id}>{value}</TableCell>;
                  })}
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        alert("SuccessFull");
                        console.log(`View details of ${row.product_name}`);
                      }}
                      style={{ backgroundColor: "green", color: "white" }}
                    >
                      Order Done
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

export default PriceList;
