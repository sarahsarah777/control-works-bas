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

const cards = [{
  image: energy,
  name: "Energy Management",
  description: "Gain valuable insights into your building's energy consumption and identify opportunities for significant cost savings.",
}, {
  image: security,
  name: "Security & Access Control",
  description: "Integrate your BAS with security systems for comprehensive building management and enhanced security measures.",
}, {
  image: lighting,
  name: "Lighting Control",
  description: "Implement intelligent lighting systems that automatically adjust based on occupancy and natural light, creating a more energy-efficient environment.",
}, {
  image: hvac,
  name: "HVAC Optimization",
  description: "Gain precise control over heating, ventilation, and air conditioning systems to ensure occupant comfort while minimizing energy consumption.",
}]


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
          {cards.map((p, i) => (
            <Grid item xs={12} lg={6}>
              <MKBox mb={i < 2 ? 1 : { xs: 1, md: 0 }}>
                <HorizontalTeamCardDark
                  image={p.image}
                  name={p.name}
                  position={{ color: "info", label: "" }}
                  description={p.description}
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default LightCards;
