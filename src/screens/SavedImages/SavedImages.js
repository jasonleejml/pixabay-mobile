import React, { useContext } from 'react';
import { View, Text, Image, FlatList, TouchableHighlight } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { t } from 'react-native-tailwindcss';

import { AppContext } from '../../AppContext';
import styles from './styles';


const SavedImages = ({ navigation }) => {
    const isFocused = useIsFocused();               // This is to make sure that this page is re-rendered.
    const { favorites } = useContext(AppContext);

    return (
        <View style={styles.container}>
            {/* Title of the Favorites Screen */}
            <View style={styles.title}>
                <Text style={[t.textLg, t.fontBold]}>Favorites</Text>
            </View>

            {/* List of Favorited Images */}
            <FlatList 
                data={favorites}
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

export default SavedImages
