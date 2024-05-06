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

const heading = "Case Studies"
const cards = [{
  image: post1,
  title: "Edwards Lifescience",
  description: "ControlWorks Optimizes Critical Environment for Edwards Lifesciences",
  route: "/casestudy1",
  label: "read more",
}, {
  image: post2,
  title: "Dior",
  description: "ControlWorks Enhances Luxury Retail Experience at Dior's New Rodeo Drive Flagship",
  route: "/casestudy2",
  label: "read more",
}, {
  image: post3,
  title: "Mt. San Jacinto College",
  description: "ControlWorks Empowers Data-Driven Learning at Mt. San Jacinto College's New STEM Building",
  route: "/casestudy3",
  label: "read more",
}]
const card = {
  image: post4,
  title: "Get connected",
  description: "Contact ControlWorks BAS today and let's discuss how we can create a smarter, more efficient future for your space.",
  route: "/contact",
  label: "contact us",
}

function Posts() {
  return (
    <MKBox component="section" py={2} mt={4}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            {heading}
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {cards.map((p) => (
            <Grid item xs={12} sm={6} lg={3}>
              <TransparentBlogCard
                image={p.image}
                title={p.title}
                description={p.description}
                action={{
                  type: "internal",
                  route: p.route,
                  color: "info",
                  label: p.label,
                }}
              />
            </Grid>
          ))}
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={card.image}
              title={card.title}
              description={card.description}
              action={{
                type: "internal",
                route: card.route,
                label: card.label,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Posts;
