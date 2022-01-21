import { action, makeObservable, observable } from "mobx";
import { IInstructionService } from "../../../03_bussinesLayer/services/Instruction/interfaces";
import { IInstructionDTO } from "../../../Models";

export interface IInstructionViewModel {
  data?: IInstructionDTO[];
  getData(): Promise<IInstructionDTO[]>;
}

export class InstructionViewModel implements IInstructionViewModel {
  data?: IInstructionDTO[];
  constructor(protected service: IInstructionService) {
    makeObservable(this, {
      data: observable,
      getData: action,
    });
  }

  getData = async (): Promise<IInstructionDTO[]> => {
    this.data = await this.service.getData();
    return this.data;
  };
}
