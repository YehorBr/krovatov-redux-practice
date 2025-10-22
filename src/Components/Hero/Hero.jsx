import { useEffect, useState } from "react";
import Slider from "react-slick";
import { useWindowSize } from 'react-use';
import { Container } from "../Container/Container";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ImgCont, SliderStyled } from "./Hero.styled";

export const Hero = () => {
  const [adds, setAdds] = useState([]);

  useEffect(() => {
    fetch("https://68ed2ae1eff9ad3b1404ca71.mockapi.io/ad")
      .then((res) => res.json())
      .then((data) => setAdds(data));
  }, []);


  const { width } = useWindowSize();

  const slidesToShow = width >= 1200 ? 1 : width >= 768 ? 1 : 1;

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow,
    slidesToScroll: slidesToShow,
     arrows: true,
     autoplay: true,
     autoplaySpeed: 1500,
     pauseOnHover: true,
  };

  return (

    <>
    <Container>
        
      <SliderStyled {...settings}>
        {adds.map((img) => {
          return (
            <ImgCont key={img.id}>
              <img
                src={img.image}
                alt=""
                style={{width: "1200px" }}
              />
            </ImgCont>
          )
        })}
        </SliderStyled>
    </Container>
    </>
  );
};
