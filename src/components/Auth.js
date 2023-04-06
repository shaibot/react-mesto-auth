import React from "react";
import { Link } from "react-router-dom";

function Auth({ name, title, children, buttonText, onSubmit }) {
  return (
    <>
      <div
        className={`auth auth_type_${name}`}
      >
        <div className="auth__container">
          <h2 className="auth__title">{title}</h2>
          <form className="auth__form" name={`${name}`} onSubmit={onSubmit}>
            {children}
            <button className="auth__button" type="submit">
              {buttonText}
            </button>
          </form>
          <Link to="/sign-up" className="auth__link">Уже зарегистрированы? Войти</Link>
        </div>
      </div>
    </>
  );
}

export default Auth