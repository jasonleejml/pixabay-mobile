import React, { useContext} from 'react';
import { View, Text, ImageBackground, TextInput } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { AppContext } from '../../AppContext';
import styles from './styles';


const HomeScreen = ({ navigation }) => {
    const { images, setImages, text, setText } = useContext(AppContext);

    return (
        <View>
            {/* HomeScreen Background Image */}
            <ImageBackground source={require('../../../assets/images/home-page.jpg')} style={styles.homeImage}>
                {/* Company Name */}
                <View style={[t.mT24, t.flexRow, t.justifyCenter]}>
                    <Text style={[t.text5xl, t.fontBold, t.textRed400]}>Pro</Text>
                    <Text style={[t.text5xl, t.fontBold, t.textBlue700]}>Photo</Text>
                </View>

                {/* Search Bar */}
                <View style={styles.searchButton}>
                    <Fontisto name="search" size={15} color={'black'} />
                    <TextInput 
                        onChangeText={(text) => setText(text)} 
                        onSubmitEditing={() => { 
                            setImages({ imagesLoaded: false, images: {} })          // This is to ensure that the images is set to an empty object.
                            navigation.navigate('Image List', { screen: 'Home' })   // As soon as the user presses the check button, this will navigate the user to the ImageList screen.
                        }}
                        value={text} 
                        placeholder={"Search Images..."} 
                        style={styles.searchText}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;