import React from "react";
import { Text,Button, TextInput, View } from 'react-native';

const VaildCustom =({lable ,...props}) =>{
    const [field, meta] = useField(props);
    return(
        <>
        <Text>{lable}</Text>
        <TextInput>{...props} {...field}</TextInput>
        </>
    )
}
export default VaildCustom;