import styled from "styled-components";

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-left: 300px;
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
  width: 300px;
  height: 468px;

  background-color: #fff;
`;

export const ProductName = styled.h3`
  margin-bottom: 30px;
`;

export const ProductPrice = styled.p`
  margin-bottom: 30px;
`;
