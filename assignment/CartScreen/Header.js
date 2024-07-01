import { StyleSheet, View, Image, Text} from "react-native";

export default function Header(){
    return(
        <>
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../assets/Logo.png')}></Image>
            <Image style={styles.search} source={require('../assets/Search.png')}></Image>
        </View>

        <View style={styles.checkoutContainer}>
        <Image style={styles.bottomLine} source={require('../assets/bottomLine.png')}></Image>
        <Text style={styles.checkout}>CHECKOUT</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        width: '100%',
    },

    logo:{
        width: 99,
        height: 40,
        top: 60,
        left: 160
    },

    search:{
        width: 30,
        height: 30,
        top: 65,
        right: 30
    },

    checkoutContainer:{
        position: 'relative',
        alignItems: 'center',
        marginTop: 20,
        height: 100,
    },

    checkout: {
        position: 'absolute',
        top: 70,
        right: 103,
        fontSize: 27,
        letterSpacing: 6,
        fontWeight: '300',
        alignSelf: 'center',
    },

    bottomLine: {
        position: 'absolute',
        top: 80,
        width: 200,
        height: 60,
        alignSelf: 'center',
    },
})
