/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/

// Material Kit 2 React base styles
import borders from "../../../../assets/theme/base/borders";
import boxShadows from "../../../../assets/theme/base/boxShadows";

const { borderRadius } = borders;
const { xxl } = boxShadows;

export default {
  styleOverrides: {
    paper: {
      borderRadius: borderRadius.lg,
      boxShadow: xxl,
    },

    paperFullScreen: {
      borderRadius: 0,
    },
  },
};
