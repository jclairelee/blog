import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import pie from "./../../assets/imgs/pie.jpg";
import Main from "../../components/main/Main";
import Search from "../../components/search/Search";

const Hero = () => {
  return (
    <div className="main__hero">
      <h3 className="main__hero__title">Most Popular</h3>
      <img src={pie} alt="hero banner" className="main__hero__img" />
      <div className="main__hero__textBox">
        <h2>Flaky Pie Crust</h2>
        <p>
          How to Make a Flaky Pie Crust You'll find the full, step-by-step
          recipe below — but here's a brief overview of what you can expect when
          you make this flaky pie crust: 1. Combine the flour and salt. 2. Cut
          in the cold butter until the mixture resembles coarse crumbs. 3. Add
          the cold water a tablespoon at a time. 4. Wrap the dough in plastic
          wrap and refrigerate for at least 4 hours or overnight. 5. Roll the
          dough into a circle, then press it into a pie plate. Trim the excess
          and flute the edges.
        </p>
      </div>
    </div>
  );
};

const CategoryPg = ({ cat }) => {
  const name = cat.split("=");
  return (
    <div className="main__categoryPg">
      <h3
        className="main__categoryPg__title"
        style={{
          fontSize: "2rem",
          fontFamily: "monospace",
          fontWeight: "bold",
          borderBottom: "1px outset black",
        }}
      >
        {name[1].toUpperCase()}
      </h3>
      <Search />
    </div>
  );
};

function Landing() {
  const [posts, setPosts] = useState([]);

  const category = useLocation().search;

  useEffect(() => {
    const getData = async () => {
      try {
        if (!category) {
          const res = await axios.get(`http://localhost:8080/posts`);
          setPosts(res.data);
        } else {
          const res = await axios.get(`http://localhost:8080/posts${category}`);
          setPosts(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [category]);

  return (
    <div className="main">
      {category ? <CategoryPg cat={category} /> : <Hero />}
      <Main posts={posts} cat={category} />
    </div>
  );
}

export default Landing;
