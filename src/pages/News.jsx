import React from "react";
import NewsPost from "../components/NewsPost";
import dump from "./dump.json";

export default class News extends React.Component {
  constructor() {
    super();

    this.loading = false;
    this.page = 0;
    this.totalResults = 0;
    this.articles = [];
    this.country = "in";
  }

  // dump = [
  //   {
  //     source: {
  //       id: null,
  //       name: "CBS Sports",
  //     },
  //     author: "Shakiel Mahjouri",
  //     title:
  //       "UFC 285 results, highlights: Jon Jones earns heavyweight title with first-round submission of Ciryl Gane - CBS Sports",
  //     description:
  //       "Jones joins his rival Daniel Cormier in claiming both the light heavyweight and heavyweight titles in their careers",
  //     url: "https://www.cbssports.com/mma/news/ufc-285-results-highlights-jon-jones-earns-heavyweight-title-with-first-round-submission-of-ciryl-gane/live/",
  //     urlToImage:
  //       "https://sportshub.cbsistatic.com/i/r/2023/03/05/6113a6d4-8ed7-4e94-959e-a14dbf6a322d/thumbnail/1200x675/a4d07b01f80853031c418f3a7c8ce41f/jon-jones-belt.jpg",
  //     publishedAt: "2023-03-05T12:30:00Z",
  //     content:
  //       "Jon Jones is your new UFC heavyweight champion and adds to his case for being the greatest fighter in mixed martial arts history. Jones locked in a guillotine choke on Ciryl Gane in the opening round… [+4230 chars]",
  //   },
  //   {
  //     source: {
  //       id: "cnn",
  //       name: "CNN",
  //     },
  //     author: "Marianne Garvey",
  //     title:
  //       "Chris Rock tackles 'selective outrage' and Oscars slap in live Netflix special - CNN",
  //     description:
  //       "Chris Rock finally addressed the Oscars slap and made Netlfix history on Saturday.",
  //     url: "https://www.cnn.com/2023/03/04/entertainment/chris-rock-netflix-live-special/index.html",
  //     urlToImage:
  //       "https://media.cnn.com/api/v1/images/stellar/prod/230304233615-01-chris-rock-netflix-special-030423.jpg?c=16x9&q=w_800,c_fill",
  //     publishedAt: "2023-03-05T11:43:00Z",
  //     content:
  //       "Chris Rock finally addressed the Oscars slap and made Netflix history on Saturday, with the platforms first live global streaming event.\r\nIm going to try to do a show tonight without offending nobody… [+3177 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-washington-post",
  //       name: "The Washington Post",
  //     },
  //     author: "Lily Kuo",
  //     title:
  //       "China pledges economic growth of about 5% in 2023 - The Washington Post",
  //     description:
  //       "The National People’s Congress opened in Beijing. China’s rubber-stamp parliament is expected to approve a government overhaul that extends Xi Jinping’s control.",
  //     url: "https://www.washingtonpost.com/world/2023/03/05/china-congress-economy-xi-jinping/",
  //     urlToImage:
  //       "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7FXEKYZHXKABX6XGB3PICY3ATA.jpg&w=1440",
  //     publishedAt: "2023-03-05T10:02:00Z",
  //     content:
  //       "Comment on this story\r\nChina pledged to expand its economy by around 5 percent this year, a modest goal that underlines the challenges confronting Chinese President Xi Jinping in his third term, as h… [+4731 chars]",
  //   },
  // ];

  state = {
    loading: false,
    page: 1,
    totalResults: 0,
    articles: [...dump.articles],
  };

  componentDidMount() {
    // this.fetchNews();
  }

  fetchNews = async () => {
    const URI = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=6c7a00a45b7149798b05cdcc0465a8c8&pageSize=9&page=${this.state.page}`;
    fetch(URI)
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          // push the data.articles to the state

          this.setState({
            articles: [this.articles, ...data.articles],
            totalResults: data.totalResults,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleNextPage = () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 9)) {
      return;
    }
    this.setState({ page: this.state.page + 1 });
    this.fetchNews();
  };

  handlePrevPage = () => {
    if (this.state.page <= 0) {
      return;
    }
    this.setState({ page: this.state.page - 1 });
    this.fetchNews();
  };

  handleOnClick = (ele) => {
    console.log(ele.target);
    const btn = ele.target;
    btn.classList.add("scale-95");
    btn.classList.add("translate-y-1");
    setTimeout(() => {
      btn.classList.remove("scale-95");
      btn.classList.remove("translate-y-1");
    }, 150);
  };

  render() {
    return (
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-full max-w-7xl flex flex-col justify-center items-center">
          <h1 className="text-2xl py-4">
            Welcome to{" "}
            <span className="text-blue-600 font-semibold ">News API App</span>
          </h1>
          <div className="w-full sm:flex justify-start flex-wrap ">
            {this.state.articles.map((article) => (
              <NewsPost
                key={Math.random() * 100}
                imgUrl={
                  article.urlToImage
                    ? article.urlToImage
                    : "https://http.cat/204"
                }
                title={article.title ? article.title : "No Title"}
                description={article.description ? article.description : ""}
                url={article.url ? article.url : ""}
                author={article.author ? article.author : "No Author"}
              />
            ))}
          </div>
          <div className="w-11/12 lg:w-full flex items-center justify-between px-4 py-10">
            <button
              onClick={(btn) => {
                this.handleOnClick(btn);
                this.handlePrevPage();
              }}
              className="transform transition-all duration-150 px-8 py-1 rounded-md shadow-md hover:bg-opacity-80  bg-black text-gray-50 font-medium text-lg"
            >
              Prev
            </button>
            <button
              onClick={(btn) => {
                this.handleOnClick(btn);
                this.handleNextPage();
              }}
              className="transform transition-all duration-15 0 px-8 py-1 rounded-md shadow-md hover:bg-opacity-80  bg-black text-gray-50 font-medium text-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
