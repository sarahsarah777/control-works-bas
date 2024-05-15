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
import post3 from "../../../assets/images/case-study/caseStudy3.png";

const pageTitle = "Solutions"
const pageSubTitle = "At ControlWorks BAS, we recognize that every building has unique needs. That's why we offer a comprehensive suite of building automation system (BAS) solutions designed to optimize comfort, efficiency, and cost savings across a variety of building types."
const caseStudy = "ControlWorks Empowers Data-Driven Learning at Mt. San Jacinto College's New STEM Building"
const projectOverview = "ControlWorks BAS partnered with Mt. San Jacinto College (MSJC) to deliver a best-in-class building automation system (BAS) for their innovative new STEM building. This state-of-the-art facility fosters a dynamic learning environment for Science, Technology, Engineering, and Math (STEM) education. ControlWorks BAS designed and implemented a system that optimizes building operations, ensures occupant comfort, and provides valuable data for educational purposes."
const challengesDescription = "MSJC's new STEM building features advanced laboratories, classrooms, and collaborative learning spaces. The primary challenges for the BAS system included:"
const challenges = [{
  challenge: "Precise environmental control",
  description: "Maintaining consistent temperature and humidity levels is crucial for occupant comfort, lab equipment function, and efficient energy use.",
}, {
  challenge: "Data integration",
  description: "The BAS needed to seamlessly integrate with MSJC's existing system to provide a comprehensive view of building performance.",
}, {
  challenge: "Educational value",
  description: "The college desired a BAS that could provide real-time data for educational purposes, allowing students to gain practical insights into building systems and sustainability practices.",
}]
const solutionsDescription = "ControlWorks BAS implemented a robust and scalable BAS solution leveraging Tridium's Niagara Framework:"
const solutions = [{
  solution: "Comprehensive system control",
  description: "The BAS provides centralized control over the hot water system, chilled water system, air handling units (AHUs), and lab exhaust fans (LEFs). This ensures optimal operation for temperature control, ventilation, and efficient energy consumption.",
}, {
  solution: "Data integration",
  description: "ControlWorks BAS seamlessly integrated with MSJC's existing system, enabling the consolidation of data from various sources into a single platform.",
}, {
  solution: "Customizable Niagara graphics",
  description: "Our team developed custom graphical user interfaces within Niagara, featuring thermal floorplans for intuitive visualization of temperature data throughout the building.",
}, {
  solution: "Real-time data access",
  description: "The BAS provides real-time access to critical building performance metrics, allowing instructors to integrate this data into their curriculum. Students can monitor energy consumption, temperature fluctuations, and other parameters, gaining valuable insights into building systems and sustainability principles.",
}]
const resultsDescription = "By implementing the ControlWorks BAS solution, MSJC's new STEM building benefits from:"
const results = [{
  result: "Enhanced comfort and learning environment",
  description: "Precise environmental control ensures optimal conditions for learning and research activities.",
}, {
  result: "Improved operational efficiency",
  description: "The BAS optimizes system performance, leading to reduced energy consumption and lower operational costs.",
}, {
  result: "Data-driven learning",
  description: "Real-time data from the BAS provides a unique educational tool, allowing students to engage with and understand building systems and sustainability practices.",
}, {
  result: "Informed decision-making",
  description: "Building operators have access to comprehensive data for informed decision-making regarding maintenance, energy use, and occupant comfort.",
}]
const conclusion = "ControlWorks BAS's expertise in building automation systems empowers educational institutions like MSJC to create intelligent and data-driven learning environments. The BAS solution for the new STEM building fosters occupant comfort, optimizes operations, and provides a unique educational tool, all while contributing to a sustainable future."

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
              {pageTitle}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              {pageSubTitle}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <CaseStudyCard 
        image={post3}
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

export default CaseStudy3;
