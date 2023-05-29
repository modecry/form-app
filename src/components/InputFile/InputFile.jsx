import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import React from "react";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { InsertDriveFile } from "@mui/icons-material";

const InputFile = ({ control, name, register }) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={[]}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Dropzone onChange={onChange}>
              {({ getRootProps, getInputProps }) => (
                <Paper variant="outlined" {...getRootProps()}>
                  <CloudUploadIcon />
                  <input
                    {...getInputProps()}
                    {...register("name")}
                    onBlur={onBlur}
                  />
                  <p>Select Files</p>
                </Paper>
              )}
            </Dropzone>
            <List>
              {value.map((f, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary="f.name" secondary="f.size" />
                </ListItem>
              ))}
            </List>
          </>
        )}
      />
    </>
  );
};

export default InputFile;
