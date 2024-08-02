/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "../../components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import HeaderNavbar from "../../examples/Navbars/HeaderNavbar";
import SimpleFooter from "../../examples/Footers/SimpleFooter";

// About Us page sections
import LightCards from "./sections/LightCards";
import DarkCards from "./sections/DarkCards";
import Newsletter from "./sections/Newsletter";

// Routes
import routes from "../../routes";
import footerRoutes from "../../footer.routes";

// Images
import bgImage from "../../assets/images/headerBackground.jpg";

const pageTitle = "ControlWorks"
const pageSubTitle = "ControlWorks is your trusted partner for Building Automation Systems (BAS). We design, install, and maintain customized BAS solutions that optimize comfort, efficiency, and cost savings for your unique building needs."

function Home() {
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
        <HeaderNavbar pageTitle={pageTitle} pageSubTitle={pageSubTitle}/>
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
        <LightCards />
        <DarkCards />
        <Newsletter />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <SimpleFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
