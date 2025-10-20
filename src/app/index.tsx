import { Pressable, Text, View } from 'react-native';
import Navbar from "../components/navbar";

export default function Index() {
    return <View>
        <Text>Olá mundo</Text>
        <Pressable>Clique aqui!</Pressable>
        <Navbar />
    </View>
}