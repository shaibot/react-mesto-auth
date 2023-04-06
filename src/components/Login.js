import Auth from "./Auth";

function Login () {
return (
  <Auth
    name="login"
    title="Вход"
    buttonText="Войти"
    // onSubmit={handleSubmit}
  >
    <input
      id="input-login-email"
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

    <span id="input-login-email-error" className="popup__error" />
    <input
      id="input-login-password"
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
    <span id="input-login-password-error" className="popup__error" />
  </Auth>
);
}

export default Login;