import { css } from "@emotion/react";
import { colorPalletes, textSizes } from "../style";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const navbarStyle = {
  container: css({
    position: "fixed",
    top: "0",
    width: "100%",
    color: colorPalletes["white"],
  }),
  self: css({
    backgroundColor: colorPalletes["green-400"],
    padding: "1rem",
    display: "flex",
    position: "relative",
  }),
  icon: css({
    width: "20px",
    height: "24px",
  }),
  button: css({ all: "unset", ":hover": { cursor: "pointer" } }),
  heading: css([textSizes["text-small"], { margin: "0 auto 0 auto" }]),
  menu: css({
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "112px",
    backgroundColor: colorPalletes["gray-500"],
  }),
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div css={navbarStyle.container}>
      <nav css={navbarStyle.self}>
        <button
          css={navbarStyle.button}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <Bars2Icon css={navbarStyle.icon} />
          ) : (
            <XMarkIcon css={navbarStyle.icon} />
          )}
        </button>
        <h1 css={navbarStyle.heading}>MYANIMELIST</h1>
        <div css={[navbarStyle.icon, { visibility: "hidden" }]}></div>
      </nav>
      <div
        css={[navbarStyle.menu, { display: !isMenuOpen ? "none" : "block" }]}
      ></div>
    </div>
  );
};
