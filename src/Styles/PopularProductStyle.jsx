import styled from "styled-components";

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center ;
  gap: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
`;

export const ProductImg = styled.img`
  width: 260px;
  height: 220px;
  margin-bottom: 10px;
`;

export const ProductItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
  width: 260px;
  padding: 10px 0;

  background-color: #fff;
`;

export const ProductName = styled.h3`
  margin-bottom: 30px;
`;

export const ProductPrice = styled.p`
  margin-bottom: 30px;
`;
