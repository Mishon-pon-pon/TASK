import { createRouter, Route, Router } from "router5";
import { createDIContainer } from "./CreateDIContainer";
import { interfaces } from "inversify";
import { integrationContainer } from "../01_intfrastructureLayer";
import { serviceContainer } from "../03_bussinesLayer/serviceContainer";
import { viewModelContainer } from "../04_ViewModel/viewModelContainer";
import { _createRouter } from "../routes/createRouter";
import { apiClientsContainer } from "../02_integrationLayer/integrationContainer";

export class Bootstrap {
  private diContainer: interfaces.Container;
  private router: Router;

  constructor() {
    this.router = createRouter();
    this.diContainer = createDIContainer(
      integrationContainer,
      apiClientsContainer,
      serviceContainer,
      viewModelContainer
    );
  }

  initRouter = (routes: Route[], routerConst: any) => {
    this.router = _createRouter(routes);
    this.router.setDependencies({ container: this.diContainer });
    this.router.setDependencies({ routerConst });
  };

  getDiContainer(): interfaces.Container {
    return this.diContainer;
  }

  getRouter(): Router {
    return this.router;
  }
}
