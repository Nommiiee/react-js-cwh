import React from "react";
import NewsPost from "../components/NewsPost";
import dump from "./dump.json";
import Loading from "../components/Loading";

export default class News extends React.Component {
  constructor() {
    super();

    this.loading = false;
    this.page = 0;
    this.totalResults = 0;
    this.articles = [];
    this.country = "in";
    this.pageSize = 5;
  }

  state = {
    loading: true,
    page: 1,
    totalResults: 0,
    articles: [...dump.articles],
    country: "in",
    pageSize: 5,
  };

  componentDidMount() {
    // this.fetchNews();
  }

  fetchNews = async () => {
    this.setState({ loading: true });
    const URI = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=6c7a00a45b7149798b05cdcc0465a8c8&pageSize=${this.state.pageSize}&page=${this.state.page}`;
    fetch(URI)
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          // push the data.articles to the state
          setTimeout(() => {
            this.setState({
              articles: [this.articles, ...data.articles],
              totalResults: data.totalResults,
              loading: false,
            });
          }, 150);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleNextPage = () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.state.pageSize)
    ) {
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
          <div className="w-full sm:flex justify-start flex-wrap border-black border-2">
            {this.state.loading && <Loading />}
            {!this.state.loading &&
              this.state.articles.map((article) => (
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
