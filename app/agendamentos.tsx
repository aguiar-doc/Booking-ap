import { Image, StyleSheet, Platform, Text, FlatList, View } from 'react-native';
import { Agendamentos } from '@/constants/Agendamentos';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>
      <FlatList
        data={Agendamentos()}
        keyExtractor={(item) => item.id_agendamento.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text> Id: {item.id_agendamento}</Text>
            <Text> Data: {item.data}</Text>
            <Text> Hora: {item.hora}</Text>
            <Text> Cliente: {item.nome_cliente}</Text>
            <Text> Profissional: {item.nome_profissional}</Text>
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
    backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: 'White',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  
  }
});
