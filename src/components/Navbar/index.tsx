import { css } from "@emotion/react";
import { colorPalletes, textSizes } from "../style";
import { useState } from "react";
import { Bars2Icon, XMarkIcon } from "../../assets/icons";
import { Button } from "../Button";

const navbarStyle = {
  container: css({
    position: "fixed",
    top: 0,
    width: "100%",
    color: colorPalletes["white"],
  }),
  self: css({
    backgroundColor: colorPalletes["green-400"],
    padding: "1rem",
    display: "flex",
  }),
  icon: css({
    width: "20px",
    height: "24px",
  }),
  heading: css([textSizes["text-small"], { margin: "0 auto 0 auto" }]),
  menu: css({
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
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <Bars2Icon css={navbarStyle.icon} />
          ) : (
            <XMarkIcon css={navbarStyle.icon} />
          )}
        </Button>
        <h1 css={navbarStyle.heading}>MYANIMELIST</h1>
        <div css={[navbarStyle.icon, { visibility: "hidden" }]}></div>
      </nav>
      <div
        css={[navbarStyle.menu, { display: !isMenuOpen ? "none" : "block" }]}
      ></div>
    </div>
  );
};
