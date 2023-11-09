import React, { useState,useEffect } from "react";
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
import AddUserCard from "../User Management/Addusercardard";



const columns = [
  { id: "product_name", label: "Product Name", minWidth: 170 },
  { id: "price", label: "Price", minWidth: 100 },
  { id: "discount", label: "Discount", minWidth: 100 },
  { id: "delivery_charge", label: "Delivery Charge", minWidth: 120 },
  { id: "tax", label: "Tax", minWidth: 100 },
  { id: "date", label: "Date", minWidth: 100 },
];


const Ordersummery = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]); 
  const [apiData, setApiData] = useState([]);


useEffect(()=>{
  const fetchdata = async () => {

    try{
    const response = await fetch('http://192.168.1.3:3000/api/product/get');
    const data = await response.json();
    setApiData(data.data);
    setFilteredData(data.data);
  } catch(error){
    console.log("error fetching data",error);

  }
}
  fetchdata();


},[]);
  


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

    const filtered = apiData.filter((row) => {
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
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "50px", marginBottom:"50px" }}>
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
                      
                      // onClick={handleClickOpen}
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
