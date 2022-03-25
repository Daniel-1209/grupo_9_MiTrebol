import { React, useState, useContext } from "react";

import WorldContex from "../../context/index";
import { Box } from "@mui/system";

const Home = () => {
  // Trayendo contexto
  const myContext = useContext(WorldContex);
  const { open } = myContext;
  return (
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: open ? 33 : 8, marginTop: 10}}>
        <h2>Hola a todos</h2>
      </Box>
  );
};

export default Home;
