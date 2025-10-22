import styled from "styled-components";

export const CategoriesContStl = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;    

    & p{
        color: lightgrey;

    }
`

export const CategoryItem = styled.li`
    box-sizing: content-box;
    width: 250px;
    background-color: #fff;
    padding: 10px;

    position: relative;
`

export const CategoryList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 10px;

    margin-bottom: 20px;
`