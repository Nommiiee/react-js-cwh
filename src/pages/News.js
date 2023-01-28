import React, { Component } from "react";

import NewsComponent from "./blogPost/NewsComponent";

export default class Blog extends Component {
  articles = [
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Amanda Hoover",
      title: "Celebrities, TikTok, and a Cat Bot Are Crashing Chess.com",
      description: "Millions of eager players have overrun the legacy website.",
      url: "https://www.wired.com/story/chess-dot-com-tiktok-mittens-scandal/",
      urlToImage:
        "https://media.wired.com/photos/63d0134538cf92fd274215a9/191:100/w_1280,c_limit/Chess.com-Crash-Culture-105640617.jpg",
      publishedAt: "2023-01-25T12:00:00Z",
      content:
        "Trending in 2023 is one of the worlds oldest games played on a 17-year-old website: Chess.com. The site, which lets people take lessons, solve puzzles, and match up against computers or other players… [+2891 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "From Rosalía to Beyoncé: 25 of the best songs released in 2022",
      description:
        "From Beyoncé and Harry Styles to Eliza Rose and Cat Burns, here are some of the years top tracks.",
      url: "https://www.bbc.co.uk/news/entertainment-arts-64124718",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/4354/production/_128163271_r2.jpg",
      publishedAt: "2022-12-31T00:50:28Z",
      content:
        "With landmark albums from Beyoncé, Kendrick Lamar, Bad Bunny and Rosalía, 2022 was a year where the globe's biggest artists stretched the boundaries of what was possible in pop music.\r\nBut it was als… [+17240 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
<<<<<<< HEAD
      "author": "Rob Bricken",
      "title": "James Cameron Watches Movies Standing Up, Apparently",
      "description": "Good news for James Cameron and giant blue cat-people aficionados alike: The Way of Water, the Avatar sequel, has made more than $1.7 billion and counting, paving the way for those three additional sequels the director has had planned. For Cameron, it’s a sig…",
      "url": "https://gizmodo.com/avatar-way-of-water-james-cameron-theatrical-streaming-1849974846",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/50ebf83dc2455ad6b21ca052cd185e9b.jpg",
      "publishedAt": "2023-01-11T19:00:00Z",
      "content": "Good news for James Cameron and giant blue cat-people aficionados alike: The Way of Water, the Avatar sequel, has made more than $1.7 billion and counting, paving the way for those three additional s… [+2288 chars]"
    },{
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Rob Bricken",
      "title": "James Cameron Watches Movies Standing Up, Apparently",
      "description": "Good news for James Cameron and giant blue cat-people aficionados alike: The Way of Water, the Avatar sequel, has made more than $1.7 billion and counting, paving the way for those three additional sequels the director has had planned. For Cameron, it’s a sig…",
      "url": "https://gizmodo.com/avatar-way-of-water-james-cameron-theatrical-streaming-1849974846",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/50ebf83dc2455ad6b21ca052cd185e9b.jpg",
      "publishedAt": "2023-01-11T19:00:00Z",
      "content": "Good news for James Cameron and giant blue cat-people aficionados alike: The Way of Water, the Avatar sequel, has made more than $1.7 billion and counting, paving the way for those three additional s… [+2288 chars]"
=======
      author: "Rob Bricken",
      title: "James Cameron Watches Movies Standing Up, Apparently",
      description:
        "Good news for James Cameron and giant blue cat-people aficionados alike: The Way of Water, the Avatar sequel, has made more than $1.7 billion and counting, paving the way for those three additional sequels the director has had planned. For Cameron, it’s a sig…",
      url: "https://gizmodo.com/avatar-way-of-water-james-cameron-theatrical-streaming-1849974846",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/50ebf83dc2455ad6b21ca052cd185e9b.jpg",
      publishedAt: "2023-01-11T19:00:00Z",
      content:
        "Good news for James Cameron and giant blue cat-people aficionados alike: The Way of Water, the Avatar sequel, has made more than $1.7 billion and counting, paving the way for those three additional s… [+2288 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Nikki Main",
      title: "Clouded Leopard Escapes From Dallas Zoo Enclosure",
      description:
        "A clouded leopard was reported missing from the Dallas Zoo on Friday as staff say they showed up to work to find the cage empty. The zoo put out an urgent message on Twitter saying the clouded leopard is “non-threatening” but the zoo has shut down while they …",
      url: "https://gizmodo.com/clouded-leopard-dallas-zoo-1849986355",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7f1d2dff0f48a3cf91ffa274323b36e5.jpg",
      publishedAt: "2023-01-13T19:30:00Z",
      content:
        "A clouded leopard was reported missing from the Dallas Zoo on Friday as staff say they showed up to work to find the cage empty. The zoo put out an urgent message on Twitter saying the clouded leopar… [+2124 chars]",
>>>>>>> d743f1c2d1fe5debda1cab69c837b58e0cfeb41e
    },
   
  ];

  title = "Blog";
  author = "Amanda Hoover";
  description = "Millions of eager players have overrun the legacy website";
  image =
    "https://media.wired.com/photos/63d0134538cf92fd274215a9/191:100/w_1280,c_limit/Chess.com-Crash-Culture-105640617.jpg";
  date = "023-01-25T12:00:00";
  link = "https://www.wired.com/story/chess-dot-com-tiktok-mittens-scandal/";
  content =
    "Trending in 2023 is one of the worlds oldest games played on a 17-year-old website: Chess.com. The site, which lets people take lessons, solve puzzles, and match up against computers or other players…";

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    const desElem = document.querySelectorAll(".description");
    desElem.forEach((desc) => {
      if (desc.textContent.length > 150) {
        desc.textContent = desc.textContent.slice(0, 150) + "...";
      }
    });
    console.log(desElem);
    return (
      <div className="w-full h-full flex item-center justify-center">
        <div className="black w-full max-w-6xl">
          <div className="w-full mt-10">
            <h1 className="text-2xl text-center font-serif font-semibold">
              This is the start of the news feed.
            </h1>
          </div>
          <div className="w-full h-full flex justify-center items-center">
<<<<<<< HEAD

          <div className=" flex items-stretch h-full flex-wrap w-11/12 border-2 border-black">
            {this.state.articles.map((article) => {
                return (
                  <NewsComponent
                  key={article.url}
=======
            <div className=" flex items-center justify-center md:justify-start flex-wrap w-11/12 ">
              {this.state.articles.map((article) => {
                return (
                  <NewsComponent
                    key={article.url}
>>>>>>> d743f1c2d1fe5debda1cab69c837b58e0cfeb41e
                    title={article.title}
                    description={article.description}
                    image={article.urlToImage}
                    date={article.publishedAt}
                    content={article.content}
<<<<<<< HEAD
                    href={article.url}
                    />
                    )
            })}              
           </div>
=======
                    hredf={article.url}
                  />
                );
              })}
            </div>
>>>>>>> d743f1c2d1fe5debda1cab69c837b58e0cfeb41e
          </div>
        </div>
      </div>
    );
  }
}
