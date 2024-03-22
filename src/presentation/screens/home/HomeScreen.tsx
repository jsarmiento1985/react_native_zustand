import { Text, View } from "react-native"
import { styles } from "../../../config/"
import { useProfileStore } from "../../store/profile-store";
import { useCounterStore } from "../../store/counter-store";

export const HomeScreen = () => {


    const name = useProfileStore( state => state.name);// solo se dispara cuando el nombre cambia
    const email = useProfileStore( state => state.email);// solo se dispara cuando el email cambia

    const count = useCounterStore (state => state.count)


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{email}</Text>
            <Text style={styles.title}>Count: {count}</Text>
        </View>
    )
}
