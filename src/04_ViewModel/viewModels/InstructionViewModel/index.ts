import { action, makeObservable, observable } from "mobx";
import { IInstructionService } from "../../../03_bussinesLayer/services/Instruction/interfaces";
import { IInstructionDTO } from "../../../Models";

export interface IInstructionViewModel {
  data?: IInstructionDTO[];
  getData(): Promise<void>;
}

export class InstructionViewModel implements IInstructionViewModel {
  data?: IInstructionDTO[];
  constructor(protected service: IInstructionService) {
    makeObservable(this, {
      data: observable,
      setData: action,
    });
  }

  getData = async (): Promise<void> => {
    const data = await this.service.getData();
    this.setData(data);
  };

  setData(data: IInstructionDTO[]) {
    this.data = data;
  }
}
