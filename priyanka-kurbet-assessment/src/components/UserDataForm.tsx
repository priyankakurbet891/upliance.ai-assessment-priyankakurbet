import React, { useState } from "react";
import { TextField, Button, Box, Typography, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateRichText, selectRichText } from "../slices/userSlice";

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const richText = useSelector(selectRichText);
  const [localText, setLocalText] = useState(richText);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const applyFormat = (command: string) => {
    document.execCommand(command, false, "");
  };

  const handleSave = () => {
    dispatch(updateRichText(localText));
    setOpenSnackbar(true);
  };

  return (
    <Box p={3} display="flex" flexDirection="column" gap={2}>
      <Typography variant="h5">User Data Form</Typography>
      <TextField
        label="User ID"
        value={`user_${Date.now()}`}
        disabled
        fullWidth
      />
      <Typography variant="h6">Rich Text Editor</Typography>
      <Box border={1} p={2}>
        <Button onClick={() => applyFormat("bold")}>Bold</Button>
        <Button onClick={() => applyFormat("italic")}>Italic</Button>
        <Button onClick={() => applyFormat("underline")}>Underline</Button>
        <Button onClick={() => applyFormat("insertUnorderedList")}>List</Button>
        <Box
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => setLocalText(e.currentTarget.innerHTML)}
          dangerouslySetInnerHTML={{ __html: richText }}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            minHeight: "100px",
          }}
        />
      </Box>
      <Button variant="contained" onClick={handleSave}>
        Save
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Data stored successfully!"
      />
    </Box>
  );
};

export default UserForm;
