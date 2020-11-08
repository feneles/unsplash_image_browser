import React from "react";
import "../styles/Popup.css";

function Popup({ items, isOpen, setQuery, setItems, history }) {
  const handleSubmit = (text) => {
    setQuery(text);
    setItems(false);
    history.push(`/search/${text}`);
  };

  console.log(items)

  if (!isOpen) return null;
  return (
    <div className="popup">
      {items &&
        items.map((item, index) => {
          return (
            <div
              onClick={() => handleSubmit(item.text)}
              className="popup_item"
              key={index}
            >
              {item.text}
            </div>
          );
        })}
      {items.length < 1 && <div className="warning">Nothing Found</div>}
    </div>
  );
}

export default Popup;
