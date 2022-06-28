import React from "react";
import { ConvertStatusJapanese } from "../../../util/Convert";
import { StatusType } from "../../../types/type";
import { Status, StatusBar, StatusName, StatusWrapper } from "./style";

type ParameterProps = {
  status: StatusType;
};

export const Parameter = ({ status }: ParameterProps) => {
  return (
    <StatusWrapper>
      {Object.entries(status).map(([key, value]) => {
        return (
          <Status key={key}>
            <StatusName>{ConvertStatusJapanese(key)}</StatusName>
            <StatusBar value={(value / 255) * 100} />
            {value}
          </Status>
        );
      })}
    </StatusWrapper>
  );
};
