import { List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import React from 'react';
import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { InsertDriveFile } from '@mui/icons-material';

const InputFile = ({ control, name }) => {
  const handleUploadFiles = (files, current) => {
    return [...Array.from(files), ...current];
  };

  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={[]}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <input
              type="file"
              multiple
              onChange={(e) => onChange(handleUploadFiles(e.target.files, value))}
            />
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
