/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/


// @mui icons
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";

function Awards() {
  return (
  <MKBox component="section" pb={12}>
    <Container>
    <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3">
            Awards & Recognition
            </MKTypography>
          </Grid>
      <Grid container spacing={3} alignItems="center">
          <Grid container justifyContent="flex-start"  item xs={12} lg={12}>
            <Grid item xs={12} md={6}>
              <MKBox mb={5}>
                <DefaultInfoCard
                  icon={<MKTypography
                    display="block"
                    variant="h3"
                    textGradient
                  ><EmojiEventsIcon color="primary"/></MKTypography>}
                  title="Best Overall 2023 Performance Southwest Region"
                  description="Siemens 2023"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={5}>
                <DefaultInfoCard
                  icon={<MKTypography
                    display="block"
                    variant="h3"
                    textGradient
                  ><EmojiEventsIcon color="primary"/></MKTypography>}
                  title="Ultimate Partner Rewards Program Silver Achievement"
                  description="Siemens 2017"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={{ xs: 5}}>
                <DefaultInfoCard
                  icon={<MKTypography
                    display="block"
                    variant="h3"
                    textGradient
                  ><EmojiEventsIcon color="primary"/></MKTypography>}
                  title="Ultimate Partner Rewards Program Platinum Achievement"
                  description="Siemens 2014"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={{ xs: 5}}>
                <DefaultInfoCard
                  icon={<MKTypography
                    display="block"
                    variant="h3"
                    textGradient
                  ><EmojiEventsIcon color="primary"/></MKTypography>}
                  title="Best Overall Performance in Southwest Territory"
                  description="Siemens 2012"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={5}>
                <DefaultInfoCard
                  icon={<MKTypography
                    display="block"
                    variant="h3"
                    textGradient
                  ><EmojiEventsIcon color="primary"/></MKTypography>}
                  title="Platinum Partner"
                  description="Siemens 2012"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={5}>
                <DefaultInfoCard
                  icon={<MKTypography
                    display="block"
                    variant="h3"
                    textGradient
                  ><EmojiEventsIcon color="primary"/></MKTypography>}
                  title="Best Overall Performance Southwest Territory"
                  description="Siemens 2011"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={{ xs: 5}}>
                <DefaultInfoCard
                  icon={<MKTypography
                    display="block"
                    variant="h3"
                    textGradient
                  ><EmojiEventsIcon color="primary"/></MKTypography>}
                  title="Gold Award - for achieving sales volume goal and outstanding sales growth"
                  description="Siemens 2009"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={{ xs: 5}}>
                <DefaultInfoCard
                  icon={<MKTypography
                    display="block"
                    variant="h3"
                    textGradient
                  ><EmojiEventsIcon color="primary"/></MKTypography>}
                  title="Cash is King Award"
                  description="Siemens 2009"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={{ xs: 5, md: 0 }}>
                <DefaultInfoCard
                  icon={<MKTypography
                    display="block"
                    variant="h3"
                    textGradient
                  ><EmojiEventsIcon color="primary"/></MKTypography>}
                  title="President’s Circle Award - In recognition of outstanding sales growth"
                  description="Staefa Control System 2004"
                />
              </MKBox>
            </Grid>
          </Grid>
      </Grid>
    </Container>
  </MKBox>
  );
}

export default Awards;
