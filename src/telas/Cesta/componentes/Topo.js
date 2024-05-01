import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Texto from "../../../componentes/Texto";
import topo from "../../../../assets/topo.png";

const widthTela = Dimensions.get('screen').width;

export default function Topo({titulo}) {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        // altura e largura da imagem
        // abaixo: altura / largura * largura da tela
        height: 578 / 768 * widthTela
    },
    titulo: {
        width: "100%",
        position: 'absolute',
        textAlign: 'center',
        color: "#FFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        padding: 16
    },
});