import React from "react";
import { useRoute } from "react-router5";
import { observer } from "mobx-react-lite";
import { constants } from "router5";
import useRouteSegment from "../hooks/useRouteSegment";
import { Menu } from "../Components/Menu";
import "./index.css";

/**
 * Основной контейнер приложения.
 */
const MainContainer = (
  getPageMapFromSegment: (segment: string, route: string) => JSX.Element | null
) => {
  const { route } = useRoute();
  const segment = useRouteSegment();

  if (segment === constants.UNKNOWN_ROUTE) {
    return <div>404</div>;
  }

  const page = getPageMapFromSegment(segment, route.name);

  return <MainContainerApp page={page} />;
};

const MainContainerApp = observer(({ page }: { page: JSX.Element | null }) => {
  return (
    <React.Fragment>
      <header>
        <Menu />
      </header>
      <main>{page}</main>
      <footer>
        <p>interview {new Date().getFullYear()}г.</p>
      </footer>
    </React.Fragment>
  );
});

export default MainContainer;
