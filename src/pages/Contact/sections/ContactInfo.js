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
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKInput from "../../../components/MKInput";
import MKButton from "../../../components/MKButton";
import MKTypography from "../../../components/MKTypography";

// Images (600x800)
import bgImage from "../../../assets/images/contact/lef.jpg";

const SERVICE_ID = "service_23zzw2c";
const TEMPLATE_ID = "template_jqv4y6h";
const PUBLIC_KEY = "UBsw0aRCGscBuC-D0";

const heading = "Contact Information"
const subheading = "Fill up the form and our Team will get back to you within 24 hours."
const cards = [{
  location: "Chino, California",
  phone: "(909) 627-7155",
  email: "sales@controlworksbas.com",
  address: "13720 Mountain Ave Chino, CA 91710",
}, {
  location: "Las Vegas, Nevada",
  phone: "(702) 227-1760",
  // email: "sales@controlworksbas.com",
  address: "6207 Dean Martin Dr, Las Vegas, NV 89118",
}]
const formTitle = "Say Hi!"
const formSubTitle = "We'd like to talk with you."
const form = {
  name: "My name is",
  namePlaceholder: "Full Name",
  email: "Contact me at",
  emailPlaceholder: "example@email.com",
  message: "Your message",
  messagePlaceholder: "I want to say that...",
}
const buttonText = "Send Message"

function Contact() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const sendEmail = () => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID,{
      from_name: name,
      message: message,
      reply_to: email,
    }, PUBLIC_KEY).then(() => {
      setName("")
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
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      {heading}
                    </MKTypography>
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                      {subheading}
                    </MKTypography>
                    {cards.map((p, i) => (
                      <>
                        <MKTypography
                            component="span"
                            variant="button"
                            color="white"
                            opacity={0.8}
                            ml={2}
                            fontWeight="bold"
                          >
                          {p.location}
                        </MKTypography>
                        <MKBox display="flex" p={1}>
                          <MKTypography variant="button" color="white">
                            <LocalPhoneIcon/>
                          </MKTypography>
                          <MKTypography
                            component="span"
                            variant="button"
                            color="white"
                            opacity={0.8}
                            ml={2}
                            fontWeight="regular"
                          >
                            {p.phone}
                          </MKTypography>
                        </MKBox>
                        {p.email && (
                          <MKBox display="flex" color="white" p={1}>
                            <MKTypography variant="button" color="white">
                              <EmailIcon />
                            </MKTypography>
                            <MKTypography
                              component="span"
                              variant="button"
                              color="white"
                              opacity={0.8}
                              ml={2}
                              fontWeight="regular"
                            >
                              {p.email}
                            </MKTypography>
                          </MKBox>
                        )}
                        <MKBox display="flex" color="white" p={1} mb={2}>
                          <MKTypography variant="button" color="white">
                            <BusinessIcon/>
                          </MKTypography>
                          <MKTypography
                            component="span"
                            variant="button"
                            color="white"
                            opacity={0.8}
                            ml={2}
                            fontWeight="regular"
                          >
                            {p.address}
                          </MKTypography>
                        </MKBox>
                      </>
                    ))}
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} method="post">
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      {formTitle}
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      {formSubTitle}
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label={form.name}
                          placeholder={form.namePlaceholder}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          value={name}
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label={form.email}
                          placeholder={form.emailPlaceholder}
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
                          label={form.message}
                          placeholder={form.messagePlaceholder}
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
                        {buttonText}
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
