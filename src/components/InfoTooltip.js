import React, { useEffect, useState } from "react";
import imgSucces from '../images/successful-registration.svg'
import imgFault from '../images/fault.svg'

function InfoTooltip ({ isOpen, onClose, status }) {
const [content, setContent] = useState({image: '', text: ''})

  useEffect(() => {
if (status) {
  setContent({image: imgSucces, text: 'Вы успешно зарегистрировались!'})
}
if (!status) {
  setContent({image: imgFault, text: 'Что-то пошло не так! Попробуйте еще раз.'})
}
  }, [status])
        return (
          <>
            <div
              className={`popup ${
                isOpen ? "popup_is-opened" : ""
              }`}
            >
              <div className="popup__container popup__container_type_tooltip">
                <button className="popup__close" onClick={onClose} />
                <img className="popup__notification-img" src={content.image} alt={content.text}/>
                <h2 className="popup__title popup__title_type_tooltip">{content.text}</h2>                
              </div>
            </div>
          </>
        );
}

export default InfoTooltip