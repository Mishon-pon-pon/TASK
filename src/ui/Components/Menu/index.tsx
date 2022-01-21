import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useRoute } from "react-router5";
import { ROUTER_CONST } from "../../App/settings/routerConst/RouterConstCB";

export const Menu = () => {
  const { router } = useRoute();

  const [value, setValue] = React.useState(0);

  function handlerFactory(routerName: string) {
    return () => {
      router.navigate(routerName);
    };
  }

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Задание"
          onClick={handlerFactory(ROUTER_CONST.TASK.name)}
        />
        <BottomNavigationAction
          label="Решение"
          onClick={handlerFactory(ROUTER_CONST.TASK.name)}
        />
      </BottomNavigation>
    </Box>
  );
};
