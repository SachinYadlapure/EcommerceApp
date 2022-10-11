import React from "react";
import "./About.css";
import { Typography, Button, Avatar } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/sachinyadlapure";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/sachinyadlapure/image/upload/v1664783169/avatarImages/si4tcp0ypkpvbxgpqe9j.jpg"
              alt="Founder"
            />
            <Typography>Sachin Yadlapure</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>This is a sample wesbite made by @Sachin Yadlapure...</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow Me</Typography>
            <a href="https://instagram.com/sachinyadlapure" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://facebook.com/sachinyadlapure" target="blank">
              <FacebookIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
