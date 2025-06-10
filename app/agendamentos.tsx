import { Agendamentos } from "@/constants/Agendamentos";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/mm.jpeg")}
        style={styles.imageBackground}
      >
        <Text style={styles.title}>Lista de Usuários</Text>
        <FlatList
          data={Agendamentos()}
          keyExtractor={(item) => item.id_agendamento.toString()}
          renderItem={({ item }) => (
            <View >
              <Text style={styles.text}> Id: {item.id_agendamento}</Text>
              <Text style={styles.text}> Data: {item.data}</Text>
              <Text> Hora: {item.hora}</Text>
              <Text> Cliente: {item.nome_cliente}</Text>
              <Text> Profissional: {item.nome_profissional}</Text>
            </View>
          )}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  imageBackground: {},
  text: {
    padding: 15,
    fontSize: 29,
  },
  title: {
    fontSize: 29,
    fontWeight: "bold",
    marginBottom: 10,
    padding: 15,
  },
});
