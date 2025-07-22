import React from 'react'

const UserInteractionContext = React.createContext({
    savedVideos: [],
    alterSavedVidoes: () => {},
    userInteraction: {},
    alterUserInteraction: () => {}, 
})

export default UserInteractionContext