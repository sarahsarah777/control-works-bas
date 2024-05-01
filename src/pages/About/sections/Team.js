/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/

//Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlaceIcon from '@mui/icons-material/Place';

// react-router components
import { Link } from "react-router-dom";

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
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={profile}
                name="David Swanson"
                position={{ color: "info", label: "Branch Manager" }}
                description={[<><PlaceIcon style={{marginRight: "5px"}}/>Chino, CA</>]}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={profile}
                name="Chris Pasley"
                position={{ color: "info", label: "Sales" }}
                description={[<><PlaceIcon style={{marginRight: "5px"}}/>Chino, CA</>]}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={profile}
                name="Darren Stevens"
                position={{ color: "info", label: "Project Manager" }}
                description={[<><PlaceIcon style={{marginRight: "5px"}}/>Chino, CA</>]}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={profile}
                name="Shawn Goddard"
                position={{ color: "info", label: "Programmer" }}
                description={[<><PlaceIcon style={{marginRight: "5px"}}/>Chino, CA</>]}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={profile}
                name="Dave Luithle"
                position={{ color: "info", label: "Project Manager" }}
                description={[<><PlaceIcon style={{marginRight: "5px"}}/>Chino, CA</>]}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={profile}
                name="Ben Swanson"
                position={{ color: "info", label: "Sales" }}
                description={[<><PlaceIcon style={{marginRight: "5px"}}/>Chino, CA</>]}
              />
            </MKBox>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mt: 6 }}>
            <MKTypography variant="h3" color="white">
              Become part of our team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              <MKTypography
                component={Link}
                to="/careeropportunities"
                variant="body2"
                fontWeight="regular"
                color="white"
                textTransform="capitalize"
              >
                Learn More
                <ArrowForwardIcon />
              </MKTypography>
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
