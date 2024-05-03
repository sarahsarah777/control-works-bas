/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/

// @mui icons
import InsightsIcon from '@mui/icons-material/Insights';
import SpeedIcon from '@mui/icons-material/Speed';
import UpdateIcon from '@mui/icons-material/Update';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "../../../examples/Cards/BlogCards/CenteredBlogCard";

// Images
import lef from "../../../assets/images/home/lef.png";

const cards = [{
  icon: <InsightsIcon color="primary"/>,
  title: "Customized Approach",
  description: "We take the time to understand your unique needs and goals to develop a BAS solution tailored for your building.",
}, {
  icon: <SpeedIcon color="primary"/>,
  title: "Focus on Efficiency",
  description: "We prioritize energy-saving strategies to minimize your environmental impact and operating costs.",
}, {
  icon: <UpdateIcon color="primary"/>,
  title: "Long-Term Value",
  description: "Our BAS solutions deliver lasting benefits through increased efficiency and reduced maintenance needs.",
}, {
  icon: <TipsAndUpdatesIcon color="primary"/>,
  title: "Continuous Innovation",
  description: "We stay at the forefront of the BAS industry, leveraging the latest advancements to optimize your system.",
}]

const card = {
  image: lef,
  title: "Elevate your next project",
  description: "ControlWorks BAS offers seamless integration, advanced features, and unparalleled reliability, empowering you to design intelligent spaces that truly perform.",
  link: "../contact",
}

function LightCards() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              {cards.map((p, i) => (
                <Grid item xs={12} md={6}>
                  <MKBox mb={i < 2 ? 5 : { xs: 5, md: 0 }}>
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
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={card.image}
              title={card.title}
              description={card.description}
              action={{
                type: "internal",
                route: card.link,
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default LightCards;
