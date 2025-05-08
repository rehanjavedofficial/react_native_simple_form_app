import React, { useState, useRef } from 'react';
import { View, Text, Button, TextInput, FlatList, Alert, ScrollView } from 'react-native';
import AppStyle from '../styles/app_styles';
import ProductCard, { ProductProps } from './ProductCard';

const FormScreenView = () => {

    const idCounter = useRef(1);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [orders_list, setOrderList] = useState<ProductProps[]>([]);

    function placeOrder() {
        if (!name || !price || !quantity) {
            Alert.alert("No any field should be empty!");
            return;
        } else if (!validate(parseFloat(price), "price") || !validate(parseInt(quantity), "quantity")) {
            return;
        }
        let order: ProductProps = { id: idCounter.current, name, price: parseFloat(price), quantity: parseInt(quantity), onDelete: () => {}};
        idCounter.current++;
        Alert.alert(`id: ${idCounter.current}`)
        setOrderList([...orders_list, order]);
        setName('');
        setPrice('');
        setQuantity('');
    }

    function validate(value: number, name: string): boolean {
        if (isNaN(value) || value < 0) {
            Alert.alert(`${name} should be valid positive number!`);
            return false;
        }
        return true;
    }

    return (
        <View style={{ margin: 10 }}>
            <Text style={AppStyle.text_heading}>Orders</Text>
            <View style={AppStyle.box}>
                <TextInput style={AppStyle.text_input} value={name} onChangeText={setName} placeholder='Product Name'></TextInput>
                <TextInput style={AppStyle.text_input} keyboardType='numeric' value={price} onChangeText={setPrice} placeholder='Product Price'></TextInput>
                <TextInput style={AppStyle.text_input} keyboardType='numeric' value={quantity} onChangeText={setQuantity} placeholder='Product Quantity'></TextInput>
                <Button title='Add Order' color={'green'} onPress={placeOrder} />
            </View>
            <FlatList data={orders_list} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => {
                return (
                    <ProductCard
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        onDelete={() => setOrderList(prev => prev.filter(x => x.id != item.id))} 
                    />
                );
            }}></FlatList>
        </View>

    );
};

export default FormScreenView;