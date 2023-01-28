import React, { Component } from "react";

import Blogpost from "../pages/blogPost/Blogpost";

export default class Blog extends Component {
  title = "Blog";
  author = "Amanda Hoover";
  description = "Millions of eager players have overrun the legacy website";
  image =
    "https://media.wired.com/photos/63d0134538cf92fd274215a9/191:100/w_1280,c_limit/Chess.com-Crash-Culture-105640617.jpg";
  date = "023-01-25T12:00:00";
  link = "https://www.wired.com/story/chess-dot-com-tiktok-mittens-scandal/";
  content =
    "Trending in 2023 is one of the worlds oldest games played on a 17-year-old website: Chess.com. The site, which lets people take lessons, solve puzzles, and match up against computers or other players…";

  getData = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/everything?q=cat&apiKey=6c7a00a45b7149798b05cdcc0465a8c8"
    )
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
    return data;
  };

  render() {
    this.getData();
    return (
      <div className="w-full h-full flex item-center justify-center">
        <div className="black w-full max-w-6xl">
          <div className="w-full mt-10">
            <h1 className="text-2xl text-center font-serif font-semibold">
              This is the start of the news feed.
            </h1>
          </div>
          <div className="flex items-center flex-wrap w-full mt-10">
            <Blogpost
              title={this.title}
              description={this.description}
              image={this.image}
              date={this.date}
              content={this.content}
              href={this.link}
            />
          </div>
        </div>
      </div>
    );
  }
}
