import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

function Header(){
    return(
    <View style={styles.container}>
        <View>
            <Image style={styles.menu} source={require('../assets/Menu.png')}></Image>
        </View>
        <View>
            <Image style={styles.logo} source={require('../assets/Logo.png')}></Image>
        </View>
        <View>
            <Image style={styles.search} source={require('../assets/Search.png')}></Image>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image style={styles.shoppingBag} source={require('../assets/shoppingBag.png')}></Image>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        borderColor: 'black',
        width: '100%',
    },

    menu: {
        top: 72,
        left: 20,
        width: 30,
        height:33
    },

    logo:{
        top: 68,
        width: 99,
        height: 40,
        alignSelf: 'center'
    },

    
    search:{
        top: 73,
        right: 70,
        width: 30,
        height: 30
    },

    shoppingBag: {
        top: 43,
        right: 20,
        width: 30,
        height: 30
    },


    
})

export default Header;

