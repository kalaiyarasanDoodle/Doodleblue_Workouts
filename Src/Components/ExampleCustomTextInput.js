// CustomTextInput.js
import React from 'react';
import { View,Text, TextInput, StyleSheet } from 'react-native';

const ExampleCustomTextInput = ({ label, placeholder, secureTextEntry, onChangeText, value, error }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default ExampleCustomTextInput;
