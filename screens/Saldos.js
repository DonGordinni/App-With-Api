import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

import Titulo from '../components/Titulo.js';
import Saldo from '../components/Saldo.js';
import api from '../utils/Api.js';
import Adicionar from '../components/Adicionar.js'

const Saldos = ({ route, navigation }) => {
    const [saldos, setSaldos] = useState([]);

    const ListarSaldos = async () => {
        try {
            const resultado = await api.get('usuarios/' + route.params.id + "/saldos");
            if (resultado !== null) {
                setSaldos(resultado.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const SomarSaldos = (...saldos) => {
        const somados = [];
        if (typeof saldos[0] === 'undefined') {
            return 0;
        }

        saldos[0].map((val) => { somados.push(val.valor) });

        try {
            if (somados !== null) {
                return somados.reduce((acumulador, valor) => acumulador + valor);

            } else {
                return 0;
            }
        } catch (error) {
            return 0;
        }
    }


    useEffect(() => {
        ListarSaldos();
    }, []);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#6840F5',
            padding: '0px 30px'
        },
        lista: {
            flex: 1,
            backgroundColor: '#FFF',
            padding: '30px',
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px'
        },
        nomeCliente: {
            color: '#FFF',
            marginHorizontal: '40px'
        },
        total: {
            color: '#FFF',
            fontWeight: 'bold',
            fontSize: '28px',
            marginVertical: '40px',
            marginHorizontal: '40px'
        }

    })



    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:"space-between"}}>
                <Titulo titulo="Saldos"/>
                <Adicionar tipo="Saldo" navigation={navigation} idUsuario={route.params.id}/>

                <Text style={{ color: "#FFF" }}>{route.params.nome}</Text>

                <Text style={styles.total}>TOTAL : R$ {SomarSaldos(saldos)}</Text>
            </View>
            <View style={styles.lista}>
                {saldos.map((item) => <Saldo key={item.id} id={item.id} idCliente={route.params.id} nome={route.params.nome} valor={item.valor} navigation={navigation} />)}
            </View>
            <View>
                <Button title="Voltar para Clientes" color="#6840f5" onPress={()=>{navigation.navigate("Clientes")}}/>
            </View>
        </View>
    );


}
export default Saldos;