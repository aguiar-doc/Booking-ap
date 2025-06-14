import { Usuarios } from "@/constants/Usuarios";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>
      <FlatList
        data={Usuarios()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text> Id: {item.id}</Text>
            <Text> Nome: {item.nome}</Text>
            <Text> Nome do Grupo: {item.nome_grupo}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  card: {
    backgroundColor: "White",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
