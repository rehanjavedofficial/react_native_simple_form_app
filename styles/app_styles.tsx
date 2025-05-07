import {StyleSheet} from 'react-native';
import babelConfig from '../babel.config';

const AppStyle = StyleSheet.create({

    text_label: {
        fontSize: 15
    },

    text_heading: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20
    },

    box: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
        padding: 10
    },

    text_input: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 10
    }

});

export default AppStyle;