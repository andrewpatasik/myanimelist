import { css } from "@emotion/react";
import { MouseEventHandler, ReactElement } from "react";

interface IButton {
  children: ReactElement;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const buttonStyle = css({ all: "unset", ":hover": { cursor: "pointer" } });

export const Button = ({ children, onClick }: IButton) => {
  return (
    <button css={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};
