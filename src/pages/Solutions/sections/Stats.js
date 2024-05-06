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

// Material Kit 2 React examples
import DefaultCounterCard from "../../../examples/Cards/CounterCards/DefaultCounterCard";

const date = new Date().getFullYear();

const cards = [{
  count: date - 2001,
  title: "Years",
  description: "Of customer oriented service since we were founded in 2001",
}, {
  count: 100,
  suffix: "+",
  separator: ",",
  title: "Projects",
  description: "Installed and maintained with rigorous quality control standards",
}, {
  count: 24,
  suffix: "/7",
  title: "Support",
  description: "To ensure your BAS continues to operate smoothly",
}]

function Stats() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          {cards.map((p) => (
              <Grid item xs={12} md={3}>
                <DefaultCounterCard
                  count={p.count}
                  suffix={p.suffix}
                  separator={p.separator}
                  title={p.title}
                  description={p.description}
                />
              </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Stats;
