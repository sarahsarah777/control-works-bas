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

// Material Kit 2 React examples
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";

// Images
import siemensConference from "../../../assets/images/about/siemensConference.jpg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={4} sx={{ mr: "auto", mt: { xs: 3, lg: 0 } }}>
        <MKBox
          component="img"
          src={siemensConference}
          alt="Siemens 2024 Confrence"
          borderRadius="lg"
          width="100%"
          position="relative"
          zIndex={1}
        />
          </Grid>
          <Grid item xs={12} lg={6}>
            {/* <Grid container justifyContent="flex-start"> */}
              <Grid item xs={12} md={12}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    // icon="public"
                    title="Building Intelligence Powered by a Great Team"
                    description="Since 2001, ControlWorks BAS has been redefining excellence in Building Automation Systems. We're a company built on a foundation of a truly great team – our unwavering commitment to service and expertise is what sets us apart. Whether you're looking to upgrade your existing systems, design a new building from the ground up, or simply improve energy efficiency, ControlWorks BAS is your trusted partner. We're passionate about intelligent buildings and creating exceptional customer experiences. Contact us today and let's discuss how we can help you achieve your building automation goals."
                  />
                </MKBox>
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    // icon="payments"
                    title="Seamless Integration"
                    description="Our expertise ensures your BAS integrates seamlessly with existing systems like HVAC, lighting, and security."
                  />
                </MKBox>
              </Grid> */}
            {/* </Grid> */}
          </Grid>
          
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
