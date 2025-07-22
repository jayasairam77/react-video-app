import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { ThemeProvider } from "styled-components";
import Trending from './components/Trending'
import SavedVideos from "./components/SavedVideos";
import Gaming from './components/Gaming';
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Layout from './components/Layout'
import VideoDetails from './components/VideoDetails'
import GlobalStyles from './GlobalStyles'
import ThemeContext from './Contexts/ThemeContext'
import UserInteractionContext from './Contexts/UserInteractionContext'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const toggleDarkTheme = () => setDarkTheme(darkTheme => !darkTheme)
  
  const themeObj = darkTheme ? { darkTheme: true } : { darkTheme: false }
  const themeContextValues = {
    darkTheme,
    toggleDarkTheme,
  }

  const [savedVideos, setSavedVideos] = useState([])
  const [userInteraction, setUserInteraction] = useState({})
  
  const alterSavedVideos = (videoData) => {
    setSavedVideos(prev => {
      const isAlreadyPresent = prev.find(eachvideo => eachvideo.id === videoData.id)
      if (isAlreadyPresent) {
        return savedVideos.filter(eachvideo => eachvideo.id !== videoData.id)
      }
      else{
        return [...prev, videoData]
      }
    })
  }

  const alterUserInteraction = (videoId, action) => {
    setUserInteraction( prev => {
      const prevState = prev[videoId] || {like: false, dislike: false, saved: false}
      if (action === 'like'){
        return {...prev, [videoId]: {...prevState,like: !prevState.like, dislike: false }}
      }
      else if (action === 'dislike'){
        return {...prev, [videoId]: {...prevState, dislike: !prevState.dislike, like: false}}
      }
      else if (action === 'save') {
        return {...prev,[videoId]: {...prevState, save: !prevState.save} }
      }
      else {
        return {...prev, [videoId]: prevState}
      }
    })
  }



  const userInteractionContextValues = {
    savedVideos,
    alterSavedVideos,
    userInteraction,
    alterUserInteraction,
  }

  return (
    <ThemeProvider theme={themeObj}>
      <GlobalStyles />
      <ThemeContext.Provider value={themeContextValues}>
        <UserInteractionContext.Provider value={userInteractionContextValues}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
              <Route path='/' element={<Home />} />
              <Route path='/trending' element={<Trending />} />
              <Route path='/gaming' element={<Gaming />} />
              <Route path='/savedvideos' element={<SavedVideos />} />
              <Route path='/video/:id' element={<VideoDetails />} />
            </Route>
          </Routes>
        </UserInteractionContext.Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App