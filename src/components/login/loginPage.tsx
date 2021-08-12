import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const LoginPage: React.FC = () => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const dispatch = useDispatch()

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
      const departure = '2021-08-20'
      getFlights(departure)
      return dispatch({ type: 'LOGIN', login: '1' })
    }
    setPassword('')
  }

  async function getFlights(startDate: string) {
    try {
      const flights = await axios({
        url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/RU/RUB/en-EN/SVO-sky/JFK-sky/${startDate}`,
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '0a0a124bdbmsha5a636763687650p1112f0jsn84037de75702',
        },
      })
      console.log(flights)
    } catch (error) {
      console.log(error)
    }
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
