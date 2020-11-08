import React from "react";
import Search from "../components/Search";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="homePage">
      <div className="homePage_container">
        <h1>Unsplash</h1>
        <p>
          The internet’s source of freely-usable images. Powered by creators
          everywhere.
        </p>
        <Search />
        <p>Trending: flower, wallpapers, backgrounds, happy, love</p>
      </div>
    </div>
  );
}

export default HomePage;
