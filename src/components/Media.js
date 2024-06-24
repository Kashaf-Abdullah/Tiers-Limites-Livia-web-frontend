

















import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"; // Import axios for making HTTP requests
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; 
import { Col, Container } from "react-bootstrap";
import MediaCard from "./cards/MediaCard";
import arrow1 from "../assets/Bilder website/arrow1.png";
import arrow2 from "../assets/Bilder website/arrow2.png";

const Media = () => {
  const [mediaPosts, setMediaPosts] = useState([]);

  useEffect(() => {
    // Fetch media posts from your backend API
    axios.get("http://localhost:3001/media/allpost")
      .then((response) => {
        setMediaPosts(response.data.data.allMedia);
      })
      .catch((error) => {
        console.error("Error fetching media posts:", error);
      });
  }, []);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow next" onClick={onClick}>
        <img src={arrow2} alt="" style={{ width: "2.5rem" }} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow prev" onClick={onClick}>
        <img src={arrow1} alt="" style={{ width: "2.5rem" }} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: mediaPosts.length < 3 ? mediaPosts.length : 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1206,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container fluid id="media" style={{ backgroundColor: "var(--skin)", margin: " 0" }}>
      <Container className="card-made-con" style={{ overflowY: "hidden" }}>
        <h3 className="heading"  style={{ padding: "20px 0 0 0" }}>
          Media
        </h3>

        <Slider {...settings} style={{ margin: "0 0 10rem 0" }}>
          {mediaPosts.map((post, index) => (
            <MediaCard
              key={index}
              imagee={post.photo}
              head={post.heading}
              text={post.description}
              link={post.link}
            />
          ))}
        </Slider>
       
      </Container>
    </Container>
  );
};

export default Media;
