import React, { useState } from "react";
import { useRoute } from "react-router5";
import { ROUTER_CONST } from "../../App/settings/routerConst/RouterConstCB";
import "./index.css";

export const Menu = () => {
  const { router, route } = useRoute();
  const [active, setActive] = useState(route.name);

  function handlerFactory(routeName: string) {
    return () => {
      setActive(routeName);
      router.navigate(routeName);
    };
  }

  return (
    <nav className="menu">
      <ul className="menu__list">
        <li
          className={`${
            active === ROUTER_CONST.TASK.name ? "active" : ""
          } menu__item`}
          onClick={handlerFactory(ROUTER_CONST.TASK.name)}
        >
          Задание
        </li>
      </ul>
    </nav>
  );
};
