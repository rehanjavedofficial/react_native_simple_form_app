import React from 'react';
import { View, Text, Button, TextInput, FlatList, Alert, ScrollView } from 'react-native';
import AppStyle from '../styles/app_styles';
import ProductCard, { ProductProps } from './ProductCard';

const FormScreenView = () => {

    let orders_list: ProductProps[] = [];
    orders_list.push({ name: "Rehan", price: 2.5, quantity: 4, onDelete: () => { } });
    orders_list.push({ name: "Rehan", price: 2.5, quantity: 4, onDelete: () => { } });
    orders_list.push({ name: "Rehan", price: 2.5, quantity: 4, onDelete: () => { } });

    return (
        <View style={{ margin: 10 }}>
            <Text style={AppStyle.text_heading}>Orders</Text>
            <View style={AppStyle.box}>
                <TextInput style={AppStyle.text_input} placeholder='Product Name'></TextInput>
                <TextInput style={AppStyle.text_input} placeholder='Product Price'></TextInput>
                <TextInput style={AppStyle.text_input} placeholder='Product Quantity'></TextInput>
                <Button title='Add Order' color={'green'} />
            </View>
            <FlatList data={orders_list} renderItem={({ item }) => {
                return (
                    <ProductCard name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        onDelete={() => Alert.alert('Deleted')} />
                );
            }}></FlatList>
        </View>

    );
};

export default FormScreenView;