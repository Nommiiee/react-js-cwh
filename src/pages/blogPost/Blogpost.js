import React, { Component } from "react";

export default class Blogpost extends Component {
  render() {
    let { title, description, image, date, content, href } = this.props;
    console.log();
    return (
      <>
        <div className="w-11/12 md:w-6/12 lg:w-4/12 p-4 card">
          <div className="w-full h-full rounded-lg shadow-lg dark:bg-blue-900 overflow-hidden transition-all transform hover:-translate-y-2 hover:-translate-x-2">
            <a href={href}>
              <div className="w-full h-full overflow-hidden flex items-center justify-center">
                <img
                  className="w-full h-40 object-cover"
                  src={image}
                  alt={title}
                />
              </div>
              <div className="p-4">
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className="mt-2 text-md">{description}</p>
                <p className="mt-2 text-sm">{date}</p>
                <p className="mt-2 text-lg">{content}</p>
              </div>
            </a>
          </div>
        </div>
      </>
    );
  }
}
