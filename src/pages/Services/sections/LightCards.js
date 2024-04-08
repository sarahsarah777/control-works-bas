/* eslint-disable react/jsx-no-duplicate-props */
/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/


// @mui icons
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import SecurityIcon from '@mui/icons-material/Security';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HvacIcon from '@mui/icons-material/Hvac';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";


function LightCards() {
  return (
    <MKBox component="section" pt={12}  pb={12}>
      <Container>
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon={<MKTypography
                      display="block"
                      variant="h3"
                      textGradient
                    ><HvacIcon color="primary"/></MKTypography>}
                    title="HVAC Optimization"
                    description="Gain precise control over heating, ventilation, and air conditioning systems to ensure occupant comfort while minimizing energy consumption."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon={<MKTypography
                      display="block"
                      variant="h3"
                      textGradient
                    ><LightbulbIcon color="primary"/></MKTypography>}
                    title="Lighting Control"
                    description="Implement intelligent lighting systems that automatically adjust based on occupancy and natural light, creating a more energy-efficient environment."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon={<MKTypography
                      display="block"
                      variant="h3"
                      textGradient
                    ><SecurityIcon color="primary"/></MKTypography>}
                    title="Security & Access Control"
                    description="Integrate your BAS with security systems for comprehensive building management and enhanced security measures."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon={<MKTypography
                      display="block"
                      variant="h3"
                      textGradient
                    ><EnergySavingsLeafIcon color="primary"/></MKTypography>}
                    title="Energy Management"
                    description="Gain valuable insights into your building's energy consumption and identify opportunities for significant cost savings."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
      </Container>
    </MKBox>
  );
}

export default LightCards;
