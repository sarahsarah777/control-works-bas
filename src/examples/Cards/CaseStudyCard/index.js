/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

function CaseStudyCard({ image, caseStudy, projectOverview, challengesDescription, challenges, solutionsDescription, solutions, resultsDescription, results, conclusion }) {
  return (
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
              <MKBox component="img" src={image} alt="image" width="100%" style={{borderRadius: "15px"}}/>

              <MKTypography variant="h6" textTransform="uppercase" color="secondary" mt={5}>
                Case Study
              </MKTypography>
              <MKTypography variant="h2">
                {caseStudy}
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Project Overview
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                {projectOverview}
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Challenges
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                {challengesDescription}
              </MKTypography>
              {challenges.map((p) => (
                <MKTypography variant="body1" opacity={0.8} ml={3}>
                  • <b>{p.challenge}</b>: {p.description}
                </MKTypography>
              ))}


              <MKTypography variant="h5" mt={5}>
                Solutions
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                {solutionsDescription}
              </MKTypography>
              {solutions.map((p) => (
                <MKTypography variant="body1" opacity={0.8} ml={3}>
                  • <b>{p.solution}</b>: {p.description}
                </MKTypography>
              ))}

              <MKTypography variant="h5" mt={5}>
                Results
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                {resultsDescription}
              </MKTypography>
              {results.map((p) => (
                <MKTypography variant="body1" opacity={0.8} ml={3}>
                  • <b>{p.result}</b>: {p.description}
                </MKTypography>
              ))}

              <MKTypography variant="h5" mt={5}>
                Conclusion
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                {conclusion}
              </MKTypography>

            </Grid>
          </Container>
        </MKBox>
      </Card>
  );
}

// Typechecking props for the RotatingCard
CaseStudyCard.propTypes = {
  image: PropTypes.node,
  caseStudy: PropTypes.string,
  projectOverview: PropTypes.string,
  challengesDescription: PropTypes.string,
  challenges: PropTypes.array,
  solutionsDescription: PropTypes.string,
  solutions: PropTypes.array,
  resultsDescription: PropTypes.string,
  results: PropTypes.array,
  conclusion: PropTypes.string,
};

export default CaseStudyCard;
