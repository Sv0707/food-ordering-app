import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "@/src/components/Button";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const resetFields = () => {
    setPrice ('')
    setName('')
  }

  const onCreateProduct = () => {
    resetFields()
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={setName}
        value={name}
      />
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        placeholder="9.99"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setPrice}
        value={price}
      />
      <Button text="Create" onPress={onCreateProduct} />
    </View>
  );
};

export default CreateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    marginBottom: 20,
  },
  label: {
    color: "gray",
    fontSize: 16,
    fontWeight: "600",
  },
});
