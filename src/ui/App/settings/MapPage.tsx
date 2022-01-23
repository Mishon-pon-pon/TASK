import React from "react";
import { Task } from "../../Pages/Task";
import { ROUTER_CONST } from "./routerConst/RouterConstCB";

export const getPageMapFromSegmentCB = (
  segment: string,
  path: string
): JSX.Element | null => {
  switch (segment) {
    case ROUTER_CONST.TASK.name:
      return <Task />;
    default:
      return <div>Not found</div>;
  }
};
