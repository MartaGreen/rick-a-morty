import React from "react";
import { Table, TableHead, TableRow } from "@mui/material";
import CustomHeadCell from "./CustomHeadCell";

const Characters = ({ ...props }) => {
  return (
    <Table sx={{ width: "1084px" }}>
      <TableHead>
        <TableRow>
          <CustomHeadCell>name</CustomHeadCell>
          <CustomHeadCell>status</CustomHeadCell>
          <CustomHeadCell>genger</CustomHeadCell>
          <CustomHeadCell>species</CustomHeadCell>
          <CustomHeadCell>created</CustomHeadCell>
          <CustomHeadCell>origin</CustomHeadCell>
          <CustomHeadCell></CustomHeadCell>
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default Characters;
