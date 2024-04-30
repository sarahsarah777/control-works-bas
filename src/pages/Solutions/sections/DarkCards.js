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
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";

// @mui icons
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BusinessIcon from '@mui/icons-material/Business';

function DarkCards() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Customized Solutions, Exceptional Results
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              We specialize in a variety of BAS solutions to address your specific needs:
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1} bgColor="white" borderRadius="0.75rem" style={{padding: "20px"}}>
              <DefaultInfoCard
                icon={<MKTypography
                  display="block"
                  variant="h3"
                  textGradient
                ><BusinessIcon color="primary"/></MKTypography>}
                title="Office Buildings"
                description="Create a comfortable and productive work environment with intelligent temperature control, optimized lighting, and improved air quality."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }} bgColor="white" borderRadius="0.75rem" style={{padding: "20px"}}>
              <DefaultInfoCard
                icon={<MKTypography
                  display="block"
                  variant="h3"
                  textGradient
                ><StorefrontIcon color="primary"/></MKTypography>}
                title="Retail Stores"
                description="Enhance the customer experience with BAS systems that manage lighting, temperature, and security for a more inviting atmosphere."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }} bgColor="white" borderRadius="0.75rem" style={{padding: "20px"}}>
              <DefaultInfoCard
                icon={<MKTypography
                  display="block"
                  variant="h3"
                  textGradient
                ><SchoolIcon color="primary"/></MKTypography>}
                title="Schools & Universities"
                description="Provide a safe and comfortable learning environment with BAS solutions that optimize air quality, lighting, and energy use."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1} bgColor="white" borderRadius="0.75rem" style={{padding: "20px"}}>
              <DefaultInfoCard
                icon={<MKTypography
                  display="block"
                  variant="h3"
                  textGradient
                ><LocalHospitalIcon color="primary"/></MKTypography>}
                title="Hospitals & Healthcare Facilities"
                description="Ensure critical environments maintain precise temperature and humidity levels while maximizing energy efficiency."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DarkCards;
