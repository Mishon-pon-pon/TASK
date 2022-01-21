import { IInstructionApiClient } from "../../../02_integrationLayer/apiClients/Instruction/interfaces";
import { IInstructionDTO } from "../../../Models";
import { IInstructionService } from "./interfaces";

export class InstructionService implements IInstructionService {
  constructor(protected apiClient: IInstructionApiClient) {}
  getData = async (): Promise<IInstructionDTO[]> => {
    return this.apiClient.getData();
  };
}
