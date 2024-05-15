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
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import SimpleFooter from "../../../examples/Footers/SimpleFooter";
import CaseStudyCard from '../../../examples/Cards/CaseStudyCard';

// Routes
import routes from "../../../routes";
import footerRoutes from "../../../footer.routes";

// Images
import bgImage from "../../../assets/images/headerBackground.jpg";
import post2 from "../../../assets/images/case-study/caseStudy2.png";

const pageTitle = "Solutions"
const pageSubTitle = "At ControlWorks BAS, we recognize that every building has unique needs. That's why we offer a comprehensive suite of building automation system (BAS) solutions designed to optimize comfort, efficiency, and cost savings across a variety of building types."
const caseStudy = "ControlWorks Enhances Luxury Retail Experience at Dior's New Rodeo Drive Flagship"
const projectOverview = "ControlWorks BAS is proud to be a part of the construction for Christian Dior's new flagship boutique on Rodeo Drive in Beverly Hills, California. This highly anticipated project will create a luxurious and dynamic retail environment, showcasing Dior's renowned fashion and commitment to innovation. ControlWorks BAS is providing a comprehensive building automation system (BAS) solution to ensure optimal comfort, energy efficiency, and seamless control for this world-class destination."
const challengesDescription = "Creating a luxurious retail experience requires a meticulously controlled environment. Key challenges for the BAS system include:"
const challenges = [{
  challenge: "Precise climate control",
  description: "Maintaining consistent temperature and humidity levels is crucial for customer comfort, protecting high-end merchandise, and ensuring optimal product presentation.",
}, {
  challenge: "Zoned comfort",
  description: "Different areas within the boutique may have varying temperature and airflow requirements, such as open sales floors compared to VIP fitting rooms.",
}, {
  challenge: "Energy efficiency",
  description: "A high-performance BAS is essential for minimizing energy consumption and operational costs for a large retail space.",
}, {
  challenge: "Flexibility and future-proofing",
  description: "The BAS needs to be adaptable to accommodate potential future changes in the store layout or operations.",
}]
const solutionsDescription = "ControlWorks BAS is implementing a state-of-the-art BAS solution featuring:"
const solutions = [{
  solution: "Variable refrigerant flow (VRF) systems",
  description: "VRF technology provides efficient and precise temperature control throughout the boutique. VRF systems offer superior zoning capabilities, allowing for independent control of different areas.",
}, {
  solution: "Packaged rooftop air handling units (AHUs)",
  description: "These pre-assembled units provide efficient ventilation and air conditioning for large open spaces within the store.",
}, {
  solution: "Comprehensive HVAC control",
  description: "ControlWorks BAS will integrate and manage all HVAC equipment, ensuring optimal operation and efficient energy use.",
}, {
  solution: "Open BACnet® DDC System",
  description: "ControlWorks BAS proposes an open BACnet Building Automation and Control Networks (BACnet) Direct Digital Control (DDC) system. This open protocol ensures seamless communication between various equipment and the BAS.",
}]
const resultsDescription = "By implementing the ControlWorks BAS solution, Dior's new Rodeo Drive flagship will benefit from:"
const results = [{
  result: "Enhanced customer comfort",
  description: "Precise climate control ensures a luxurious and enjoyable shopping experience for all customers.",
}, {
  result: "Optimal product presentation",
  description: "Consistent temperature and humidity levels safeguard the integrity of high-end merchandise.",
}, {
  result: "Improved energy efficiency",
  description: "The BAS will optimize HVAC operation, leading to reduced energy consumption and lower operational costs.",
}, {
  result: "Flexibility and scalability",
  description: "The open BACnet system can adapt to future changes in the store layout or integrate with additional technologies.",
}, {
  result: "Simplified maintenance",
  description: "The use of standardized communication protocols facilitates easier troubleshooting and maintenance of the BAS.",
}]
const conclusion = "ControlWorks BAS understands the unique requirements of high-end retail environments. Our proposed BAS solution will deliver superior comfort, energy efficiency, and operational flexibility for Dior's new Rodeo Drive flagship. The open BACnet DDC system ensures a future-proof solution that can adapt and evolve alongside Dior's vision for this landmark retail destination."

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
              {pageTitle}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              {pageSubTitle}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <CaseStudyCard 
        image={post2}
        caseStudy={caseStudy}
        projectOverview={projectOverview}
        challengesDescription={challengesDescription}
        challenges={challenges}
        solutionsDescription={solutionsDescription}
        solutions={solutions}
        resultsDescription={resultsDescription}
        results={results}
        conclusion={conclusion}
      />
      <MKBox pt={6} px={1} mt={6}>
        <SimpleFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default CaseStudy2;
