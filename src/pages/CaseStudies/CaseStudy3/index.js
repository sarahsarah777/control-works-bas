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
import MKButton from "../../../components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import SimpleFooter from "../../../examples/Footers/SimpleFooter";

// Routes
import routes from "../../../routes";
import footerRoutes from "../../../footer.routes";

// Images
import bgImage from "../../../assets/images/headerBackground.jpg";

function CaseStudy3() {
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
              <ArrowBackIcon fontSize="large"/>
            </a>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <MKTypography variant="h6" textTransform="uppercase" color="secondary">
                Case Study
              </MKTypography>
              <MKTypography variant="h2">
                ControlWorks Empowers Data-Driven Learning at Mt. San Jacinto College's New STEM Building
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Project Overview
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
              ControlWorks BAS partnered with Mt. San Jacinto College (MSJC) to deliver a best-in-class building automation system (BAS) for their innovative new STEM building. This state-of-the-art facility fosters a dynamic learning environment for Science, Technology, Engineering, and Math (STEM) education. ControlWorks BAS designed and implemented a system that optimizes building operations, ensures occupant comfort, and provides valuable data for educational purposes.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Challenges
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                MSJC's new STEM building features advanced laboratories, classrooms, and collaborative learning spaces. The primary challenges for the BAS system included:
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Precise environmental control</b>: Maintaining consistent temperature and humidity levels is crucial for occupant comfort, lab equipment function, and efficient energy use.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Data integration</b>: The BAS needed to seamlessly integrate with MSJC's existing system to provide a comprehensive view of building performance.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Educational value</b>: The college desired a BAS that could provide real-time data for educational purposes, allowing students to gain practical insights into building systems and sustainability practices.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Solutions
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                ControlWorks BAS implemented a robust and scalable BAS solution leveraging Tridium's Niagara Framework:
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Comprehensive system control</b>: The BAS provides centralized control over the hot water system, chilled water system, air handling units (AHUs), and lab exhaust fans (LEFs). This ensures optimal operation for temperature control, ventilation, and efficient energy consumption.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Data integration</b>: ControlWorks BAS seamlessly integrated with MSJC's existing system, enabling the consolidation of data from various sources into a single platform.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Customizable Niagara graphics</b>: Our team developed custom graphical user interfaces within Niagara, featuring thermal floorplans for intuitive visualization of temperature data throughout the building.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Real-time data access</b>:  The BAS provides real-time access to critical building performance metrics, allowing instructors to integrate this data into their curriculum. Students can monitor energy consumption, temperature fluctuations, and other parameters, gaining valuable insights into building systems and sustainability principles.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Results
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                By implementing the ControlWorks BAS solution, MSJC's new STEM building benefits from:
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Enhanced comfort and learning environment</b>: Precise environmental control ensures optimal conditions for learning and research activities.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Improved operational efficiency</b>: The BAS optimizes system performance, leading to reduced energy consumption and lower operational costs.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Data-driven learning</b>: Real-time data from the BAS provides a unique educational tool, allowing students to engage with and understand building systems and sustainability practices.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Informed decision-making</b>: Building operators have access to comprehensive data for informed decision-making regarding maintenance, energy use, and occupant comfort.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Conclusion
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                ControlWorks BAS's expertise in building automation systems empowers educational institutions like MSJC to create intelligent and data-driven learning environments. The BAS solution for the new STEM building fosters occupant comfort, optimizes operations, and provides a unique educational tool, all while contributing to a sustainable future.
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

export default CaseStudy3;
