/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/
// @mui icons
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ConstructionIcon from '@mui/icons-material/Construction';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SchoolIcon from '@mui/icons-material/School';

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
import panel from "../../../assets/images/services/panel.png";

const card = {
  image: panel,
  title: "Tailored for You and Your Technology",
  description: "At ControlWorks BAS, we understand that a one-size-fits-all approach doesn't work in building automation. That's why we offer a variety of leading BAS platforms to ensure your system seamlessly integrates with your existing infrastructure and delivers the results you need.",
  link: "../contact",
}
const cards = [{
  icon: <DesignServicesIcon color="primary"/>,
  title: "Design & Engineering",
  description: "Our experienced engineers design a customized BAS solution that integrates seamlessly with your existing HVAC, lighting, security, and other systems.",
}, {
  icon: <ConstructionIcon color="primary"/>,
  title: "Installation",
  description: "Our certified technicians skillfully install your BAS hardware and software, ensuring a smooth and efficient process.",
}, {
  icon: <SupportAgentIcon color="primary"/>,
  title: "Maintenance & Support",
  description: "We offer comprehensive preventative maintenance plans to identify and address potential issues before they disrupt your operations.",
}, {
  icon: <SchoolIcon color="primary"/>,
  title: "Training",
  description: "We offer training programs to empower your staff to utilize the BAS effectively and maximize its potential.",
}]

function InfoCard() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={4} sx={{ mr: "auto", mt: { xs: 3, lg: 0 } }}>
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
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InfoCard;
