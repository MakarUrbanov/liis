import React, { useState } from 'react'
import LoginPage from '@components/login/loginPage'
import ListPage from '@components/list/listPage'
import { useSelector } from 'react-redux'

interface IRootReducer {
  isAuth: string
}

function App() {
  const isLogin = useSelector((state: IRootReducer) => state.isAuth)
  return <div className="app">{+isLogin ? <ListPage /> : <LoginPage />}</div>
}

export default App
