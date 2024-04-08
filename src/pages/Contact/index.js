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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import SimpleFooter from "../../examples/Footers/SimpleFooter";

// About Us page sections
import ContactInfo from "./sections/ContactInfo";

// Routes
import routes from "../../routes";
import footerRoutes from "../../footer.routes";

// Images
import bgImage from "../../assets/images/headerBackground.jpg";

function Contact() {
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
            Contact Us
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
          At ControlWorks BAS, we're here to help you unlock the potential of your building with a customized solution. We have two locations for your convenience: Chino, California and Las Vegas, Nevada. We invite you to get in touch and discuss your project.
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
      <ContactInfo />
    </Card>
    <MKBox pt={6} px={1} mt={6}>
      <SimpleFooter content={footerRoutes} />
    </MKBox>
  </>
  );
}

export default Contact;
