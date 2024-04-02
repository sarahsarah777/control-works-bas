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
import HorizontalTeamCard from "../../../examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import retail from "../../../assets/images/solutions/retail.png";
import healthcare from "../../../assets/images/solutions/healthcare.png";
import office from "../../../assets/images/solutions/office.png";
import educational from "../../../assets/images/solutions/educational.png";

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
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={office}
                name="Office Buildings"
                position={{ color: "info", label: "Offices" }}
                description="Create a comfortable and productive work environment with intelligent temperature control, optimized lighting, and improved air quality."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={retail}
                name="Retail Stores"
                position={{ color: "info", label: "Retail Stores & Shopping Malls" }}
                description="Enhance the customer experience with BAS systems that manage lighting, temperature, and security for a more inviting atmosphere."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={educational}
                name="Educational Institutions"
                position={{ color: "info", label: "Schools & Universities" }}
                description="Provide a safe and comfortable learning environment with BAS solutions that optimize air quality, lighting, and energy use."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={healthcare}
                name="Healthcare Facilities"
                position={{ color: "info", label: "Hospitals & Healthcare Facilities" }}
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
