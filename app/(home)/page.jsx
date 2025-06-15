"use client";
import CustomCarousel from "@Components/CustomCarousel";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "@Config/baseURL";
import CsHeading from "@Components/CSHeading";
import CustomCard from "@Components/CustomCard";

const ReviewCarousel = dynamic(() => import("../../Components/ReviewCarousel"), {
  ssr: false,
});

export default function Home() {
  const [SlideData, setSlideData] = useState([]);
  const [NewsData, setNewsData] = useState([]);

  // ✅ Updated Dummy Slides
  const dummySlides = [
    {
      image_url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80",
      title: "Welcome to Wonderland Institute",
      description: "A place where learning meets imagination and innovation.",
      alt: "Welcome Banner",
    },
    {
      image_url: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80",
      title: "Empowering Future Leaders",
      description: "Developing confidence and critical thinking in every student.",
      alt: "Leadership",
    },
    {
      image_url: "https://plus.unsplash.com/premium_photo-1663126271945-881bd77caf8d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Modern Facilities",
      description: "Smart classrooms, labs, and an engaging digital environment.",
      alt: "Smart Campus",
    },
  ];

  // ✅ Dummy News
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

  const CampusCard = [
    {
      image_url: "https://images.unsplash.com/photo-1665940482676-c0cb91965634?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Main Campus",
      description: "Located in the heart of the city, offering top-tier facilities and experienced staff.",
    },
    {
      image_url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
      title: "Girls Campus",
      description: "A secure and supportive environment dedicated to empowering young women.",
    },
    {
      image_url: "https://plus.unsplash.com/premium_photo-1671070972518-1036c75cdb01?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Junior Section",
      description: "Specifically designed for nurturing early learning with playful and creative methods.",
    },
    {
      image_url: "https://images.unsplash.com/photo-1558790989-61a9108dc744?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Evening Program",
      description: "Flexible evening classes for working students and adult education programs.",
    },
  ];

  const getData = () => {
    axios
      .get(`${baseURL}/slides`)
      .then((response) => {
        const slides = response?.data?.slides || [];
        setSlideData(slides.length > 0 ? slides : dummySlides);
      })
      .catch(() => {
        setSlideData(dummySlides);
      });

    axios
      .get(`${baseURL}/news`)
      .then((response) => {
        const latestNews = response?.data?.news?.slice(-4).reverse() || [];
        setNewsData(latestNews.length > 0 ? latestNews : dummyNews);
      })
      .catch(() => {
        setNewsData(dummyNews);
      });
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <CustomCarousel slides={SlideData} />

      {/* Announcements */}
      <Box sx={{ p: 2 }}>
        <CsHeading Heading={"Announcements"} Tagline={"Latest News"} />
      </Box>
      <Box sx={{ p: 2, display: "flex", justifyContent: "center", alignItems: "center",textDecoration:'none' }}>
        <CustomCard Data={NewsData} href="/news"  />
      </Box>

      {/* Campuses */}
      <Box sx={{ p: 2 }}>
        <CsHeading Heading={"Campuses"} Tagline={"Providing The Best Quality Of Education"} />
      </Box>
      <Box sx={{ p: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CustomCard Data={CampusCard} />
      </Box>

      {/* About */}
      <Box sx={{ p: 2 }}>
        <CsHeading Heading={"About Us"} Tagline={"Who we are"} />
      </Box>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={1}>
          <Grid item md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography>
              In 1982/83 an educational Society namely “Society for Advancement of Learning in Pakistan” was registered under the membership of renowned Scholars and reputed educationists. We were and are deeply concerned and interested in the cause of education; extending all our efforts, energies and involving times towards capital investment on no profit no loss basis.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <img
              style={{ borderRadius: 25 }}
              width="100%"
              height="90%"
              src="/Images/wgs-about-us.27052524593c6d2b.jpg"
              alt="about-us"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials */}
      <Box sx={{ p: 2 }}>
        <CsHeading Heading={"Testimonials"} />
      </Box>
      <Box sx={{ p: 1 }}>
        <ReviewCarousel />
      </Box>
    </div>
  );
}
