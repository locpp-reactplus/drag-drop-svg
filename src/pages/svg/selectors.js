import { createSelector } from "@reduxjs/toolkit";

const svgSelector = (state) => state.Svg;

export const hoverIdSelector = createSelector(
  svgSelector,
  (state) => state.hoverId
);

export const listComponentSelector = createSelector(
  svgSelector,
  (state) => state.list
);

export const mapComponentSelector = createSelector(
  listComponentSelector,
  (components) => {
    const map = {};

    components.forEach((component) => {
      map[component.id] = component;
    });

    return map;
  }
);
