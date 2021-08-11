import React from 'react'

const LoginPage: React.FC = () => {
  return (
    <div className="login__body">
      <div className="login__field">
        <h1>Simple Flight Check</h1>
        <div className="login__input-wrapper">
          <span>Логин:</span>
          <input />
        </div>
        <div className="login__input-wrapper">
          <span>Пароль:</span>
          <input />
        </div>
        <div className="login__button">
          <button>Войти</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
