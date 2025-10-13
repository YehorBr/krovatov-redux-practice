import Slider from "react-slick";
import styled from "styled-components";

export const SliderStl = styled(Slider)`
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

  .slick-prev:before,
.slick-next:before {
  color: #FFBC57;
  font-size: 30px;
  opacity: 1;
}
`  

export const SliderItem = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 250px;
  border-radius: 10px;
`;