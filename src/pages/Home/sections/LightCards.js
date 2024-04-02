/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/

// @mui icons
import InsightsIcon from '@mui/icons-material/Insights';
import SpeedIcon from '@mui/icons-material/Speed';
import UpdateIcon from '@mui/icons-material/Update';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "../../../examples/Cards/BlogCards/CenteredBlogCard";

// Images
import lef from "../../../assets/images/home/lef.png";

function LightCards() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon={<MKTypography
                      display="block"
                      variant="h3"
                      textGradient
                    ><InsightsIcon color="primary"/></MKTypography>}
                    title="Customized Approach"
                    description="We take the time to understand your unique needs and goals to develop a BAS solution tailored for your building."
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
                    ><SpeedIcon color="primary"/></MKTypography>}
                    title="Focus on Efficiency"
                    description="We prioritize energy-saving strategies to minimize your environmental impact and operating costs."
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
                    ><UpdateIcon color="primary"/></MKTypography>}
                    title="Long-Term Value"
                    description="Our BAS solutions deliver lasting benefits through increased efficiency and reduced maintenance needs."
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
                    ><TipsAndUpdatesIcon color="primary"/></MKTypography>}
                    title="Continuous Innovation"
                    description="We stay at the forefront of the BAS industry, leveraging the latest advancements to optimize your system."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={lef}
              title="Elevate your next project"
              description="ControlWorks BAS offers seamless integration, advanced features, and unparalleled reliability, empowering you to design intelligent spaces that truly perform."
              action={{
                type: "internal",
                route: "../pages/contact",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default LightCards;
