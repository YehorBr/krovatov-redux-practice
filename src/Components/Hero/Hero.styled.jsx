import Slider from "react-slick";
import styled from "styled-components";

export const ImgCont = styled.div`
  width: 1200px;
  height: 420px;
`;

export const SliderStyled = styled(Slider)`
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .slick-prev {
    left: 20px;
  }

  .slick-next {
    right: 20px;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #ffbc57;
    font-size: 30px;
    opacity: 1;
  }
  .slick-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: white;
    opacity: 0.8;
  }

  .slick-dots li.slick-active button:before {
    color: #ffbc57;
  }
`;
