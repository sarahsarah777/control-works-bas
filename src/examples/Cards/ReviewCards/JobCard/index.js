/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/


// prop-types is library for typechecking of props
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// @mui material components
import PlaceIcon from '@mui/icons-material/Place';

// Material Kit 2 React components
import MKBox from "../../../../components/MKBox";
import MKButton from "../../../../components/MKButton";
import MKAvatar from "../../../../components/MKAvatar";
import MKTypography from "../../../../components/MKTypography";

function JobCard({ color, image, role, location, description, link }) {

  return (
    <MKBox
      variant={color === "transparent" ? "contained" : "gradient"}
      bgColor={color}
      borderRadius="xl"
      shadow={color === "transparent" ? "none" : "md"}
      p={3}
    >
      {image && (
        <MKAvatar
          src={image}
          alt={role}
          variant="rounded"
          size="lg"
          shadow="md"
          sx={{ mt: -5, mb: 1 }}
        />
      )}
      <MKBox lineHeight={1}>
        <MKTypography
          display="block"
          variant={image ? "button" : "h6"}
          fontWeight="bold"
          color={color === "transparent" || color === "light" ? "dark" : "white"}
          mb={0.5}
        >
          {role}
        </MKTypography>
        <MKTypography
          variant={image ? "caption" : "button"}
          fontWeight="regular"
          lineHeight={1}
          color={color === "transparent" || color === "light" ? "text" : "white"}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <PlaceIcon style={{marginRight: "5px"}}/>
          {location}
        </MKTypography>
      </MKBox>
      <MKTypography
        variant="body2"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        my={4}
      >
        {description}
      </MKTypography>
      <MKTypography
        variant="h4"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        sx={{
          display: "flex",
          alignItems: "center",
          ml: 0.375,

          "& .material-icons-round": {
            ml: -0.375,
          },
        }}
      >
        <MKButton
          component={Link}
          to={link}
          variant="gradient"
          size="small"
        >
          More Info
        </MKButton>
      </MKTypography>
    </MKBox>
  );
}

// Setting default values for the props of JobCard
JobCard.defaultProps = {
  color: "transparent",
  image: "",
};

// Typechecking props for the JobCard
JobCard.propTypes = {
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string,
  role: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
};

export default JobCard;
