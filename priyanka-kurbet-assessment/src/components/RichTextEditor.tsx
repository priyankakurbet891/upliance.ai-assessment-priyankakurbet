// RichTextEditor.tsx
import React, { useState } from "react";
import { Paper, Typography, Button } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor: React.FC = () => {
  const [text, setText] = useState("");

  return (
    <Paper elevation={3} sx={{ padding: 3, mt: 2 }}>
      <Typography variant="h5">Rich Text Editor</Typography>
      <ReactQuill value={text} onChange={setText} />
      <Button variant="contained" sx={{ mt: 2 }}>
        Save
      </Button>
    </Paper>
  );
};

export default RichTextEditor;
