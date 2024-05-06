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

const heading = "Customized Solutions, Exceptional Results"
const subheading = "We specialize in a variety of BAS solutions to address your specific needs:"
const cards = [{
  icon: <BusinessIcon color="primary"/>,
  title: "Office Buildings",
  description: "Create a comfortable and productive work environment with intelligent temperature control, optimized lighting, and improved air quality.",
}, {
  icon: <StorefrontIcon color="primary"/>,
  title: "Retail Stores",
  description: "Enhance the customer experience with BAS systems that manage lighting, temperature, and security for a more inviting atmosphere.",
}, {
  icon: <SchoolIcon color="primary"/>,
  title: "Schools & Universities",
  description: "Provide a safe and comfortable learning environment with BAS solutions that optimize air quality, lighting, and energy use.",
}, {
  icon: <LocalHospitalIcon color="primary"/>,
  title: "Hospitals & Healthcare Facilities",
  description: "Ensure critical environments maintain precise temperature and humidity levels while maximizing energy efficiency.",
}]

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
              {heading}
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              {subheading}
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {cards.map((p, i) => (
            <Grid item xs={12} lg={6}>
              <MKBox mb={i < 2 ? 1 : { xs: 1, lg: 0 }} bgColor="white" borderRadius="0.75rem" style={{padding: "20px"}}>
                <DefaultInfoCard
                  icon={<MKTypography
                    display="block"
                    variant="h3"
                    textGradient
                  >{p.icon}</MKTypography>}
                  title={p.title}
                  description={p.description}
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DarkCards;
