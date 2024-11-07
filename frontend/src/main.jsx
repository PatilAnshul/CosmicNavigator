import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { NotesContextProvider } from './components/context/NotesContext';

ReactDOM.render(
  <BrowserRouter>
    <NotesContextProvider>
      <App />
    </NotesContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
