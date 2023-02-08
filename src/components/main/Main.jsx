import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

function Main({ posts, cat }) {
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  const trimText = (txt) => {
    txt = txt.slice(0, 300);
    return `${txt}...`;
  };
  return (
    <div className="main__container">
      {cat ? (
        <p style={{ fontSize: "1.25rem", margin: "0 0 2rem 0" }}>
          Check out the latest posts!
        </p>
      ) : (
        <h3 className="main__title">Latest Posts</h3>
      )}
      <div className="main__content">
        {posts.slice(posts.length - 8).map((item) => (
          <div className="main__content__list" key={item.id}>
            <div className="main__content__list__img">
              <img src={`../upload/${item.imgURL}`} alt="bread" />
            </div>
            <div className="main__content__list__text">
              <Link
                className="main__content__list__link"
                to={`/posts/${item.id}`}
              >
                <h2>{item.title}</h2>
              </Link>
              <span>{trimText(getText(item.content))}</span>
              <Link
                className="main__content__list__link"
                to={`/posts/${item.id}`}
              >
                <button className="btns">Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
