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
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import SimpleFooter from "../../examples/Footers/SimpleFooter";
import JobCard from "../../examples/Cards/ReviewCards/JobCard";

// Routes
import routes from "../../routes";
import footerRoutes from "../../footer.routes";

// Images
import bgImage from "../../assets/images/headerBackground.jpg";
import team from "../../assets/images/about/team.png";

const pageTitle = "Career Opportunities"
const pageSubTitle = "Shape the future of intelligent buildings with a rewarding career at ControlWorks BAS. We offer exciting opportunities for passionate individuals to contribute to innovative building automation solutions."
const heading = "Join Our Team"
const subHeading = "Are you ready to push the boundaries of building technology? ControlWorks BAS is seeking talented individuals to join our mission of creating smarter, more sustainable buildings."
const jobListings = [{
  role: "Controls Engineer",
  location: "Chino, CA",
  description: "Do you thrive in a fast-paced environment where you can leverage your automation expertise to create efficient solutions? Are you passionate about building systems and optimizing their performance? If so, then we want you on our team!",
  link: "../controls",
}, {
  role: "Service Technician",
  location: "Chino, CA",
  description: "Are you a hands-on problem-solver with a knack for fixing things? Do you enjoy working independently and ensuring systems run smoothly? If so, we want you on our team!",
  link: "../service",
}]

function CareerOpportunities() {
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
            <a href="../about">
              <ArrowBackIcon fontSize="large" color="primary" />
            </a>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <MKBox component="img" src={team} alt="team" width="100%" style={{borderRadius: "15px"}}/>
              <MKTypography variant="h6" textTransform="uppercase" color="secondary" mt={5}>
                {pageTitle}
              </MKTypography>
              <MKTypography variant="h2">
                {heading}
              </MKTypography>

              <MKTypography variant="h5" mt={2}>
                {subHeading}
              </MKTypography>
              <MKBox component="section" py={8}>
                  <Container>
                    <Grid container spacing={3} alignItems="center">
                        <Grid container justifyContent="flex-start"  item xs={12} lg={12}>
                          {jobListings.map((p) => (
                            <Grid item xs={12} md={6}>
                              <MKBox mb={5} mr={2} ml={2}>
                                <JobCard 
                                  color="info"
                                  role={p.role}
                                  location={p.location}
                                  description={p.description}
                                  link={p.link}
                                />
                              </MKBox>
                            </Grid>
                          ))}
                        </Grid>
                    </Grid>
                  </Container>
                </MKBox>
              
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

export default CareerOpportunities;
