import React from 'react'
import { useContext, useState } from "react"
import { UserContext, api } from "../context/userContext"
import { Login } from "../components/login"
import { Register } from "../components/register"
import { useNavigate } from "react-router-dom"

export const AuthPage = () => {
  const [, userDispatch] = useContext(UserContext)

  const [isLogin, setIsLogin] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "username") {
      setUsername(value);
    }
  };

  const handleLogin = async () => {
    try {
      console.log(username, password)
      const res = await api.post('api/users/login', {
        username: email,
        password: password
      })
      userDispatch(
        {
          type: 'SET_USER',
          payload: res.data.user
        }
      )
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleRegister = async () => {
    try {
      console.log(username, password)
      const res = await api.post('api/users', {
        username: email,
        password: password,
        name: username,
        role: 'user'
      })
      userDispatch(
        {
          type: 'SET_USER',
          payload: res.data.user
        }
      )
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleAuthChange = () => {
    setIsLogin(!isLogin)
  }

  return (
    <>
      {isLogin ?
        <Login handleLogin={handleLogin} handleInputChange={handleInputChange} handleAuthChange={handleAuthChange} /> :
        <Register handleRegister={handleRegister} handleInputChange={handleInputChange} handleAuthChange={handleAuthChange} />
      }
    </>

  )
}
