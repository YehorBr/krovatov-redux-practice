import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #2b2b2b;
  color: #fff;
  padding: 60px 80px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
`;

export const LogoSection = styled.div`
  flex: 1;
  min-width: 200px;
  padding-bottom: 20px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;


  a {
    color: #fff;
    transition: 0.3s;
  }

  a:hover {
    color: #f8b84e;
  }

  svg {
    width: 26px;
    height: 26px;
  }
`;

export const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  flex: 3;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Column = styled.div`
  min-width: 180px;

  h4 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #f8b84e;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 15px;
    color: #ddd;
    margin-bottom: 8px;
    cursor: pointer;
    transition: color 0.3s;
  }

  li:hover {
    color: #f8b84e;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: #ddd;
  }

  svg {
    width: 22px;
    height: 22px;
    color: #f8b84e;
    flex-shrink: 0;
  }

  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.4;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding-top: 15px;
  text-align: center;
  font-size: 14px;
  color: #aaa;
`;
