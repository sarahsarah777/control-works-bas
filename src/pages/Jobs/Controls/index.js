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

function Controls() {
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
      position: "Controls Engineer",
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
              Career Opportunities
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
            Shape the future of intelligent buildings with a rewarding career at ControlWorks BAS. We offer exciting opportunities for passionate individuals to contribute to innovative building automation solutions.
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
                Career Opportunities
              </MKTypography>
              <MKTypography variant="h2">
                Controls Engineer
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                The Role
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} mt={2}>
                We are seeking a talented Controls Engineer to join our growing team. In this role, you will play a key part in designing, developing, and implementing innovative building automation systems. You will work closely with engineers, technicians, and sales representatives to deliver exceptional solutions for our clients.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Responsibilities
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Design and develop control systems for HVAC, lighting, security, and other building systems.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Program controllers using industry-standard languages
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Integrate building automation systems with existing infrastructure.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Perform testing, commissioning, and troubleshooting of control systems.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Provide technical support to internal and external stakeholders.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Stay up-to-date on the latest building automation technologies and trends.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
              Qualifications
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Bachelor's degree in Electrical Engineering, Mechanical Engineering, or a closely related field.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Minimum 2+ years of experience in building automation controls or a similar field.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Strong understanding of HVAC, lighting, and other building systems.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Excellent analytical and problem-solving skills.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Effective communication and interpersonal skills.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Ability to work independently and as part of a team.
              </MKTypography>

              <MKTypography variant="h5" mt={5}>
                Benefits
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Competitive salary and benefits package.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Opportunity to work on challenging and rewarding projects.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Collaborative and growth-oriented work environment.
              </MKTypography>
              <MKTypography variant="body1" opacity={0.8} ml={3}>
                • Continuous learning and development opportunities.
              </MKTypography>
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

export default Controls;
