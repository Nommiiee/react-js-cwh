import React from "react";
import NewsPost from "../components/NewsPost";
import Loading from "../components/Loading";
import PropTypes from "prop-types";
import NewsCategories from "../components/NewsCategories";

export default class News extends React.Component {
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      loading: false,
      page: 1,
      totalResults: 1,
      articles: [],
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    this.setState({ loading: true });
    const URI = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c7a00a45b7149798b05cdcc0465a8c8&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    fetch(URI)
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          // push the data.articles to the state
          setTimeout(() => {
            this.setState({
              articles: [...data.articles],
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
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      return;
    }

    this.setState({ page: this.state.page + 1 }, () => {
      this.fetchNews();
    });
  };

  handlePrevPage = () => {
    if (this.state.page <= 0 || this.state.page === 1) {
      return;
    }
    this.setState({ page: this.state.page - 1 }, () => {
      this.fetchNews();
    });
  };

  handleOnClick = (ele) => {
    const btn = ele.target;
    btn.classList.add("scale-95");
    btn.classList.add("translate-y-1");
    setTimeout(() => {
      btn.classList.remove("scale-95");
      btn.classList.remove("translate-y-1");
    }, 75);
  };

  render() {
    return (
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-full max-w-7xl flex flex-col justify-center items-center">
          <h1 className="text-2xl py-4">
            Welcome to{" "}
            <span className="text-blue-600 font-semibold ">News API App</span>
          </h1>
          <div>
            <NewsCategories />
          </div>
          <div className="w-full sm:flex justify-start flex-wrap ">
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
                  title={article.title ? article.title : "Not Found"}
                  description={
                    article.description ? article.description : "Not Found"
                  }
                  url={article.url ? article.url : "#"}
                  author={article.author ? article.author : "Not Found"}
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
            <div>
              <span className="text-gray-500 font-medium text-lg"> Page </span>
              <span className="text-gray-900 font-semibold text-lg">
                {" "}
                {this.state.page}{" "}
              </span>
              <span className="text-gray-500 font-medium text-lg">
                {" "}
                of {Math.ceil(
                  this.state.totalResults / this.props.pageSize
                )}{" "}
              </span>
            </div>
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
