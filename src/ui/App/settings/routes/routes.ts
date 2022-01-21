import { Router } from "router5";
import { Params } from "router5/dist/types/base";
import { RouterDependencies } from "../../../../routes/onEnter";
import { VIEW_MODEL } from "../../../../04_ViewModel/viewModelContainer";
import { IInstructionViewModel } from "../../../../04_ViewModel/viewModels/InstructionViewModel";
import { ROUTER_CONST } from "../routerConst/RouterConstCB";

export const routes = [
  {
    name: ROUTER_CONST.TASK.name,
    path: ROUTER_CONST.TASK.path,
    onEnter: (params: Params, router: Router<RouterDependencies>): void => {
      const container = router.getDependencies().container;
      const { getData } = container.get<IInstructionViewModel>(
        VIEW_MODEL.Instruction
      );

      getData();
    },
  },
];
