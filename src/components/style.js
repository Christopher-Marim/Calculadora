
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    Button: {
        fontSize: 40,
        color: 'black',
        width: Dimensions.get("window").width / 4,
        height: Dimensions.get("window").width / 4,
        padding: 20,
        backgroundColor: '#FFF',
        textAlign: 'center',
        borderWidth: 1.5,
        borderColor: "black",
        borderRadius:15,
        fontFamily:"serif"

    },
    operadoresButtons:{
        color:"#FFF",
        backgroundColor:"#8FDCF4",
    },
    zero :{
        width:(Dimensions.get("window").width / 4) *2
    },
    triple :{
        width:(Dimensions.get("window").width / 4) *3
    },
    Display: {
        width: Dimensions.get("window").width,
        flex: 1,
        backgroundColor: "#888",
        padding: 20,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        borderRadius:20


    },
    DisplayText: {
        fontSize: 60,
        color: "#FFF",
        paddingBottom:20,
        
        
    }
})