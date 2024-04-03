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
import MKBox from "../../../components/MKBox";

// Images
import abbCylon from "../../../assets/images/solutions/abbCylon.png";
import pelican from "../../../assets/images/solutions/pelican.png";
import siemens from "../../../assets/images/solutions/siemens.png";
import tridium from "../../../assets/images/solutions/tridium.png";

function Logos() {
  return (
    <MKBox component="section" pb={8}>
      <Container>
        <Grid container spacing={3} sx={{ mt: 12 }}>
          <Grid item xs={6} md={6} lg={3}>
            <MKBox component="img" src={siemens} alt="coinbase" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <MKBox component="img" src={abbCylon} alt="nasa" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <MKBox component="img" src={tridium} alt="netflix" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <MKBox component="img" src={pelican} alt="pinterest" width="100%" opacity={0.7} />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Logos;
