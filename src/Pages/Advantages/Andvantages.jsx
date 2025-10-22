import { useState, useEffect } from "react";
import { Container } from "../../Components/Container/Container";
import { SliderItem, SliderStl } from "../../Components/News/News.styled";
import { useWindowSize } from "react-use";
import Slider from "react-slick";
import {Add} from "./AddItem"

export const Advantages = () => {
  const [adds, setAdds] = useState([]);

  useEffect(() => {
    fetch("https://68ed2ae1eff9ad3b1404ca71.mockapi.io/ad")
      .then((res) => res.json())
      .then((data) => setAdds(data));
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
    <Container>
      <SliderStl {...settings}>
          {adds.map((item) => (
            <Add key={item.id} img={item.image}></Add>
          ))}
      </SliderStl>
    </Container>
  )
};
