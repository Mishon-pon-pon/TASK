import React from "react";
import { observer } from "mobx-react-lite";
import { InstructionItem } from "../../Components/InstructionItem";
import useViewModel from "../../hooks/useViewModel";
import { VIEW_MODEL } from "../../../04_ViewModel/viewModelContainer";
import { IInstructionViewModel } from "../../../04_ViewModel/viewModels/InstructionViewModel";
import "./index.css";

export const Task = observer(() => {
  const { data } = useViewModel<IInstructionViewModel>(VIEW_MODEL.Instruction);
  return (
    <section>
      {data?.map((item) => (
        <InstructionItem key={item.text} {...item} />
      ))}
      <video className="video" controls width={"50%"}>
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div style={{ display: "flex", padding: "32px" }}>
        <p style={{ margin: "auto" }}>Успехов!</p>
      </div>
    </section>
  );
});
