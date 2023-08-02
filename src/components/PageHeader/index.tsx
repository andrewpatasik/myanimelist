import { css } from "@emotion/react";
import { ReactElement } from "react";

interface IPageHeader {
  children: ReactElement<HTMLDivElement>[];
}

const pageHeaderStyle = css({
  display: "flex",
  margin: "3rem 1rem",
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between"
});

export const PageHeader = ({ children }: IPageHeader) => {
  return <div css={pageHeaderStyle}>{children}</div>;
};
