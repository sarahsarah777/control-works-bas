/* eslint-disable react/jsx-no-duplicate-props */
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

// Material Kit 2 React examples
import HorizontalTeamCardDark from "../../../examples/Cards/TeamCards/HorizontalTeamCardDark";

// Images
import energy from "../../../assets/images/services/energy.png";
import security from "../../../assets/images/services/security.png";
import lighting from "../../../assets/images/services/lighting.png";
import hvac from "../../../assets/images/services/hvac.png";

function LightCards() {
  return (
    <MKBox
      component="section"
      bgColor="white"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
      my={6}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCardDark
                image={energy}
                name="Energy Management"
                position={{ color: "info", label: "" }}
                description="Gain valuable insights into your building's energy consumption and identify opportunities for significant cost savings."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCardDark
                image={security}
                name="Security & Access Control"
                position={{ color: "info", label: "" }}
                description="Integrate your BAS with security systems for comprehensive building management and enhanced security measures."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCardDark
                image={lighting}
                name="Lighting Control"
                position={{ color: "info", label: "" }}
                description="Implement intelligent lighting systems that automatically adjust based on occupancy and natural light, creating a more energy-efficient environment."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCardDark
                image={hvac}
                name="HVAC Optimization"
                position={{ color: "info", label: "" }}
                description="Gain precise control over heating, ventilation, and air conditioning systems to ensure occupant comfort while minimizing energy consumption."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default LightCards;
