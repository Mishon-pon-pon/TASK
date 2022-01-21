import React from "react";
import { observer } from "mobx-react-lite";
import { InstructionItem } from "../../Components/InstructionItem";
import useViewModel from "../../hooks/useViewModel";
import { VIEW_MODEL } from "../../../04_ViewModel/viewModelContainer";
import { IInstructionViewModel } from "../../../04_ViewModel/viewModels/InstructionViewModel";
import "./index.css";

export const Home = observer(() => {
  const { data } = useViewModel<IInstructionViewModel>(VIEW_MODEL.Instruction);
  return (
    <>
      {data?.map((item) => (
        <InstructionItem key={item.text} {...item} />
      ))}
    </>
  );
});
