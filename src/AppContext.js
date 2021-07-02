import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [images, setImages] = useState({ imagesLoaded: false, images: {} });
    const [text, setText] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [likedImages, setLikedImages] = useState([]);

    return (
        <AppContext.Provider value={{images, setImages, text, setText, favorites, setFavorites, likedImages, setLikedImages}}>
            {children}
        </AppContext.Provider>
    )
}