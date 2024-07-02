import React from 'react'
import { useContext } from 'react'
import { UserContext, api } from '../context/userContext'

export const HomePage = () => {
  const [userContext, userDispatch] = useContext(UserContext)

  const getRandomMusic = async () => {
    try {
      const res = await api.get('api/songs/songs/random')
      userDispatch(
        {
          type: 'SET_CURRENT_TRACK',
          payload: {
            img: res.data.cover_image,
            genre: res.data.genre,
            artist: res.data.artist,
            title: res.data.title,
            listener: res.data.listener
          }
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={userContext.currentTrack.img} className="spotify-logo" alt="logo" />
        <img src={userContext.currentTrack.img} className="App-logo" alt="capa" />
        {/* <p>
          {genre === ''?
            '' :
            `Gênero: ${genre}`}
        </p> */}
        <p>
          {userContext.currentTrack.title === '' ?
            '' :
            `Título: ${userContext.currentTrack.title} `}

        </p>
        <p>
          {userContext.currentTrack.artist === '' ?
            '' :
            `Artista: ${userContext.currentTrack.artist} `}

        </p>
        <p>
          {userContext.currentTrack.listener === '' ?
            '' :
            `Ouvinte: ${userContext.currentTrack.listener} `}

        </p>
        <button
          className="App-link"
          onClick={getRandomMusic}
          target="_blank"
          rel="noopener noreferrer"
        >
          🔀
        </button>
      </header>
    </div>
  )
}
