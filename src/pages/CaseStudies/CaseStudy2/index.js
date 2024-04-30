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

function CaseStudy2() {
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
                ControlWorks Enhances Luxury Retail Experience at Dior's New Rodeo Drive Flagship
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Project Overview
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                ControlWorks BAS is proud to be a part of the construction for Christian Dior's new flagship boutique on Rodeo Drive in Beverly Hills, California. This highly anticipated project will create a luxurious and dynamic retail environment, showcasing Dior's renowned fashion and commitment to innovation. ControlWorks BAS is providing a comprehensive building automation system (BAS) solution to ensure optimal comfort, energy efficiency, and seamless control for this world-class destination.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Challenges
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                Creating a luxurious retail experience requires a meticulously controlled environment. Key challenges for the BAS system include:
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Precise climate control</b>: Maintaining consistent temperature and humidity levels is crucial for customer comfort, protecting high-end merchandise, and ensuring optimal product presentation.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Zoned comfort</b>: Different areas within the boutique may have varying temperature and airflow requirements, such as open sales floors compared to VIP fitting rooms.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Energy efficiency</b>: A high-performance BAS is essential for minimizing energy consumption and operational costs for a large retail space.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Flexibility and future-proofing</b>: The BAS needs to be adaptable to accommodate potential future changes in the store layout or operations.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Solutions
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                ControlWorks BAS is implementing a state-of-the-art BAS solution featuring:
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Variable refrigerant flow (VRF) systems</b>:  VRF technology provides efficient and precise temperature control throughout the boutique. VRF systems offer superior zoning capabilities, allowing for independent control of different areas.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Packaged rooftop air handling units (AHUs)</b>: These pre-assembled units provide efficient ventilation and air conditioning for large open spaces within the store.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Comprehensive HVAC control</b>: ControlWorks BAS will integrate and manage all HVAC equipment, ensuring optimal operation and efficient energy use.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Open BACnet® DDC System</b>: ControlWorks BAS proposes an open BACnet Building Automation and Control Networks (BACnet) Direct Digital Control (DDC) system. This open protocol ensures seamless communication between various equipment and the BAS.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Results
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                By implementing the ControlWorks BAS solution, Dior's new Rodeo Drive flagship will benefit from:
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Enhanced customer comfort</b>: Precise climate control ensures a luxurious and enjoyable shopping experience for all customers.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Optimal product presentation</b>: Consistent temperature and humidity levels safeguard the integrity of high-end merchandise.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Improved energy efficiency</b>: The BAS will optimize HVAC operation, leading to reduced energy consumption and lower operational costs.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Flexibility and scalability</b>: The open BACnet system can adapt to future changes in the store layout or integrate with additional technologies.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • <b>Simplified maintenance</b>: The use of standardized communication protocols facilitates easier troubleshooting and maintenance of the BAS.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Conclusion
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                ControlWorks BAS understands the unique requirements of high-end retail environments.  Our proposed BAS solution will deliver superior comfort, energy efficiency, and operational flexibility for Dior's new Rodeo Drive flagship.  The open BACnet DDC system ensures a future-proof solution that can adapt and evolve alongside Dior's vision for this landmark retail destination.
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

export default CaseStudy2;
