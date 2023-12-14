import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Dimensions, Image, } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const screenWidth = Dimensions.get('window').width;
const buttonWidth = screenWidth * 0.25;


export default class hubcenter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fraseAtual: '',
      img: require('./src/b-fechado.png'),
      biscoitoFechado: true,
      textoBotao: 'Abrir Biscoito'
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'A vida é uma pintura, e você é o artista. Pinte com cores ousadas.',
      'Os sonhos são as sementes da realidade.',
      'Sorria para o mundo, e o mundo sorrirá de volta.',
      'Cada passo para frente é um progresso, não importa quão pequeno.',
      'A paciência é uma virtude que conquista todos os obstáculos.',
      'A alegria de fazer o bem é a única felicidade verdadeira.',
      'O otimismo é a fé que leva ao sucesso.',
      'A gratidão é a memória do coração.',
      'O amor é a única força capaz de transformar um inimigo em amigo.',
      'A vida é um eco; você recebe o que emite.',
      'A simplicidade é a chave para a verdadeira elegância.',
      'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
      'A esperança é o sonho do homem acordado.',
      'Nada é impossível para um coração cheio de vontade.',
      'A criatividade é a inteligência se divertindo.',
      'A felicidade não é algo pronto. Vem de suas próprias ações.',
      'O medo é o pai da coragem e o avô do sucesso.',
      'Cada momento é uma nova oportunidade de ser feliz.',
      'A bondade é a linguagem que o surdo pode ouvir e o cego pode ver.',
      'A vida é um eco. Se você não está gostando do que está recebendo, observe o que está emitindo.',
      'A beleza de pequenos gestos faz um grande impacto.',
      'O segredo da mudança é focar toda a sua energia não em lutar contra o velho, mas em construir o novo.',
      'A verdadeira sabedoria está em reconhecer a própria ignorância.',
      'A felicidade não é ter o que você quer, mas querer o que você tem.',
      'As dificuldades preparam pessoas comuns para destinos extraordinários.',
      'A vida começa onde termina sua zona de conforto.',
      'O sucesso não é o quanto você ganha, mas o quanto você ajuda.',
      'Pequenas ações, realizadas consistentemente, criam grandes mudanças.',
      'O segredo para seguir em frente é começar.',
      'Não espere o momento perfeito, pegue o momento e faça-o perfeito.',
      'A vida é 10% o que acontece com você e 90% como você reage a isso.',
      'Sonhe grande e ouse falhar.',
      'A arte de ser feliz é apreciar e gostar do que se tem, em vez do que não se tem.',
      'A coragem não é a ausência de medo, mas a vitória sobre ele.',
      'Um sorriso é uma curva que endireita tudo.',
      'A vida é uma viagem, e se você se apaixona pela jornada, você estará apaixonado para sempre.',
      'A vida é uma série de experiências, cada uma das quais nos torna maiores.',
      'A paz começa com um sorriso.',
      'A felicidade é quando o que você pensa, o que você diz e o que você faz estão em harmonia.',
      'O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor momento é agora.',
      'A vida é um desafio, enfrente-o.',
      'A mudança é difícil no início, bagunçada no meio e linda no final.',
      'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.',
      'A vida é o que acontece enquanto você está ocupado fazendo outros planos.',
      'Você nunca é velho demais para estabelecer outro objetivo ou sonhar um novo sonho.',
      'Seja a mudança que você deseja ver no mundo.',
      'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.',
      'Não sonhe sua vida, viva seu sonho.',
      'O único limite para a altura de seus resultados é a profundidade de sua dedicação.',
      'O sucesso não é quanto dinheiro você ganha, mas a diferença que você faz na vida das pessoas.',
      'Faça o que você pode, com o que você tem, onde você estiver.',
      'Seja você mesmo; todos os outros já existem.',
      'Você não tem que ser grande para começar, mas tem que começar para ser grande.',
      'A persistência é o caminho do êxito.',
      'A vida é uma aventura ousada ou nada.',
      'Acredite que você pode, e você já está no meio do caminho.',
      'O segredo do sucesso é a constância do propósito.',
      'Quando tudo parece ir contra você, lembre-se de que o avião decola contra o vento, não com ele.',
      'A vida não é medida pelo número de respirações que tomamos, mas pelos momentos que nos tiram o fôlego.',
      'A maior glória não é nunca cair, mas levantar-se sempre depois de uma queda.',
      'A persistência é o veículo do êxito.',
      'O sucesso é a soma de pequenos esforços, repetidos dia sim, dia não.',
      'O sucesso é tropeçar de fracasso em fracasso sem perder o entusiasmo.',
      'A felicidade é a única coisa que se multiplica quando você a compartilha.',
      'A vida é uma longa lição em humildade.',
      'A vida é o que acontece quando você está ocupado fazendo planos.',
      'A vida é como andar de bicicleta. Para manter o equilíbrio, você deve continuar se movendo.',
      'A vida é realmente simples, mas insistimos em torná-la complicada.',
      'Não é o mais forte da espécie que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças.',
      'A vida é uma série de colisões naturais e espontâneas. Não se preocupe em evitar ou planejar essas colisões; o plano é ser mais resiliente quando elas ocorrem.',
      'A vida é o que acontece enquanto você está ocupado fazendo outros planos.',
      'A vida é como uma câmera. Foque no que é importante, capture os bons momentos, desenvolva-se a partir dos negativos e, se as coisas não derem certo, tire outra foto.',
      'A vida é como andar de bicicleta. Para manter o equilíbrio, você deve continuar se movendo.',
      'A vida é feita de escolhas. Quando você dá um passo à frente, inevitavelmente algo fica para trás.',
      'A vida é muito curta para perder tempo odiando alguém.',
      'Não viva para que a sua presença seja notada, mas para que a sua falta seja sentida.',
      'Você não vive uma vez. Você vive todos os dias. Você morre uma vez.',
      'A vida não é sobre encontrar a si mesmo. A vida é sobre criar a si mesmo.',
      'A vida é como um espelho: sorria para ela e ela sorri de volta para você.',
      'Não conte os dias, faça os dias contarem.',
      'A vida é uma arte, e você é o pintor. Pinte com as cores mais brilhantes.',
      'Sonhar, afinal, é uma forma de planejar.',
      'Não siga onde o caminho possa levar. Vá onde não há caminho e deixe um rastro.'
    ];

  }

  quebraBiscoito() {

    if (this.state.biscoitoFechado == true) {

      let n = Math.floor(Math.random() * this.frases.length);

      this.setState({
        fraseAtual: this.frases[n],
        img: require('./src/b-aberto.png'),
        biscoitoFechado: false,
        textoBotao: 'Novo Biscoito'
      });

    } else {

      this.setState({
        fraseAtual: '',
        img: require('./src/b-fechado.png'),
        biscoitoFechado: true,
        textoBotao: 'Abrir Biscoito'
      });

    }

  }

  render() {
    return (

      <View style={styles.container}>

        <Image source={this.state.img} resizeMode="contain"></Image>

        <Text style={styles.texto}>
          {this.state.fraseAtual}
        </Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View>
            <Text style={styles.botaoTexto}>
              {this.state.textoBotao}
            </Text>
          </View>
        </TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    margin: 10,
  },
  input: {
    marginTop: 50,
    height: 45,
    borderWidth: 1,
    borderColor: '#eee',
    marginHorizontal: 10,
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    color: '#eee', width: screenWidth * 0.8,
    alignSelf: 'center',
    textAlign: 'center',
  },

  texto: {
    textAlign: 'center',
    fontSize: 18,
    paddingBottom: 50,
    paddingTop: 50,
    color: '#eee',
    fontWeight: 'bold'
  },
  botao: {
    margin: 30,
    width: buttonWidth,
    height: buttonWidth,
    backgroundColor: 'transparent',
    borderColor: '#eee',
    borderWidth: 1,
    color: '#eee',
    padding: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#eee',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

/*
flexDirection: 'column',
justifyContent:'center'
*/ 