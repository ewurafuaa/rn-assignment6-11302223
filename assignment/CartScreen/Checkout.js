import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

const cart =[
    {id: '1', name: 'OFFICE WEAR', description: 'Office wear for you office', price: '$120', image: require('../assets/dress1.png'), remove: require('../assets/remove.png')},
    {id: '2', name: 'LAMEREI', description: 'Recycle Boucle Knit Cardigan Pink', price: '$120', image: require('../assets/dress4.png'), remove: require('../assets/remove.png')},
    {id: '3', name: 'CHURCH WEAR', description: 'Recycle Boucle Knit Cardigan Pink', price: '$120', image: require('../assets/dress3.png'), remove: require('../assets/remove.png')},
]

const CartList = ({item}) => (
    <View style={styles.cartList}>
        <Image source={item.image} style={styles.productImage} />
        <View style={styles.productDetails}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </View>
        <View>
            <TouchableOpacity style={styles.removeButton}>
                <Image source={item.remove} style={styles.removeImage} />
            </TouchableOpacity>
        </View>
    </View>

)
export default function Checkout(){
    
    return(
        <View style={styles.container}>
            {cart.map(item => (
                <CartList key={item.id} item={item}></CartList>
            ))}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFF'
    },

    cartList: {
        flexDirection: 'row',
        padding: 13,
        alignItems: 'center',
        position: 'relative',
        top: 65,
        
    },

    productImage: {
        width: 90,
        height: 120,
        marginRight: 11,
        marginLeft: 29
        
    }, 

    productDetails:{
        flex: 1,
        marginRight: 15
    },

    name: {
        fontSize: 15,
        letterSpacing: 4,
        fontWeight: '400'
    },

    description:{
        fontSize: 15,
        fontWeight: '400',
        color: '#737373'
    },

    price: {
        fontSize: 15,
        color: '#D18035'
    },

    removeButton: {
        position: 'absolute',
        justifyContent:'center',
        alignItems: 'center',
        height: '100%',
        right: 60
    },

    removeImage:{
        width: 20,
        height: 20,
        bottom:14
    },
    
})
