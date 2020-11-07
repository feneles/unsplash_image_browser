import React from 'react'
import '../styles/Popup.css'


function Popup({items, isOpen, setQuery, setItems, history}) {

  const handleSubmit = (text) => {
setQuery(text)
setItems(false)
history.push(`/search/${text}`)

  }

  if(!isOpen) return null;
  return (
    <div className="popup">
    
        {items && 
          items.map((item, index) => {
            return (
              <div onClick={() => handleSubmit(item.text)} className="popup_item" key={index}>
                {item.text}
              </div>
            )
          })
        }
        {!items && <p className="warning">Nothing Found</p>}
      </div>
  
  )
}

export default Popup
