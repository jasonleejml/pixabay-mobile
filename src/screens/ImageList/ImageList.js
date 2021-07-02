import React, { useContext, useEffect } from 'react';
import { View, Image, FlatList, TouchableHighlight, TextInput } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { AppContext } from '../../AppContext';
import styles from './styles';


const ImageList = ({ route, navigation }) => {
    const { images, setImages, text, setText } = useContext(AppContext);

    // This function is fetching all of the images based off of the text inputted in the search bar.
    const fetchImages = async () => {
        let response = await fetch(`https://pixabay.com/api/?key=22283614-0a25e8c828569cfe6f8531e6f&q=${text}&image_type=photo&per_page=100`);
        let imagesData = await response.json();
        setImages({ imagesLoaded: true, images: imagesData })
    }

    // This useEffect will get triggered whenever the images are emptied on line 34.
    useEffect(() => {
        if (!images.imagesLoaded) {
            fetchImages();
        }
    }, [images])

    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchButton}>
                <Fontisto name="search" size={15} color={'black'} />
                <TextInput 
                    onChangeText={(text) => setText(text)} 
                    onSubmitEditing={() => { 
                        setImages({ imagesLoaded: false, images: {} })  // This is emptying the data stored in the images object so that it can be reassigned with images from the new inputted text.
                    }}
                    value={text} 
                    placeholder={"Search Images..."} 
                    style={styles.searchText}
                />
            </View>
            
            {/* Scrollable List of Images */}
            <FlatList 
                data={images.images.hits}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item }) => {
                    return <View>
                        <TouchableHighlight onPress={() => {            // When the user presses on the image, this will navigate the user to that image's detail screen.
                            navigation.navigate('Image Detail', { 
                                itemId: item.id,                        
                                user: item.user,
                                userImage: item.userImageURL,
                                comments: item.comments,
                                likes: item.likes,
                                tags: item.tags,
                                views: item.views,
                                downloads: item.downloads,
                                imageURL: item.webformatURL,
                                imageWidth: item.imageWidth,
                                imageHeight: item.imageHeight
                            })}}>
                            <Image 
                                source={{uri: item.webformatURL}} 
                                style={styles.image} 
                            />
                        </TouchableHighlight>
                    </View>
                }}
            />
        </View>
    )
}

export default ImageList
