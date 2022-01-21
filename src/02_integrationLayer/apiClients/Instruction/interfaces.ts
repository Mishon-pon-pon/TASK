import { IInstructionDTO } from "../../../Models";

export interface IInstructionApiClient {
  getData(): Promise<IInstructionDTO[]>;
}
