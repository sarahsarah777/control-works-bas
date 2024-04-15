/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/


// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "../../../examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "../../../examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "../../../assets/images/solutions/caseStudy1.png";
import post2 from "../../../assets/images/solutions/caseStudy2.png";
import post3 from "../../../assets/images/solutions/caseStudy3.png";
import post4 from "../../../assets/images/solutions/retail.png";

function Posts() {
  return (
    <MKBox component="section" py={2} mt={4}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Case Studies
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Edwards Lifescience"
              description="ControlWorks Optimizes Critical Environment for Edwards Lifesciences"
              action={{
                type: "internal",
                route: "/casestudy1",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Dior"
              description="ControlWorks Enhances Luxury Retail Experience at Dior's New Rodeo Drive Flagship"
              action={{
                type: "internal",
                route: "/casestudy2",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Mt. San Jacinto College"
              description="ControlWorks Empowers Data-Driven Learning at Mt. San Jacinto College's New STEM Building"
              action={{
                type: "internal",
                route: "/casestudy3",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Get connected"
              description="Contact ControlWorks BAS today and let's discuss how we can create a smarter, more efficient future for your space."
              action={{
                type: "internal",
                route: "/contact",
                label: "contact us",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Posts;
