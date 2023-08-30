import { configureStore } from '@reduxjs/toolkit';
import portfolioSlice from "../slice/portfolio-slice";

const store = configureStore({
  reducer: {
    dummy: portfolioSlice,
  },
});

export default store;