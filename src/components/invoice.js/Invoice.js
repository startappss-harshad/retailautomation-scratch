import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Date from "./Date";
import moment from "moment/moment";

const Invoice = () => {
  const [FromDate, setFromDate] = useState();
  const [ToDate, setToDate] = useState();

  function handleFromDate(e) {
    setFromDate(e.target.value);
  }
  function handleToDate(e) {
    setToDate(e.target.value);
  }
  let data1 = [
    {
      Qty: 1,
      Description: "Frozen yoghurt",
      Date: "01/12/2023",
      Price: "⟨₹⟩200",
    },
    {
      Qty: 2,
      Description: "T-Shirt",
      Date: "11/09/2022",
      Price: "⟨₹⟩700",
    },
    {
      Qty: 3,
      Description: "Sweat shirt",
      Date: "07/05/2021",
      Price: "⟨₹⟩240",
    },
    {
      Qty: 3,
      Description: "Jeans",
      Date: "09/04/2020",
      Price: "⟨₹⟩670",
    },
  ];
  const [data, setData] = useState(data1);
  console.log(FromDate);

  useEffect(() => {
    if (FromDate && ToDate) {
      const dd = data1.filter((a) => {
        return (
          a.Date >= moment(FromDate).format("DDMMYYYY") &&
          a.Date <= moment(ToDate).format("DDMMYYYY")
        );
      });

      setData(dd);
    }
  }, [ToDate, FromDate]);
  console.log(data);
  return (
    <div>
      <h1>Invoice Data</h1>

      <Date fromDate={handleFromDate} toDate={handleToDate} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Quantity
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Description
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Date
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                ⟨₹⟩ Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{item.Qty}</TableCell>
                <TableCell align="center">{item.Description}</TableCell>
                <TableCell align="center">{item.Date}</TableCell>
                <TableCell align="center">{item.Price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Invoice;
