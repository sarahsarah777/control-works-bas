/* eslint-disable react/jsx-no-duplicate-props */
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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import MKInput from "../../../components/MKInput";
import MKButton from "../../../components/MKButton";

// Images
import macbook from "../../../assets/images/home/macbook.png";

const heading = "Be the first to see the news"
const subheading = ""
const placeholder = "Email Here..."
const button = "Subscribe"

const SERVICE_ID = "service_23zzw2c";
const TEMPLATE_ID = "template_jqv4y6h";
const PUBLIC_KEY = "UBsw0aRCGscBuC-D0";

function Newsletter() {
  const [email, setEmail] = useState(null);
  const sendEmail = () => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID,{
      from_name: "ControlWorks Website",
      message: "New email from the ControlWorks Website",
      reply_to: email,
    }, PUBLIC_KEY).then(() => {
      setEmail("")
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
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">{heading}</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              {subheading}
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput
                  type="email"
                  label={placeholder}
                  fullWidth
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}/>
              </Grid>
              <Grid item xs={4}>
                <MKButton variant="gradient" color="info" sx={{ height: "100%" }} onClick={sendEmail}>
                  {button}
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={macbook} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
