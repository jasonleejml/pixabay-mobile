import React, { useContext, useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { t } from 'react-native-tailwindcss';

import { AppContext } from '../../AppContext';
import styles from './styles';


const ImageDetail = ({ route, navigation }) => {
    const { setText, images, setImages, favorites, setFavorites, likedImages, setLikedImages } = useContext(AppContext);
    const { itemId, user, userImage, comments, likes, tags, views, downloads, imageURL, imageHeight, imageWidth } = route.params;     // These were passed down as props from the ImageList screen when the user pressed on the image.

    const [ heart, setHeart ] = useState('heart-alt');
    const [ heartColor, setHeartColor] = useState('black');
    const [ like, setLike ] = useState('black');

    // This is to convert the string 'Tags' and separate them into an array so that we can map through it on line 88.
    const tagsArray = tags.split(', ');

    // This logic is in-place to toggle when the favorite button is active or not. It also adds and removes the image from the favorites array to keep track of the toggling.
    const onPressHeart = () => {
        if (heart === "heart-alt") {
            setHeart("heart");
            setHeartColor("red");

            const favoriteImage = images.images.hits.filter(image => {
                return image.id === itemId
            })
            favorites.push(favoriteImage[0]);
            setFavorites(favorites);
        } else {
            setHeart("heart-alt");
            setHeartColor("black");
            
            const removeImage = favorites.map(image => image.id).indexOf(itemId);
            favorites.splice(removeImage, 1);
            setFavorites(favorites);
        }
    }

    // This logic is in-place to toggle when the like button is active or not. It also adds and removes the image from the likedImages array to keep track of the toggling.
    const onPressLike = () => {
        if (like === 'black') {
            setLike('#1886b5');

            const likedImage = images.images.hits.filter(image => {
                return image.id === itemId
            })
            likedImages.push(likedImage[0]);
            setLikedImages(likedImages);
        } else {
            setLike('black');

            const removeLike = likedImages.map(image => image.id).indexOf(itemId);
            likedImages.splice(removeLike, 1);
            setLikedImages(likedImages);
        }
    }

    // On mount, this useEffect will be invoked to correctly toggle the favorite button & the link button.
    useEffect(() => {
        if (favorites.filter(image => image.id === itemId).length > 0) {
            setHeart("heart");
            setHeartColor("red");
        }

        if (likedImages.filter(image => image.id === itemId).length > 0) {
            setLike('#1886b5');
        }
    })

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Image Selected by User */}
            <Image source={{uri: imageURL}} style={styles.image} />

            {/* Different Buttons that the User can Select */}
            <View style={styles.buttonContainer}>
                <Fontisto name="like" size={18} color={like} style={styles.button} onPress={() => onPressLike()}/>
                <Fontisto name={heart} size={18} color={heartColor} style={styles.button} onPress={() => onPressHeart()}/>
                <Fontisto name="share-a" size={18} color={'black'} style={styles.button}/>
                <Fontisto name="more-v-a" size={18} color={'black'} style={styles.button}/>
                <Fontisto name="download" size={18} color={'white'} style={styles.buttonDownload}/>
            </View>

            {/* Scrollable View to See Information about the User & the Tags Affiliated with the Image */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.userContainer}>

                    <Image source={{uri: userImage}} style={styles.userImage} />
                    <Text style={[t.textBase, t.fontBold, t.mL3, t.mR3, t.wAuto]}>{user}</Text>
                    <View style={styles.tagsList}>
                        {tagsArray.map((tag, index) => {
                            return <Pressable 
                            key={index} 
                            style={styles.tag}
                            onPress={() => {
                                setText(tag)
                                setImages({ imagesLoaded: false, images: {} })
                                navigation.navigate('Image List', { screen: 'Home' })           // As soon as the user presses one of the tags, this will navigate the user back to the ImageList screen and will show images correlated with that tag.
                            }}>
                                <Text style={{textTransform: 'capitalize'}}>{tag}</Text>
                            </Pressable>
                        })}
                    </View>
                </View>
            </ScrollView>
            
            {/* Scrollable View to See Additional Information about the Image */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.statsContainer}>
                    <View style={styles.stats}>
                        <Text style={[t.textBase, t.fontBold, t.pB2]}>{likes}</Text>
                        <Text style={[t.textSm, t.fontBold, t.textGray500]}>Likes</Text>
                    </View>
                    <View style={styles.stats}>
                        <Text style={[t.textBase, t.fontBold, t.pB2]}>{views}</Text>
                        <Text style={[t.textSm, t.fontBold, t.textGray500]}>Views</Text>
                    </View>
                    <View style={styles.stats}>
                        <Text style={[t.textBase, t.fontBold, t.pB2]}>{downloads}</Text>
                        <Text style={[t.textSm, t.fontBold, t.textGray500]}>Downloads</Text>
                    </View>
                    <View style={styles.stats}>
                        <Text style={[t.textBase, t.fontBold, t.pB2]}>{imageWidth} x {imageHeight}</Text>
                        <Text style={[t.textSm, t.fontBold, t.textGray500]}>Resolution</Text>
                    </View>
                    <View style={styles.stats}>
                        <Text style={[t.textBase, t.fontBold, t.pB2]}>{comments}</Text>
                        <Text style={[t.textSm, t.fontBold, t.textGray500]}>Comments</Text>
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
          
    )
}

export default ImageDetail
