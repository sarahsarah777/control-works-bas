/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/

import { useState } from "react";

// @mui icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Images
import logoCT from "../../../assets/images/logo-ct-dark.png";
import logoText from "../../../assets/images/redLogoText.png";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Material Kit 2 React example components
import FooterNavbar from "./FooterNavbar";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

import routes from "../../../routes.js";

const date = new Date().getFullYear();

function SimpleFooter() {

  const [, setDropdown] = useState("");
  const [, setDropdownEl] = useState("");
  const [, setDropdownName] = useState("");

  const renderNavbarItems = routes.map(({ name, href, route, collapse = false }) => (
    <FooterNavbar
      key={name}
      name={name}
      href={href}
      route={route}
      collapse={Boolean(collapse)}
      onMouseEnter={({ currentTarget }) => {
        if (collapse) {
          setDropdown(currentTarget);
          setDropdownEl(currentTarget);
          setDropdownName(name);
        }
      }}
      onMouseLeave={() => collapse && setDropdown(null)}
    />
  ));

  return (
    <MKBox component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            textAlign={{ xs: "center", lg: "left" }}
            mr="auto"
            mb={{ xs: 3, lg: 0 }}
          >
            <MKBox component="img" src={logoCT} alt="coinbase" width="100px" opacity={0.7} mb={{ xs: 2, lg: 3 }}/>
            <Stack
              component="ul"
              direction="row"
              spacing={1}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              pl={0}
              mb={3}
              sx={{ listStyle: "none" }}
            >
              {renderNavbarItems}
            </Stack>
            <MKTypography variant="button" opacity={0.8}>
              <MKTypography
                variant="button"
                fontWeight="regular"
                opacity={0.8}
                component={Link}
                href="https://www.linkedin.com/company/controlworks-building-automation-systems/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon style={{marginRight: "10px"}}/>
              </MKTypography>
              Copyright © {date} ControlWorks.
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} ml="auto" textAlign={{ xs: "center", lg: "right" }}>
            <MKTypography
              component={Link}
              href="#home"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
            >
              <MKBox component="img" src={logoText} alt="coinbase" width="200px"/>
            </MKTypography>
            <MKTypography variant="body1" fontWeight="bold" mt={6} sx={{ fontSize: "1.125rem" }} opacity={0.8}>
              To Create & Keep Customers
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SimpleFooter;
