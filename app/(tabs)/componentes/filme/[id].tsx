import { View, StyleSheet, Text, Image } from 'react-native';
// Importa os componentes que vamos usar

import { useLocalSearchParams } from 'expo-router';
// Permite pegar o ID que veio pelo Link

import DadosDosFilmes from '../DadosDosFilmes';
// Importa os dados dos filmes


export default function Filme() {

  const { id } = useLocalSearchParams();
  // Pega o ID que veio pelo Link


  const categorias = DadosDosFilmes();
  // Pega todas as categorias e seus filmes


  const filmes = categorias.flatMap(categoria => categoria.filmes);
  // Junta todos os filmes em uma lista só


  const filme = filmes.find(filme => filme.id === id);
  // Procura o filme que tem o mesmo ID


  if (!filme) {
    // Verifica se o filme foi encontrado

    return (
      <View style={styles.filme}>

        <Text style={styles.titulo}>
          Filme não encontrado
        </Text>

      </View>
    );
  }


  return (
    <View style={styles.filme}>
      {/* Tela do filme */}


      <Image
        source={{
          uri: filme.imagem
        }}
        // Pega a imagem do filme

        style={styles.imagem}
        // Usa o estilo da imagem
      />


      <Text style={styles.titulo}>
        {filme.titulo}
      </Text>
      {/* Mostra o título do filme */}


      <Text style={styles.informacoes}>
        {filme.ano} • {filme.duracao} • {filme.genero}
      </Text>
      {/* Mostra as informações do filme */}


      <Text style={styles.subtitulo}>
        Sinopse
      </Text>
      {/* Título "Sinopse" */}


      <Text style={styles.sinopse}>
        {filme.sinopse}
      </Text>
      {/* Mostra a sinopse do filme */}

    </View>
  );
}


const styles = StyleSheet.create({

  filme: {
    flex: 1,
    backgroundColor: "#202020",
    padding: 20,
  },


  imagem: {
    width: 200,
    height: 300,
    alignSelf: "center",
    borderRadius: 8,
    marginBottom: 15,
  },


  titulo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },


  informacoes: {
    color: "#AAAAAA",
    fontSize: 14,
    marginBottom: 20,
  },


  subtitulo: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },


  sinopse: {
    color: "#CCCCCC",
    fontSize: 15,
    lineHeight: 22,
  },

});