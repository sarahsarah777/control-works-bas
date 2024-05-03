/* eslint-disable no-param-reassign */
/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKTypography from "../../../components/MKTypography";

function HeaderNavbar({ pageTitle, pageSubTitle }) {
  return (
    <Container>
      <Grid
        container
        item
        xs={12}
        lg={8}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ mx: "auto", textAlign: "center" }}
      >
        <MKTypography
          variant="h1"
          color="white"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
          {pageTitle}
        </MKTypography>
        <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
          {pageSubTitle}
        </MKTypography>
      </Grid>
    </Container>
  );
}


export default HeaderNavbar;
