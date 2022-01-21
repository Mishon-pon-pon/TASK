import { Container } from "inversify";
import { IInstructionApiClient } from "../02_integrationLayer/apiClients/Instruction/interfaces";
import { API_CLIENT } from "../02_integrationLayer/integrationContainer";
import { InstructionService } from "./services/Instruction";
import { IInstructionService } from "./services/Instruction/interfaces";

export const SERVICE = {
  Instruction: Symbol.for("InstructionService"),
};

export const serviceContainer = new Container();

serviceContainer
  .bind<IInstructionService>(SERVICE.Instruction)
  .toDynamicValue(({ container }) => {
    const apiClient = container.get<IInstructionApiClient>(
      API_CLIENT.Instruction
    );
    return new InstructionService(apiClient);
  });
