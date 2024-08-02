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
import post1 from "../../../assets/images/case-study/caseStudy1.png";

const pageTitle = "Solutions"
const pageSubTitle = "At ControlWorks BAS, we recognize that every building has unique needs. That's why we offer a comprehensive suite of building automation system (BAS) solutions designed to optimize comfort, efficiency, and cost savings across a variety of building types."
const caseStudy = "ControlWorks Optimizes Critical Environment for Edwards Lifesciences"
const projectOverview = "ControlWorks BAS partnered with Edwards Lifesciences on the critical environment construction of their new Building E. This facility houses multiple laboratories dedicated to vital research activities. Precise environmental control is essential to ensure the integrity of research and the safety of lab personnel."
const challengesDescription = "Edwards LifeSciences required a BAS solution that could meet the stringent requirements of a critical environment, similar to the challenges outlined in the previous case study. Here's a reiteration:"
const challenges = [{
  challenge: "Maintaining precise temperature and humidity levels",
  description: "Fluctuations can compromise research and damage sensitive equipment.",
}, {
  challenge: "Ensuring air quality",
  description: "Labs often utilize hazardous materials, so proper ventilation and air filtration are crucial.",
}, {
  challenge: "Critical environment control",
  description: "Fume hoods require specific airflow patterns to safely capture and exhaust hazardous fumes.",
}, {
  challenge: "Real-time monitoring and data collection",
  description: "Continuous monitoring of critical environmental parameters and data collection for analysis are essential.",
}]
const solutionsDescription = "ControlWorks BAS addressed these challenges with a similar approach, leveraging the information from the Construction link:"
const solutions = [{
  solution: "Siemens Desigo Building Automation System",
  description: "A powerful platform designed for complex building environments like Building E.",
}, {
  solution: "Network of Siemens field devices",
  description: "Sensors throughout the building provide real-time data on critical environmental conditions.",
}, {
  solution: "Siemens Desigo Optic software",
  description: "A central hub for data collection, visualization, and analysis, empowering real-time monitoring and informed decision-making.",
}, {
  solution: "Critical environment integration",
  description: "Ensures proper airflow for safety and efficient fume exhaust.",
}, {
  solution: "Customizable alarms",
  description: "Notify operators of out-of-range environmental conditions, allowing for immediate corrective action.",
}]
const resultsDescription = "By implementing the Siemens Desigo BAS solution, ControlWorks BAS helped Edwards Lifesciences achieve significant improvements in their critical environment:"
const results = [{
  result: "Precise environmental control",
  description: "Consistent temperature and humidity maintain optimal research conditions and protect sensitive equipment.",
}, {
  result: "Enhanced air quality",
  description: "Real-time monitoring allows for proactive adjustments to ventilation and filtration systems, safeguarding personnel health.",
}, {
  result: "Optimized fume hood operation",
  description: "Maximizes safety and efficiency.",
}, {
  result: "Improved operational efficiency",
  description: "Real-time data and user-friendly dashboards empower building operators to identify trends, optimize system performance, and potentially contribute to LEED Gold certification goals.",
}, {
  result: "Peace of mind",
  description: "Edwards LifeSciences can be confident that their critical environment is meticulously controlled and monitored by a reliable BAS system.",
}]
const conclusion = "ControlWorks BAS’s expertise and the Siemens Desigo BAS solution delivered a successful outcome for Edwards LifeSciences' critical environment in Building E. The system ensures optimal environmental conditions, safeguards personnel health, and streamlines operational efficiency, allowing Edwards LifeSciences to focus on their vital research endeavors."

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
              {pageTitle}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              {pageSubTitle}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <CaseStudyCard 
        image={post1}
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

export default CaseStudy1;
