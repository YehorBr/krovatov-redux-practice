import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllFurnitures = createAsyncThunk(
  "furnitures/getAllFurnitures",
  async () => {
    return fetch(
      "https://68d954e190a75154f0da2227.mockapi.io/task/furnitures"
    ).then((res) => res.json());
  }
);
