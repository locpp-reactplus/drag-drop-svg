import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadedList, hoverSelection, removeSelection } from "./slice";
import { hoverIdSelector, listComponentSelector } from "./selectors";
import mock from "./mock.json";

export default (props) => {
  const [state, setState] = useState({
    loading: true
  });
  const dispatch = useDispatch();
  const hoverId = useSelector(hoverIdSelector);
  const listComponent = useSelector(listComponentSelector);

  const handleMouseEnter = (id) => () => {
    dispatch(hoverSelection({ id }));
  };

  const handleMouseLeave = () => {
    dispatch(removeSelection());
  };

  useEffect(() => {
    (async () => {
      try {
        await new Promise((resolve) => {
          setTimeout(() => {
            dispatch(loadedList({ list: mock.data }));
            resolve("OK");
            setState((prev) => ({ ...prev, loading: false }));
          }, 1000);
        });
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [dispatch]);

  return {
    ...props,
    ...state,
    handleMouseEnter,
    handleMouseLeave,
    hoverId,
    listComponent
  };
};
