import React from 'react';
import {View, Button, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import api from '../utils/Api';

const Cliente = (props) => {

    const deletar = (id) =>{
        api.delete('usuarios/'+id).then(()=>props.navigation.push('Clientes'))

    }

    const styles = StyleSheet.create({
        card: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '12px',
            marginVertical: '10px',
            paddingVertical: '20px',
            // propriedades de sombra
            shadowColor: "3F3D46",
            ShadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.48,
    
            elevation: 5,
        },
        lixeira: {
            width: 20,
            height: 20
        },
        clienteBox: {
            backgroundColor: '#F56A4D',
            paddingHorizontal: '20px',
            paddingVertical: '20px',
            borderRadius: '12px'
        }
        
    });

    return(
        <View style={styles.card}>
            <View style={styles.clienteBox}>
                <Text style={{textTransform: 'uppercase', color: '#FFF',fontWeight: 'bold'}}>{props.inicial}</Text>
            </View>
                <TouchableOpacity onPress={() => {props.navigation.push('Saldos', {id : props.id, nome : props.nome}) }}>
                <Text>{props.nome}</Text>
                <Text style={{color: '#F56A4D', fontWeight: 'bold', fontSize: '18px'}}>R$ {props.valorTotal}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{deletar(props.id)}}>
                <Image style={styles.lixeira} source={{uri:'https://p.kindpng.com/picc/s/200-2009551_full-trash-icon-hd-png-download.png'}}/>
            </TouchableOpacity>
        </View>
    )
}

export default Cliente;