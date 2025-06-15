"use client";
import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import baseURL from "@Config/baseURL";
import axios from "axios";

const Footer = () => {
  const Icons = [
    { icon: FacebookIcon },
    { icon: TwitterIcon },
    { icon: LinkedInIcon },
    { icon: InstagramIcon },
  ];
  const pages = [
    { name: "About Us", route: "/about" },
    { name: "Admissions", route: "/admissions" },
    { name: "News", route: "/news" },
    { name: "Jobs", route: "/jobs" },
    { name: "Gallery", route: "/gallery" },
  ];
  const info = [
    {
      icon: LocationOnIcon,
      info: "B-61 Block-10 Federal B Area, Karachi - Pakistan",
    },
    { icon: PhoneIcon, info: "021-36360737" },
    { icon: EmailIcon, info: "info@wonderland.com.pk" },
  ];
  const [NewsData, SetNewsData] = useState([])
  // console.log(NewsData, "Data")
  let getData = () => {
    axios.get(`${baseURL}/news`)
      .then((response) => {
        const latestNews = response.data.news.slice(-2).reverse();
        SetNewsData(latestNews);
      })
      .catch((err) => { });
  };
  useEffect(() => { getData() }, [getData])
  const dummyNews = [
    {
      image_url: "https://images.unsplash.com/photo-1719124699613-f8ea378707f0?q=80&w=2114&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Admissions Open",
      description: "Enroll for the 2025 academic session. Limited seats available!",
      created_at: "2025-06-10",
    },
    {
      image_url: "https://plus.unsplash.com/premium_photo-1683140893042-af3aa516ae40?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Science Fair",
      description: "Students showcased amazing projects during the annual fair.",
      created_at: "2025-05-30",
    },
    {
      image_url: "https://plus.unsplash.com/premium_photo-1686836995172-17e1ecaf7aa5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Summer Camp",
      description: "Join our interactive summer learning and sports camp!",
      created_at: "2025-06-05",
    },
    {
      image_url: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      title: "Exam Schedule",
      description: "Final term exam schedule for 2025 is out now. Check student portal.",
      created_at: "2025-06-01",
    },
  ];
  return (
    <footer style={{ marginTop: "auto" }}>
      <Box
      className='mainContainerStyle'
        sx={{
          backgroundColor: "#7b0c0d",
          pt: 2,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Container maxWidth="lg" className="bottom_border">
          <Grid container spacing={3}>
            <Grid item md={4}>
              <img
                src="/Images/wgs-logo.png"
                width={"55%"}
                height={"55%"}
                alt="img"
              />
              <Box sx={{ display: "flex", pt: 3, pl: 2 }}>
                {Icons.map((icon, index) => (
                  <Box key={index} sx={{ mx: 0.3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        border: "2px solid white",
                      }}
                    >
                      {React.createElement(icon.icon, {
                        sx: { fontSize: "14px", color: "white" },
                      })}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item md={3}>
      <Box sx={{ pt: 3 }}>
        <Typography sx={{ color: "white", fontWeight: "bolder" }}>News</Typography>
        {dummyNews.map((newsItem, index) => (
          <a href="/news" key={index}>
          <Box  sx={{ display: "flex", mb: 1 }}>
            <Box>
              <img
                src={newsItem.image_url}
                width={"40px"}
                height={"40px"}
                style={{ borderRadius: "10px" }}
                alt="newsimg"
              />
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography color={"white"} sx={{ fontSize: 12 }}>
                {newsItem.title}
              </Typography>
              <Typography color={"white"} sx={{ fontSize: 8 }}>
              {newsItem.description.slice(0, 90) + '....'}
              </Typography>
            </Box>
          </Box>
                </a>
        ))}
        <Box sx={{ mb: 1 }}>
          <hr />
        </Box>
      </Box>
    </Grid>

            <Grid item md={3}>
              <Box sx={{ pt: 3 }}>
                <Typography sx={{ color: "white", fontWeight: "bolder" }}>
                  Contact Us
                </Typography>
                <Box>
                  {info.map((i, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center", m: 0.8 }}
                    >
                      {React.createElement(i.icon, {
                        sx: { fontSize: "20px", color: "lightgray", mr: 0.3 },
                      })}
                      <Typography sx={{ color: "lightgray", fontSize: 10 }}>
                        {i.info}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            <Grid item md={2}>
              <Box sx={{ pt: 3 }}>
                <Typography sx={{ color: "white", fontWeight: "bolder" }}>
                  Quick Links
                </Typography>
                {pages.map((page, index) => (
                  <Box key={page.name}>
                    <Typography
                      component="a"
                      color="inherit"
                      href={page.route}
                      sx={{
                        color: "lightgray",
                        fontSize: 13,
                        cursor: "pointer",
                        m: 0.2,
                        textDecorationLine: "none",
                      }}
                    >
                      {page.name}
                    </Typography>
                    <hr />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ mt: 4, px: 3 }}>
          <hr />
        </Box>
        <Container>
          <Typography
            sx={{ fontSize: 11, py: 2 }}
            textAlign={"left"}
            color={"white"}
          >
            Wonderland Grammar Schooling System &copy;{" "}
            {new Date().getFullYear()} | Developed by{" "}
            <a href="#" style={{ color: "white" }}>
              Nastechltd.co
            </a>
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
