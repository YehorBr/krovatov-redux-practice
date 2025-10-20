import { useEffect, useState } from "react";
import Slider from "react-slick";
import { useWindowSize } from 'react-use';
import { Container } from "../Container/Container";
import { SliderStl, SliderItem } from "./News.styled";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// const NEWS_API_KEY = "3ce63eea477043d7a470d2b21dc5ab4b";

export const News = () => {
  const [recentNews, setRecentNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?query=room&per_page=15&client_id=jHh7tWbk2lZqOUp3MeHzq5lgOOWQqgjNoABwyhq4avk`
    )
      .then((res) => res.json())
      .then((res) => setRecentNews(res.results));
  }, []);


  const { width } = useWindowSize();

  const slidesToShow = width >= 1200 ? 3 : width >= 768 ? 2 : 1;

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow,
    slidesToScroll: slidesToShow,
     arrows: true,
  };

  return (
    <>
    <Container>
        <h2>Галерея</h2>
        
      <SliderStl {...settings}>
        {recentNews.map((img) => {
          return (
            <SliderItem key={img.id}>
              <img
                src={img.urls.small}
                alt=""
                style={{ height: "250px", width: "250px" }}
              />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In omnis a dignissimos?</p>
            </SliderItem>
          )
        })}
        </SliderStl>
    </Container>
    </>
  );
};
