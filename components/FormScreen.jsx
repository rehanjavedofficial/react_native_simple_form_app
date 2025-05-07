import React from 'react';
import {View, Text, Button, TextInput, FlatList} from 'react-native';
import AppStyle from '../styles/app_styles';

const FormScreenView = () => {
    return (
        <View style={{margin: 10}}>
            <Text style={AppStyle.text_heading}>Orders</Text>
            <View style={AppStyle.box}>
                <TextInput style={AppStyle.text_input} placeholder='Product Name'></TextInput>
                <TextInput style={AppStyle.text_input} placeholder='Product Price'></TextInput>
                <TextInput style={AppStyle.text_input} placeholder='Product Quantity'></TextInput>
                <Button title='Add Order' color={'green'} />
            </View>

            
        </View>
    );
};

export default FormScreenView;