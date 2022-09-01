import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Titulo = (props) => {

    const styles = StyleSheet.create({
        titulo: {
            color: '#FFF',
            fontWeight: 'bold',
            fontSize: '36px',
            marginVertical: '40px',
            marginHorizontal: '40px'
        }
    })

    return(
        <View>
            <Text style={styles.titulo}>{props.titulo}</Text>
        </View>

    )
}

export default Titulo;