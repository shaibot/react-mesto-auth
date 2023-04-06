import React from "react";

function InfoTooltip ({ name, isOpen, onClose, title }) {
        return (
          <>
            <div
              className={`popup ${
                isOpen ? "popup_is-opened" : ""
              }`}
            >
              <div className="popup__container">
                <button className="popup__close" onClick={onClose} />
                <image className={`popup__notification_type_${name}`}/>
                <h2 className="popup__title">{title}</h2>                
              </div>
            </div>
          </>
        );
}

export default InfoTooltip