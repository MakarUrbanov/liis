import React, { useState } from 'react'

const LoginPage: React.FC = () => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLogin(e.currentTarget.value)

  const handlePass = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value)

  function passCheck(text: string) {
    const cyrillicPattern = /[а-яА-Я]+/g
    const cyrillicCheck = text.match(cyrillicPattern)

    if (text.length < 8 && cyrillicCheck) {
      return setPasswordError(
        'Пароль слишком короткий и не должен содержать кириллицу'
      )
    }

    if (text.length < 8) {
      return setPasswordError(
        'Пароль слишком короткий. Минимальная длина 8 символов'
      )
    }

    if (cyrillicCheck) {
      return setPasswordError('Пароль не должен содержать кириллицу')
    }

    return true
  }

  function loginAction(e: React.FormEvent, login: string, pass: string) {
    e.preventDefault()
    setPasswordError('')

    if (passCheck(pass)) {
      return console.log('TRUE')
    }

    console.log('false')
  }

  return (
    <div className="login__body">
      <div className="login__field">
        <h1>Simple Flight Check</h1>
        <form onSubmit={(e) => loginAction(e, login, password)}>
          <div className="login__input-wrapper">
            <span>Логин:</span>
            <input
              type="email"
              value={login}
              onChange={(e) => handleLogin(e)}
            />
          </div>
          <div className="login__input-wrapper">
            <span>Пароль:</span>
            <input
              style={{ border: passwordError ? '1px solid red' : '' }}
              type="password"
              value={password}
              onChange={(e) => handlePass(e)}
            />
            {passwordError ? <p>{passwordError}</p> : ''}
          </div>
          <div className="login__button">
            <button>Войти</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
