import React, { FC } from "react";
import "./index.css";

interface IProps {
  title: string;
  text: string;
}

export const InstructionItem: FC<IProps> = ({ title, text }) => {
  return (
    <div className="instruction-item">
      <h2 className="instruction-item__title">{title}</h2>
      <p className="instruction-item__text">{text}</p>
    </div>
  );
};
