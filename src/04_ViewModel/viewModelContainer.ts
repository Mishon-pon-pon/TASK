import { Container } from "inversify";
import { SERVICE } from "../03_bussinesLayer/serviceContainer";
import { IInstructionService } from "../03_bussinesLayer/services/Instruction/interfaces";
import {
  InstructionViewModel,
  IInstructionViewModel,
} from "./viewModels/InstructionViewModel";

export const VIEW_MODEL = {
  Instruction: Symbol.for("InstructionViewModel"),
};

export const viewModelContainer = new Container();

viewModelContainer
  .bind<IInstructionViewModel>(VIEW_MODEL.Instruction)
  .toDynamicValue(({ container }) => {
    const service = container.get<IInstructionService>(SERVICE.Instruction);
    return new InstructionViewModel(service);
  })
  .inSingletonScope();
