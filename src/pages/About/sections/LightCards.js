/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/
// @mui icons
import EngineeringIcon from '@mui/icons-material/Engineering';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import UpdateIcon from '@mui/icons-material/Update';
import LaptopIcon from '@mui/icons-material/Laptop';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";

const heading = "Experience You Can Trust"
const subheading = "We believe in the power of BAS to transform your building's operation. Our team of experienced engineers and technicians works closely with you to design, install, and maintain a customized BAS solution that optimizes comfort, efficiency, and cost savings."
const cards = [{
  icon: <EngineeringIcon color="primary"/>,
  title: "Experienced Engineers",
  description: "Our team boasts seasoned engineers with a deep understanding of BAS technology and a proven track record of designing efficient and effective systems for diverse building types.",
}, {
  icon: <IntegrationInstructionsIcon color="primary"/>,
  title: "Certified Technicians",
  description: "Our skilled technicians are certified in industry-leading BAS platforms like Siemens, Niagara, Distech, and Pelican Systems. They ensure flawless installation, seamless integration, and ongoing maintenance of your BAS.",
}, {
  icon: <UpdateIcon color="primary"/>,
  title: "Dedicated Service Team",
  description: "Our responsive service team is here to provide ongoing support and ensure your BAS operates smoothly. They are available 24/7 to address any urgent needs and troubleshoot any issues that may arise.",
}, {
  icon: <LaptopIcon color="primary"/>,
  title: "Building Automation Specialists",
  description: "Our team includes specialists dedicated to understanding your unique building needs and objectives. They work collaboratively with you to recommend the most suitable BAS solution and ensure it delivers the desired results.",
}]

function LightCards() {
  return (
  <MKBox component="section" py={12}>
    <Container>
      <Grid item xs={12} md={8} sx={{ mb: 6 }}>
        <MKTypography variant="h3">
          {heading}
        </MKTypography>
        <MKTypography variant="body2" opacity={0.8}>
          {subheading}
        </MKTypography>
      </Grid>
      <Grid container spacing={3} alignItems="center">
        <Grid container justifyContent="flex-start"  item xs={12} lg={12}>
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
    </Container>
  </MKBox>
  );
}

export default LightCards;
