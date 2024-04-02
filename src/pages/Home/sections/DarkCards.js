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
              Building Intelligence, One System at a Time
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
            Unlock the Potential of Your Building with Smarter Automation
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={enhancedComfort}
                name="Enhanced Comfort"
                position={{ color: "info", label: "" }}
                description="Create a comfortable and productive environment with precise temperature control, optimized lighting, and improved air quality."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={increasedEfficiency}
                name="Increased Efficiency"
                position={{ color: "info", label: "" }}
                description="Reduce energy consumption and operating costs with intelligent BAS control of your HVAC, lighting, and other systems."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={experiencedTeam}
                name="Experienced Team"
                position={{ color: "info", label: "" }}
                description="Our team of engineers and technicians possesses a proven track record of successful BAS implementations across diverse building types."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={unmatchedFlexibility}
                name="Unmatched Flexibility"
                position={{ color: "info", label: "" }}
                description="Our expertise in various platforms allows us to tailor the Building Automation System to your specific requirements and budget."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DarkCards;
