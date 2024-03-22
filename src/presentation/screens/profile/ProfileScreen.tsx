import { Pressable, Text, View } from "react-native"
import { styles } from "../../../config"
import { useProfileStore } from "../../store/profile-store"

export const ProfileScreen = () => {

    const name = useProfileStore( state => state.name);// solo se dispara cuando el nombre cambia
    const email = useProfileStore( state => state.email);// solo se dispara cuando el email cambia
    const changeProfile = useProfileStore( state => state.changeProfile); 
   
    return (
        <View style = { styles.container }>
            <Text style = {styles.title}>{ name }</Text>
            <Text style = {styles.title}>{ email }</Text>

        <Pressable 
            style = {styles.primaryBottom} 
            onPress = {() => useProfileStore.setState({name: 'james'})}
        >
            <Text> Cambiar nombre</Text>
        </Pressable>

        <Pressable 
            style = {styles.primaryBottom} 
            onPress = {() => useProfileStore.setState({email: 'jamessarmiento@gmail.com.co'})}
        >
            <Text> Cambiar email</Text>
        </Pressable>

        <Pressable 
            style = {styles.primaryBottom} 
            onPress = {() => changeProfile('John Doe', 'Joh.doe@gmail.com.co' )}
        >
            <Text> Regresar a John</Text>
        </Pressable>

        </View>
    )
}
