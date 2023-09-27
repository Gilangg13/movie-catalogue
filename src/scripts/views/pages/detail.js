import UrlParser from "../../routes/url-parser.js";
import TheMovieDbSource from "../../data/themoviedb-source.js";
import { createMovieDetailTemplate } from "../templates/template-creator.js";

const Detail = {
  async render() {
    return `
        <div id="movie" class="movie">
        
        </div>
    `;
  },

  async afterRender() {
    //  Fungsi ini akan dipanggil setelah render
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);

    const movieContainer = document.querySelector("#movie");
    movieContainer.innerHTML += createMovieDetailTemplate(movie);
    console.log(movie);
  },
};

export default Detail;
