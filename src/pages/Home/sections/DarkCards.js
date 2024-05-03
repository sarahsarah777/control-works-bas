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
import MKTypography from "../../../components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "../../../examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import enhancedComfort from "../../../assets/images/home/enhancedComfort.png";
import experiencedTeam from "../../../assets/images/home/experiencedTeam.png";
import increasedEfficiency from "../../../assets/images/home/increasedEfficiency.png";
import unmatchedFlexibility from "../../../assets/images/home/unmatchedFlexibility.png";

const heading = "Building Intelligence, One System at a Time"
const subheading = "Unlock the Potential of Your Building with Smarter Automation"
const cards = [{
  image: enhancedComfort,
  name: "Enhanced Comfort",
  description: "Create a comfortable and productive environment with precise temperature control, optimized lighting, and improved air quality.",
}, {
  image: increasedEfficiency,
  name: "Increased Efficiency",
  description: "Reduce energy consumption and operating costs with intelligent BAS control of your HVAC, lighting, and other systems.",
}, {
  image: experiencedTeam,
  name: "Experienced Team",
  description: "Our team of engineers and technicians possesses a proven track record of successful BAS implementations across diverse building types.",
}, {
  image: unmatchedFlexibility,
  name: "Unmatched Flexibility",
  description: "Our expertise in various platforms allows us to tailor the Building Automation System to your specific requirements and budget.",
}]

function DarkCards() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              {heading}
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              {subheading}
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {cards.map((p, i) => (
            <Grid item xs={12} lg={6}>
              <MKBox mb={i < 2 ? 5 : { xs: 5, md: 0 }}>
                <HorizontalTeamCard
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

export default DarkCards;
