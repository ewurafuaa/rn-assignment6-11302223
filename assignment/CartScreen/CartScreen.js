import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import Checkout from "./Checkout";

export default function CartScreen(){
    return(
        <View style={styles.container}>
            <ScrollView styles={styles.scroll}>
            <Header/>
            <Checkout/>
            </ScrollView>
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFFFF'
    },

    scroll: {
        flex: 1,
    }
})
