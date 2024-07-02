import React from 'react'
import axios from 'axios'
import { createContext, useReducer } from "react"
import PropTypes from 'prop-types'

const initialState = {
    user: null,
    playlist: [],
    currentPlaylist: null,
    currentTrack: {
        img: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png',
        genre: '',
        artist: '',
        title: '',
        listener: ''
    }
}

const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.payload
            }
        case 'SET_CURRENT_PLAYLIST':
            return {
                ...state,
                currentPlaylist: action.payload
            }
        case 'SET_CURRENT_TRACK':
            return {
                ...state,
                currentTrack: action.payload
            }
        default:
            return state
    }
}

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const value = useReducer(userReducer, initialState);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

UserProvider.propTypes = {
    children: PropTypes.node
}

export const api = axios.create({
    baseURL: 'http://localhost:3030/',
    withCredentials: true,
})