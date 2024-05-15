/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/
import { useState } from 'react';
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

// icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import MKInput from "../../../components/MKInput";
import MKButton from "../../../components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import SimpleFooter from "../../../examples/Footers/SimpleFooter";

// Routes
import routes from "../../../routes";
import footerRoutes from "../../../footer.routes";

// Images
import bgImage from "../../../assets/images/headerBackground.jpg";

const SERVICE_ID = "service_23zzw2c";
const TEMPLATE_ID = "template_lceipvj";
const PUBLIC_KEY = "UBsw0aRCGscBuC-D0";

const pageTitle = "Career Opportunities"
const pageSubTitle = "Shape the future of intelligent buildings with a rewarding career at ControlWorks BAS. We offer exciting opportunities for passionate individuals to contribute to innovative building automation solutions."
const heading = "Service Technician"
const roleDescription = "We are seeking a motivated Service Technician to join our growing team. You will be responsible for providing installation, maintenance, and repair services for our clients' building automation systems. This includes HVAC, electrical, and low voltage systems. You will play a vital role in ensuring the comfort, efficiency, and safety of our clients' buildings."
const responsibilities = [
  "Install, test, and commission building automation systems according to specifications.",
  "Perform preventive maintenance and troubleshooting of HVAC, electrical, and low voltage systems.",
  "Diagnose and repair system faults.",
  "Respond promptly to customer service calls and resolve issues efficiently.",
  "Maintain accurate service records and documentation.",
  "Collaborate with internal teams (sales, engineering) to ensure customer satisfaction.",
]
const qualifications = [
  "High school diploma or equivalent (technical degree or certification a plus).",
  "Minimum 1 year of experience in building automation service, HVAC service, electrical service, or a related field.",
  "Working knowledge of HVAC systems, electrical systems, and low voltage systems.",
  "Strong understanding of safety protocols and procedures.",
  "Excellent problem-solving and analytical skills.",
  "Ability to work independently and as part of a team.",
]
const benefits = [
  "Competitive salary and benefits package.",
  "Opportunity to work on a variety of projects and expand your technical skillset.",
  "Vehicle provided or mileage reimbursement.",
  "Growth potential within a dynamic company.",
]

function Service() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const sendEmail = () => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID,{
      from_first_name: firstName,
      from_last_name: lastName,
      message: message,
      reply_to: email,
      position: "Service Technician",
    }, PUBLIC_KEY).then(() => {
      setFirstName("")
      setLastName("")
      setEmail("")
      setMessage("")
      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully",
        confirmButtonColor: "#CE1B28",
      })
    }, (error) => {
      Swal.fire({
        icon: "error",
        title: "Ooops, something went wrong",
        confirmButtonColor: "#CE1B28",
        text: error.text,
      })
    });
  };
  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {pageTitle}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              {pageSubTitle}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      > 
        <MKBox component="section" py={12}>
          <Container>
            <a href="../careeropportunities">
              <ArrowBackIcon fontSize="large" color="primary" />
            </a>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <MKTypography variant="h6" textTransform="uppercase" color="secondary" mt={5}>
                {pageTitle}
              </MKTypography>
              <MKTypography variant="h2">
                {heading}
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                The Role
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                {roleDescription}
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Responsibilities
              </MKTypography>
              {responsibilities.map((p) => (
                <MKTypography variant="body1" opacity={0.8} ml={3}>
                  • {p}
                </MKTypography>
              ))}

              <MKTypography variant="h5" mt={5}>
              Qualifications
              </MKTypography>
              {qualifications.map((p) => (
                <MKTypography variant="body1" opacity={0.8} ml={3}>
                  • {p}
                </MKTypography>
              ))}

              <MKTypography variant="h5" mt={5}>
                Benefits
              </MKTypography>
              {benefits.map((p) => (
                <MKTypography variant="body1" opacity={0.8} ml={3}>
                  • {p}
                </MKTypography>
              ))}

              <MKTypography variant="body2" opacity={0.8} mt={5}>
                We are an equal opportunity employer and value diversity at our company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.
              </MKTypography>
              <MKTypography variant="h2" mt={5}>
                To Apply
              </MKTypography>
              <MKBox pt={7} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="First Name"
                          placeholder="First Name"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          value={firstName}
                          onChange={(event) => {
                            setFirstName(event.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Last Name"
                          placeholder="Last Name"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          value={lastName}
                          onChange={(event) => {
                            setLastName(event.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Contact me at"
                          placeholder="example@email.com"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          value={email}
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Your message"
                          // placeholder="Message"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={6}
                          value={message}
                          onChange={(event) => {
                            setMessage(event.target.value);
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton variant="gradient" color="info" onClick={sendEmail}>
                        Send Message
                      </MKButton>
                    </Grid>
                  </MKBox>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <SimpleFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Service;
