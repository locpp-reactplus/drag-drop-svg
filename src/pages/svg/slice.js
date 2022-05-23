import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hoverId: null,
  activeId: null,
  list: []
};

const { reducer, actions } = createSlice({
  name: "Svg",
  initialState,
  reducers: {
    hoverSelection(state, action) {
      state.hoverId = action.payload.id;
    },
    removeSelection(state, action) {
      state.hoverId = null;
    },
    loadedList(state, action) {
      state.list = action.payload.list;
    }
  }
});

export default reducer;

export const { hoverSelection, removeSelection, loadedList } = actions;
