import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const WIDTH = Dimensions.get("window").width;

export default function MenuScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Menu</Text>
                    <TouchableOpacity style={styles.searchBox}>
                        <FontAwesome
                            name="search"
                            color='#00092c'
                            size={30}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.profile}
                onPress={() => navigation.navigate('Profile')}>
                    <Image
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                        }}
                        source={{
                            uri: 'https://w0.peakpx.com/wallpaper/792/588/HD-wallpaper-killua-zoldyck-action-anime-art-awesome-blue-hunter-hunterxhunter-killua-zoldyck-lightening.jpg'
                        }}
                        resizeMode='contain'
                    />
                    <View style={{ flexDirection: 'column', marginLeft: 8 }}>
                        <Text style={{ fontSize: 18, color: '#000', fontWeight: '500' }}>Nguyen Minh Duc</Text>
                        <Text style={{ fontSize: 16, color: 'grey', }}>See your personal information</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ margin: 12, borderBottomColor: '#ccc', borderBottomWidth: 1 }}></View>

                <View style={styles.boxList}>
                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <FontAwesome
                            name="comments"
                            color='brown'
                            size={30}
                            style={{ width: 40 }}
                        />
                        <Text style={[styles.boxText, { width: WIDTH * 0.7 }]}>100 few conversations</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <FontAwesome
                            name="handshake-o"
                            color='green'
                            size={30}
                            style={{ width: 40 }}
                        />
                        <Text style={[styles.boxText, { width: WIDTH * 0.7 }]}>1000 communication sentences</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <FontAwesome
                            name="file-text"
                            color='#ff9051'
                            size={30}
                            style={{ width: 40 }}
                        />
                        <Text style={[styles.boxText, { width: WIDTH * 0.7 }]}>1500 common words</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <FontAwesome
                            name="bolt"
                            color='#ff4545'
                            size={30}
                            style={{ width: 40 }}
                        />

                        <Text style={[styles.boxText, { width: WIDTH * 0.7 }]}>360 sentences crazy english</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <FontAwesome
                            name="play"
                            color='#81beff'
                            size={30}
                            style={{ width: 40 }}
                        />
                        <Text style={[styles.boxText, { width: WIDTH * 0.7 }]}>Learn through videos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <FontAwesome
                            name="folder-open-o"
                            color='#0a5d40'
                            size={30}
                            style={{ width: 40 }}
                        />
                        <Text style={[styles.boxText, { width: WIDTH * 0.7 }]}>Bilingual story</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <FontAwesome
                            name="book"
                            color='#724e8c'
                            size={30}
                            style={{ width: 40 }}
                        />
                        <Text style={[styles.boxText, { width: WIDTH * 0.7 }]}>Quotations</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <FontAwesome
                            name="share-alt"
                            color='#6f9e8f'
                            size={30}
                            style={{ width: 40 }}
                        />
                        <Text style={[styles.boxText, { width: WIDTH * 0.7 }]}>Share</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <FontAwesome
                            name="heart"
                            color='#ff4545'
                            size={30}
                            style={{ width: 40 }}
                        />
                        <Text style={[styles.boxText, { width: WIDTH * 0.7 }]}>Evaluate</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <FontAwesome
                            name="cog"
                            size={30}
                            style={{ width: 40 }}
                        />
                        <Text style={[styles.boxText, { width: WIDTH * 0.7 }]}>Setting</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <FontAwesome
                            name="sign-out"
                            color='grey'
                            size={30}
                            style={{ width: 40 }}
                        />
                        <Text style={[styles.boxText, { width: WIDTH * 0.7 }]}>evaluate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, width: "100%", backgroundColor: '#fff' },
    header: {
        paddingTop: 40,
        paddingHorizontal: 20,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    text_header: {
        color: '#00092c',
        fontWeight: 'bold',
        fontSize: 30,
    },
    searchBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        height: 40,
        width: 40,
        borderRadius: 20,
        position: 'absolute',
        top: 40, right: 20
    },
    profile: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 12
    },
    boxText: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 12
    },
    rowBtn: {
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    borderBt: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
})