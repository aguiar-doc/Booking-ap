import { Image, StyleSheet, Platform, Text, FlatList, View, Pressable } from 'react-native';
import { Usuarios } from '@/constants/Usuarios';
import { Link } from 'expo-router';


export default function HomeScreen() {
  return (

    <View style={styles.container}>
      <View style={{flexDirection:'row', marginBottom: 20, backgroundColor:'red', padding: 20}}>
       <View style={{width:'33%'}}>
        <Link href="/agendamentos" asChild>
        <Text style={{color:'white'}}>
          Agendamentos
        </Text>
        </Link>
        </View>
      <View style={{width:'33%'}}>
        <Link href="/servicos" asChild>
      <Pressable>
        <Text style={{color:'white'}}>
        Serviços
        </Text>
      </Pressable>
      </Link>
      </View>
      <View style={{width:'33%'}}>
        <Link href="/usuarios" asChild>
        <Text style={{color:'white'}}>
          Usuarios
        </Text>
        </Link>
        </View>
      </View>
      
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
