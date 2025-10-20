import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  background-color: #fff;
  color: #1a1a1a;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextSection = styled.div`
  max-width: 900px;
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #1a1a1a;
  }

  p {
    font-size: 16px;
    line-height: 1.7;
    color: #333;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const IconsSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
`;

export const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  text-align: center;

  svg {
    width: 48px;
    height: 48px;
    color: #f8b84e;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 5px;
  }

  p {
    font-size: 15px;
    color: #555;
  }
`;
