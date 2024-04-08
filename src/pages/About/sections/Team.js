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
import profile from "../../../assets/images/about/profile.png";

function Team() {
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
              Meet the Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Meet the Minds Behind Smarter Buildings
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={profile}
                name="David Swanson"
                position={{ color: "info", label: "Branch Manager" }}
                description="davids@controlworksbas.com"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={profile}
                name="Chris Pasley"
                position={{ color: "info", label: "Sales" }}
                description="chrisp@controlworksbas.com"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={profile}
                name="Dave Luithle"
                position={{ color: "info", label: "Project Manager" }}
                description="davidl@controlworksbas.com"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={profile}
                name="Ben Swanson"
                position={{ color: "info", label: "Sales" }}
                description="bens@controlworksbas.com"
              />
            </MKBox>
          </Grid>
         
          {/* <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team2}
                name="Don Titas"
                position={{ color: "info", label: "Position" }}
                description="Here is a description to be added later"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team2}
                name="David Luithle"
                position={{ color: "info", label: "Position" }}
                description="Here is a description to be added later"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team2}
                name="Andy Caliri"
                position={{ color: "info", label: "Position" }}
                description="Here is a description to be added later"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Sarah Padilla"
                position={{ color: "info", label: "Position" }}
                description="Here is a description to be added later"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Quintin Cardenas"
                position={{ color: "info", label: "Position" }}
                description="Here is a description to be added later"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team2}
                name="Nikolas King"
                position={{ color: "info", label: "Position" }}
                description="Here is a description to be added later"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team2}
                name="Michael Kemp"
                position={{ color: "info", label: "Position" }}
                description="Here is a description to be added later"
              />
            </MKBox>
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
