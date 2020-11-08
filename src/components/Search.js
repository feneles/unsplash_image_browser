import React, { useState, useRef, useEffect } from "react";
import "../styles/Search.css";
import { useHistory, useParams } from "react-router-dom";
import Popup from "./Popup";
import data from "../data.json";

function Search() {
  let { searched } = useParams();
  const [query, setQuery] = useState(searched || "");
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  const wrapperRef = useRef(null);

  const history = useHistory();

  const handleChange = (e) => {
    setQuery(e.target.value);
    setItems(data.filter((item) => item.text.includes(query.toLowerCase())));
    if (e.target.value.length > 2) {
      setIsOpen(true);
    } else setIsOpen(false);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${query}`);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return (
    <form ref={wrapperRef} className="search">
      <input
        defaultValue={searched}
        value={query}
        onChange={handleChange}
        type="text"
        placeholder="Search free high-resolution photos"
      />
      <button onClick={handleSubmit} className="search_button" type="submit">
        <i className="fas fa-search"></i>
      </button>
      <Popup
        isOpen={isOpen}
        items={items}
        setQuery={setQuery}
        setItems={setItems}
        query={query}
        history={history}
      />
    </form>
  );
}

export default Search;
