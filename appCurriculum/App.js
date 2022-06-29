
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/foto.jpg';
import Card from './components/Card';



const App = () = {

  function handleRedeSocial(rede_social) {

    switch (rede_social) {

      case 'linkedin':
      Alert.alert('Linkedin', 'https://www.linkedin.com/in/rosanatsf')
      break
      case 'github':
      Alert.alert('Github', 'https://github.com/RosanaTSF')
      break
    }
  }

return (
  <>

    <View style={style.page}>

      <View style={style.container_cabecalho}>
        <Image source={foto} style={style.foto} />
        <Text style={style.nome}>Rosana TSF</Text>
        <Text style={style.funcao}>Desenvolvedora Web | Advogada</Text>
        <View style={style.redes_sociais}>

          <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Icon name="github" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
            <Icon name="linkedin" size={30} />
          </TouchableOpacity>

        </View>
      </View>

      <Card titulo="Formação Academica">
        <Text style={style.card_content_text}>UNICAP</Text>
        <Text style={style.card_content_text}>COLÉGIO DE APLICAÇÃO</Text>
      </Card>
      <Card titulo="Experiencias Profissionais">
        <Text style={style.card_content_text}>R. Souza Advocacia</Text>
        <Text style={style.card_content_text}>Ministério Público</Text>
        <Text style={style.card_content_text}>CEFET</Text>
      </Card>

    </View>
  </>
);
  };

const style = StyleSheet.create({

  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }
})


export default App;