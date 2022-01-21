import { Container } from "inversify";
import { INFRASTRUCTION_MODULE } from "../01_intfrastructureLayer";
import { IAPIModule } from "../01_intfrastructureLayer/APIModule/interfaces";
import { InstructionApiClient } from "./apiClients/Instruction";
import { IInstructionApiClient } from "./apiClients/Instruction/interfaces";

export const API_CLIENT = {
  Instruction: Symbol.for("InstructionApiClient"),
};

export const apiClientsContainer = new Container();

apiClientsContainer
  .bind<IInstructionApiClient>(API_CLIENT.Instruction)
  .toDynamicValue(({ container }) => {
    const apiModule = container.get<IAPIModule>(
      INFRASTRUCTION_MODULE.APIModule
    );
    return new InstructionApiClient(apiModule);
  });
