import React, { Component } from "react";

import NewsComponent from "./blogPost/NewsComponent";

export default class Blog extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //   };
  // };

  componentDidMount(){
    console.log("Component Did Mount");
  }
  
  
  async loadNews(){
    const URL = `https://newsapi.org/v2/top-headlines?country=IN&apiKey=6c7a00a45b7149798b05cdcc0465a8c8&page=${this.state.page}&pageSize=2`;

    const data = await fetch(URL,{
      method: "GET",
    }).then((response) => response.json()).catch(err => console.log(err)).finally(() => console.log("Done"));
    // push the data to the state
    this.setState({ 
      articles: [...this.state.articles, ...data.articles],
      loading: false,
      });
      console.log(this.state.articles);
    };


 

  render() {
    return (
      <div className="w-full h-full flex item-center justify-center ">
        <div className=" w-full max-w-6xl">
          <div className="w-full mt-10">
            <h1 className="text-2xl text-center font-serif font-semibold">
              This is the start of the news feed.
            </h1>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" flex h-full flex-wrap w-full">
              {/* {this.state.articles.map((article) => {
                  return (
                    <NewsComponent
                      key={Math.random()}
                      title={article.title?article.title.slice(0,30) + "..." : "Data Not Avaialble"}
                      description={article.description?article.description.slice(0,60) + "...": "Data Not Avaialble"}
                      image={article.urlToImage?article.urlToImage: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"}
                      date={article?article.publishedAt: "Date Not Avaialble"}
                      content={article.content?article.content.slice(0,120) + "...": "Data Not Avaialble"}
                      href={article.url}
                      />
                      )
                })}               */}
            </div>
          </div>
          <div className="w-full p-2 flex items-center justify-center">
                <button className="px-8 py-2 text-lg text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 hover:-translate-y-1 transform transition-all">
                  Load More
                </button>
            </div>
        </div>
      </div>
    );
  }
}
