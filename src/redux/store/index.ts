// import { createStore } from "redux"
// import reducers from "../reducer"
// import { composeWithDevTools } from "redux-devtools-extension"

// // initial state
// const initialState = {}

// // ✅ create store with DevTools safely
// const store = createStore(
//     reducers,
//     initialState,
//     composeWithDevTools()
// )

// export default store

// =================================================

// import { configureStore } from "@reduxjs/toolkit"
// import reducers from "../reducer"

// const store = configureStore({
//   reducer: reducers,
//   devTools: true, // DevTools built-in
// })

// export default store

// =================================================

import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducer";

const store = configureStore({
  reducer: reducers,
  devTools: true,
});

// Type for dispatch (use in useDispatch<AppDispatch>())
export type AppDispatch = typeof store.dispatch;

// Type for root state (use in useSelector<RootState>)
export type RootState = ReturnType<typeof store.getState>;

export default store;
