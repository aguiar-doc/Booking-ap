import { Usuarios } from "@/constants/Usuarios";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Button, Image, Platform, Text, TextInput, View } from "react-native";

export default function CadastroUsuario() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    celular: "",
    password: "",
    documento: "",
    id_grupo: "cliente",
    cargo: "medico",
    status: "ativo",
    data_nascimento: new Date(),
    avatar: null,
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleChooseAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setForm({ ...form });
    }
  };

  const handleDateChange = (event: any) => {
    const currentDate = form.data_nascimento;
    setShowDatePicker(Platform.OS === "ios");
    setForm({ ...form, data_nascimento: currentDate });
  };

  const handleSubmit = () => {
    console.log(form);
    // Aqui você pode enviar o formulário para o servidor
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={form.email}
        keyboardType="email-address"
        onChangeText={(text) => setForm({ ...form, email: text })}
      />

      <Text>Celular</Text>
      <TextInput
        style={styles.input}
        value={form.celular}
        keyboardType="phone-pad"
        onChangeText={(text) => setForm({ ...form, celular: text })}
      />

      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        value={form.password}
        secureTextEntry
        onChangeText={(text) => setForm({ ...form, password: text })}
      />

      <Text>Documento</Text>
      <TextInput
        style={styles.input}
        value={form.documento}
        keyboardType="numeric"
        onChangeText={(text) => setForm({ ...form, documento: text })}
      />

      <Text>Avatar</Text>
      <Button title="Escolher Avatar" onPress={handleChooseAvatar} />
      {form.avatar && (
        <Image
          source={{ uri: form.avatar }}
          style={{ width: 100, height: 100, marginVertical: 10 }}
        />
      )}

      {/* METODO .map() */}

      <Text>Usuario</Text>
      <Picker
        selectedValue={form.cargo}
        onValueChange={(itemValue) => setForm({ ...form, cargo: itemValue })}
        style={styles.input}
      >
        {Usuarios().map((cliente) => (
          <Picker.Item label={cliente.nome} value={cliente.nome} />
        ))}
      </Picker>

      <Text>Cargo</Text>
      <Picker
        selectedValue={form.cargo}
        onValueChange={(itemValue) => setForm({ ...form, cargo: itemValue })}
        style={styles.input}
      >
        <Picker.Item label="Cabeleireiro" value="cabeleiro" />
        <Picker.Item label="Manicure" value="manicure" />
        <Picker.Item label="Pedicure" value="pedicure" />
      </Picker>

      <Text>Status</Text>
      <Picker
        selectedValue={form.status}
        onValueChange={(itemValue) => setForm({ ...form, status: itemValue })}
        style={styles.input}
      >
        <Picker.Item label="Ativo" value="ativo" />
        <Picker.Item label="Inativo" value="inativo" />
      </Picker>

      <Text>Data de Nascimento</Text>
      <Button title="Selecionar Data" onPress={() => setShowDatePicker(true)} />
      <Text>{form.data_nascimento.toLocaleDateString()}</Text>
      {showDatePicker && (
        <DateTimePicker
          value={form.data_nascimento}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
};
