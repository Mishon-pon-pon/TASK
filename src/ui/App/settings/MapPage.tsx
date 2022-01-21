import React from "react";
import { Home } from "../../Pages/Task";
import { ROUTER_CONST } from "./routerConst/RouterConstCB";

export const getPageMapFromSegmentCB = (
  segment: string,
  path: string
): JSX.Element | null => {
  switch (segment) {
    case ROUTER_CONST.TASK.name:
      return <Home />;
    default:
      return <div>Not found</div>;
  }
};
