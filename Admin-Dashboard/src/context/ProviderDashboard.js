import { React, useState } from "react";
// Importando Theme
import ThemeContext from "./index";

const ThemeProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(value);
  };

  return (
    <ThemeContext.Provider value={{ open, handleOpen }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
