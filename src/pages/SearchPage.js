import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import "../styles/SearchPage.css";
import { Link, useParams } from "react-router-dom";
import Modal from "../components/Modal";
import axios from "axios";

function SearchPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [results, setResults] = useState([]);

  const userId = "V-YBC9sY1Y9NWo4-BgqQKMpX2mj8vzaIZuSH3gzZVyk";
  //normalnie wrzuciłbym do process.env, na potrzeby zadania umieszcze tutaj

  const handleClick = (photo) => {
    setSelectedImage(photo);
    setIsOpen(true);
  };

  let { searched } = useParams();

  useEffect(() => {
    const url = `https://api.unsplash.com/search/photos?per_page=30&page=1&query=${searched}&client_id=${userId}`;
    const apiRequest = () => {
      axios
        .get(url)
        .then((response) => {
          setResults(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return apiRequest();
  }, [searched]);

  return (
    <div className="searchPage">
      <div className="logo">
        <Link to="/">Unsplash</Link>
      </div>
      <div className="inputContainer">
        <Search />
      </div>
      <div className="pictureBox">
        {results.map((photo) => {
          return (
            <img
              onClick={() => {
                handleClick(photo);
              }}
              className="picture"
              id={photo.id}
              src={photo.urls.small}
              alt="img"
              key={photo.id}
            />
          );
        })}

        <Modal
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
}

export default SearchPage;
