import React, { FC } from "react";
import "./index.css";

interface IProps {
  title: string;
  text: string;
}

export const InstructionItem: FC<IProps> = ({ title, text }) => {
  const regex = /<code>(.*?)<\/code>/gm;
  const m = text.match(regex);

  let end;

  const z = (
    <>
      {m?.map((str) => {
        const d = text.split(str);
        text = d[1];
        end = d[1];
        return (
          <>
            {d[0]}
            <code
              style={{
                backgroundColor: "lightgray",
                padding: "0 4px",
              }}
            >
              {str.replace("<code>", "").replace("</code>", "")}
            </code>
          </>
        );
      })}
    </>
  );
  return (
    <div className="instruction-item">
      <h2 className="instruction-item__title">{title}</h2>
      <p className="instruction-item__text">
        <div>
          {z}
          {end}
        </div>
      </p>
    </div>
  );
};
