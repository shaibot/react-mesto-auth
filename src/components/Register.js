import Auth from "./Auth";

function Register () {
return (
  <Auth
    name="register"
    title="Регистрация"
    buttonText="Зарегистрироваться"
    // onSubmit={handleSubmit}
  >
    <input
      id="input-register-email"
      className="auth__input auth__input_name"
      // name="name"
      type="text"
      placeholder="Email"
      minLength={2}
      maxLength={40}
      required
      // value={name || ''}
      // onChange={handleChangeName}
    />

    <span id="input-register-email-error" className="popup__error" />
    <input
      id="input-register-password"
      // name="info"
      type="text"
      className="auth__input auth__input_password"
      placeholder="Пароль"
      minLength={2}
      maxLength={200}
      required
      // value={description || ''}
      // onChange={handleChangeDescription}
    />
    <span id="input-register-password-error" className="popup__error" />
  </Auth>
);
}

export default Register;