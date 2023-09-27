/* eslint-disable import/extensions */
import NowPlaying from "../views/pages/now-playing.js";
import UpComing from "../views/pages/upcoming.js";
import Detail from "../views/pages/detail.js";

const routes = {
  "/": NowPlaying,
  "/now-playing": NowPlaying,
  "/upcoming": UpComing,
  "/detail/:id": Detail,
};

export default routes;
