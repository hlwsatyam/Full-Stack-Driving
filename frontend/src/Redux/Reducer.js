export const Reducer = (state, act) => {
  if (act.type == "PerfListAction") {
    return act.text;
  } else {
    return "chess960";
  }
};
