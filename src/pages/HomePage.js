import React from "react";
import Search from "../components/Search";
import "../styles/HomePage.css";
import { useHistory} from "react-router-dom";

function HomePage() {

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${e.target.textContent}`);
  };


  return (
    <div className="homePage">
      <div className="homePage_container">
        <h1>Unsplash</h1>
        <p>
          The internet’s source of freely-usable images. Powered by creators
          everywhere.
        </p>
        <Search />
        <p>Trending: <span onClick={handleSubmit}>flower</span>, <span onClick={handleSubmit}>wallpapers</span>, <span onClick={handleSubmit}>backgrounds</span>, <span onClick={handleSubmit}>happy</span>, <span onClick={handleSubmit}>love</span></p>
      </div>
    </div>
  );
}

export default HomePage;
