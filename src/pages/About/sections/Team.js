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

const heading = "Meet the Sales Team"
const cards = [{
  image: profile,
  name: "David Swanson",
  position: "Branch Manager",
  location: "Chino, CA",
}, {
  image: profile,
  name: "Tim Potter",
  position: "Branch Manager",
  location: "Las Vegas, NV",
}, {
  image: profile,
  name: "Chris Pasley",
  position: "Sales",
  location: "Chino, CA",
}, {
  image: profile,
  name: "Ben Swanson",
  position: "Sales",
  location: "Chino, CA",
}, {
  image: profile,
  name: "Rick Cummings",
  position: "Sales",
  location: "Chino, CA",
}]
const linkHeading = "Become part of our team"
const linkText = "Learn More"

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
              {heading}
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {cards.map((p, i) => (
            <Grid item xs={12} lg={6}>
              <MKBox mb={i < 2 ? 1 : { xs: 1, lg: 0 }}>
                <HorizontalTeamCard
                  image={p.image}
                  name={p.name}
                  position={{ color: "info", label: p.position }}
                  description={[<><PlaceIcon style={{marginRight: "5px"}}/>{p.location}</>]}
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mt: 6 }}>
            <MKTypography variant="h3" color="white">
              {linkHeading}
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
                {linkText}
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
