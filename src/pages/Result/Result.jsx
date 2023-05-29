import React from "react";
import { Link } from "react-router-dom";
import MainContainer from "../../components/MainContainer/MainContainer";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useData } from "../../DataContext";
import { InsertDriveFile } from "@mui/icons-material";
import PrimaryButton from "../../components/Button/PrimaryButton";
// import swal from "sweetalert";

const Result = () => {
  const sxStyle = {
    marginBottom: "15px",
  };
  const { data } = useData();

  const entries = Object.entries(data).filter((entry) => entry[0] !== "files");

  const { files } = data;

  console.log(data);

  // const onSubmit = async () => {
  //   const formData = new FormData();

  //   if (data.files) {
  //     files.forEach((file) => {
  //       formData.append("files", file, file.name);
  //     });
  //   }

  //   entries.forEach((entry) => {
  //     formData.append(entry[0], entry[1]);
  //   });

  //   const res = await fetch("https://localhost: 4000", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   if (res.status === 200) {
  //     swal.fire("Your form was sent!");
  //   }
  // };

  return (
    <>
      <MainContainer>
        <Typography components="h2" variant="h5">
          Form Values
        </Typography>
        <TableContainer
          sx={{ marginTop: "20px", marginBottom: "15px" }}
          component={Paper}
        >
          <Table sx={sxStyle}>
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((entry) => (
                <TableRow key={entry[0]}>
                  <TableCell>{entry[0]}</TableCell>
                  <TableCell align="right">{entry[1].toString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {files && (
          <>
            <Typography components="h2" variant="h5">
              Files
            </Typography>
            <List>
              {files.map((file, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={file.name} secondary={file.size} />
                </ListItem>
              ))}
            </List>
          </>
        )}
        <PrimaryButton>Submit</PrimaryButton>
        {/* <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton> */}
        <Link
          style={{ color: "black", marginTop: "15px", fontSize: "18px" }}
          to="/"
        >
          Start Over
        </Link>
      </MainContainer>
    </>
  );
};

export default Result;
