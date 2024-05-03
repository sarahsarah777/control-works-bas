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
import abbCylon from "../../../assets/images/services/abbCylon.png";
import pelican from "../../../assets/images/services/pelican.png";
import siemens from "../../../assets/images/services/siemens.png";
import tridium from "../../../assets/images/services/tridium.png";

const logos = [siemens, abbCylon, tridium, pelican]

function Logos() {
  return (
    <MKBox component="section">
      <Container>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {logos.map((p) => (
            <Grid item xs={6} md={6} lg={3}>
              <MKBox component="img" src={p} alt={p} width="100%" opacity={0.7} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Logos;
