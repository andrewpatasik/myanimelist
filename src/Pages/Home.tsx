import { css } from "@emotion/react";
import { PageHeader } from "../components";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  RectangleStackIcon,
} from "../assets/icons";
import { Button } from "../components/Button";
import { colorPalletes } from "../components/style";

const homeStyle = {
  self: css({
    paddingTop: "3.5rem",
    display: "flex",
    width: "100%",
    color: colorPalletes["gray-500"]
  }),
  container: css({
    display: "flex",
    alignItems: "center",
  }),
  pagination: {
    color: colorPalletes["green-500"],
  },
  icon: css({
    width: "24px",
    height: "24px",
  })
};

export const Home = () => {
  return (
    <main css={homeStyle.self}>
      <PageHeader>
        <div css={[homeStyle.container, { columnGap: "6px" }]}>
          <RectangleStackIcon css={homeStyle.icon} />
          <p>All Anime</p>
        </div>
        <div css={[homeStyle.container, homeStyle.pagination]}>
          <Button onClick={() => {}}>
            <ArrowSmallLeftIcon css={homeStyle.icon} />
          </Button>
          <Button onClick={() => {}}>
            <ArrowSmallRightIcon css={homeStyle.icon} />
          </Button>
        </div>
      </PageHeader>
    </main>
  );
};
