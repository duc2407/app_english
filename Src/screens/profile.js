import React from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function Profile({ navigation: { goBack } }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity style={[styles.back, {}]}
                        onPress={() => goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            color='black'
                            size={30}
                        />
                    </TouchableOpacity>
                <Image
                    style={{
                    width: 120,
                    height: 120,
                    borderRadius: 60,
                }}
                    source={{
                        uri: 'https://w0.peakpx.com/wallpaper/792/588/HD-wallpaper-killua-zoldyck-action-anime-art-awesome-blue-hunter-hunterxhunter-killua-zoldyck-lightening.jpg'
                }}
                    resizeMode='contain'
                />
                <View style={{ flexDirection: 'column'}}>
                    <Text style={{ fontSize: 20, color: '#000', fontWeight: '500', fontWeight: 'bold' }}>Nguyen Minh Duc ( Points: 20/100 )</Text>
                    <Text style={{ fontSize: 16, color: 'grey', }}>Edit profile now</Text>
                </View>
            </View>
            <View style={styles.tested}>
                <Text>You haven't completed a test</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    header: {
        paddingLeft: 40,
        paddingTop: 40,
        backgroundColor: '#ffc3c3',
        paddingBottom: 30,
    },
    back: {
        position: 'absolute',
        backgroundColor: '#ffb0bd',
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        top: 20,
        left: 10,
    },
    tested: {
        paddingTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
})