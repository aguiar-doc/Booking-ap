import { Image, StyleSheet, Platform, Text, FlatList, View } from 'react-native';
import { Servicos } from '@/constants/Servicos';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>
      <FlatList
        data={Servicos()}
        keyExtractor={(item) => item.id_servico.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text> Id: {item.id_servico}</Text>
            <Text> Serviço: {item.nome_servico}</Text>
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
