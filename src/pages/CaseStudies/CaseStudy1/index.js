/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/
// icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import SimpleFooter from "../../../examples/Footers/SimpleFooter";

// Routes
import routes from "../../../routes";
import footerRoutes from "../../../footer.routes";

// Images
import bgImage from "../../../assets/images/headerBackground.jpg";
import post1 from "../../../assets/images/case-study/caseStudy1.png";

function CaseStudy1() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
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
              Solutions
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
            At ControlWorks BAS, we recognize that every building has unique needs. That's why we offer a comprehensive suite of building automation system (BAS) solutions designed to optimize comfort, efficiency, and cost savings across a variety of building types.            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      > 
        <MKBox component="section" py={12}>
          <Container>
            <a href="../solutions">
              <ArrowBackIcon fontSize="large" color="primary" />
            </a>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <MKBox component="img" src={post1} alt="post1" width="100%" style={{borderRadius: "15px"}}/>
              <MKTypography variant="h6" textTransform="uppercase" color="secondary" mt={5}>
                Case Study
              </MKTypography>
              <MKTypography variant="h2">
                ControlWorks Optimizes Critical Environment for Edwards Lifesciences
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Project Overview
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                ControlWorks BAS partnered with Edwards Lifesciences on the critical environment construction of their new Building E.  This facility houses multiple laboratories dedicated to vital research activities. Precise environmental control is essential to ensure the integrity of research and the safety of lab personnel.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Challenges
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                Edwards LifeSciences required a BAS solution that could meet the stringent requirements of a critical environment, similar to the challenges outlined in the previous case study. Here's a reiteration:
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Maintaining precise temperature and humidity levels</b>: Fluctuations can compromise research and damage sensitive equipment.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Ensuring air quality</b>: Labs often utilize hazardous materials, so proper ventilation and air filtration are crucial.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Fume hood control</b>: Fume hoods require specific airflow patterns to safely capture and exhaust hazardous fumes.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Real-time monitoring and data collection</b>: Continuous monitoring of critical environmental parameters and data collection for analysis are essential.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Solutions
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                ControlWorks BAS addressed these challenges with a similar approach, leveraging the information from the Construction link:
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Siemens Desigo Building Automation System</b>: A powerful platform designed for complex building environments like Building E.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Network of Siemens field devices</b>: Sensors throughout the building provide real-time data on critical environmental conditions.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Siemens Desigo Optic software</b>: A central hub for data collection, visualization, and analysis, empowering real-time monitoring and informed decision-making.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Fume hood integration</b>: Ensures proper airflow for safety and efficient fume exhaust.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Customizable alarms</b>: Notify operators of out-of-range environmental conditions, allowing for immediate corrective action.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Results
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                By implementing the Siemens Desigo BAS solution, ControlWorks BAS helped Edwards Lifesciences achieve significant improvements in their critical environment:
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Precise environmental control</b>: Consistent temperature and humidity maintain optimal research conditions and protect sensitive equipment.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Enhanced air quality</b>: Real-time monitoring allows for proactive adjustments to ventilation and filtration systems, safeguarding personnel health.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Optimized fume hood operation</b>: Maximizes safety and efficiency.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Improved operational efficiency</b>: Real-time data and user-friendly dashboards empower building operators to identify trends, optimize system performance, and potentially contribute to LEED Gold certification goals.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Peace of mind</b>: Edwards LifeSciences can be confident that their critical environment is meticulously controlled and monitored by a reliable BAS system.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Conclusion
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                ControlWorks BAS’s expertise and the Siemens Desigo BAS solution delivered a successful outcome for Edwards LifeSciences' critical environment in Building E. The system ensures optimal environmental conditions, safeguards personnel health, and streamlines operational efficiency, allowing Edwards LifeSciences to focus on their vital research endeavors.
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <SimpleFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default CaseStudy1;
