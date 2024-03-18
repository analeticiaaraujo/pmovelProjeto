import { View, Text } from "react-native";

const Gato = ( {nome, idade} ) => {
    return(
        <View>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
        </View>
    )
}

export default Gato