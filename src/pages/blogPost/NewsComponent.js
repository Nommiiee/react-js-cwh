import React, { Component } from "react";

export default class NewsComponent extends Component {
  render() {
    let { title, description, image, date, content, href } = this.props;
    return (
      <>
        <div className="w-full md:w-6/12 lg:w-4/12 p-4 card  ">
          <div className="flex items-stretch h-full rounded-lg shadow-lg bg-white dark:bg-blue-900 overflow-hidden transition-all transform">
            <div className="w-full h-full flex flex-col justify-between">
                <div className="">
                  <div className=" overflow-hidden flex items-center justify-center">
                    <img
                      className="w-full h-44 object-cover"
                      src={image}
                      alt={title}
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-y-2">
                    <h1 className="text-xl font-semibold truncate">{title}</h1>
                    <p className="text-md w-full description text-ellipsis">{description}</p>
                    <p className="text-sm">{date}</p>
                    <p className="text-md">{content}</p>
                  </div>
                </div>
              <div className="w-full flex items-center justify-end p-4">
                  <a href={href} target="_blank"  className="">
                  <button className="px-4 py-1 rounded-lg shadow-lg bg-blue-500 text-white hover:bg-blue-600 transtition transform-all">
                    Read More
                  </button>
                  </a>
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }
}
