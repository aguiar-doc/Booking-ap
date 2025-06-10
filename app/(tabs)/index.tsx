import { Link } from "expo-router";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Colocando imagem de fundo no Index (ImageBackground) */}
      <ImageBackground
        source={require("@/assets/images/mm.jpeg")}
        style={styles.imageBackground}
      >
        <View style={styles.card}>
          <View style={{ width: "25%" }}>
            <Link href="/agendamentos" asChild>
              <Text style={styles.card}>Agendamentos</Text>
            </Link>
          </View>
          <View style={{ width: "25%" }}>
            <Link href="/servicos" asChild>
              <Pressable>
                <Text style={styles.card}>Serviços</Text>
              </Pressable>
            </Link>
          </View>
          <View style={{ width: "25%" }}>
            <Link href="/usuarios" asChild>
              <Text style={styles.card}>Usuarios</Text>
            </Link>
          </View>
          <View style={{ width: "25%" }}>
            <Link href="/" asChild>
              <Pressable>
                <Text style={styles.card}>Agenda</Text>
              </Pressable>
            </Link>
          </View>
        </View>

        <Image
          source={require("@/assets/images/medi.png")}
          style={styles.imageCenter}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  imageBackground: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginTop: 20,
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  imageCenter: {
    marginTop: 260,
    width: 300,
    height: 300,
  },
});
