import { IAPIModule } from "../../../01_intfrastructureLayer/APIModule/interfaces";
import { IInstructionDTO } from "../../../Models";
import { IInstructionApiClient } from "./interfaces";

export class InstructionApiClient implements IInstructionApiClient {
  constructor(protected apiModule: IAPIModule) {}

  getData = async (): Promise<IInstructionDTO[]> => {
    return this.apiModule.getData("instruction");
  };
}
