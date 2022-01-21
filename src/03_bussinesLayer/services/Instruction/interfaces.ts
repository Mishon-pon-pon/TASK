import { IInstructionDTO } from "../../../Models";

export interface IInstructionService {
  getData(): Promise<IInstructionDTO[]>;
}
