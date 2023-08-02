import { css } from "@emotion/react";
import { colorPalletes, textSizes } from "../style";

const navbarStyle = {
  self: css({
    backgroundColor: colorPalletes["green-500"],
    display: "flex",
  }),
  heading: css(textSizes["text-medium"]),
};

export const Navbar = () => {
  return (
    <nav css={navbarStyle.self}>
      <h1 css={navbarStyle.heading}>MYANIMELIST</h1>
    </nav>
  );
};
