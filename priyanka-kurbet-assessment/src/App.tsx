import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Counter from "./components/Counter";
import UserForm from "./components/UserDataForm";

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/user-form" element={<UserForm />} />
        </Routes>
        <UserForm /> {/* Display user form beside the counter */}
      </Container>
    </Router>
  );
};

export default App;
