import { View, StyleSheet, Text, Image } from 'react-native';
// Importa os componentes que vamos usar

import { useLocalSearchParams } from 'expo-router';
// Permite pegar o ID que veio pelo Link

import DadosDosFilmes from '../DadosDosFilmes';
// Importa os dados dos filmes


export default function Filme(){

  const { id } = useLocalSearchParams();
  // Pega o ID que veio pelo Link
  // Exemplo: se clicou no Homem-Aranha, recebe "2d"


  const categorias = DadosDosFilmes();
  // Pega todas as categorias e seus filmes


  const filmes = categorias.flatMap(categoria => categoria.filmes);
  // Junta todos os filmes em uma lista só


  const filme = filmes.find(filme => filme.id === id);
  // Procura o filme que tem o mesmo ID que recebemos


  return (
    <View style={styles.filme}>
      {/* Tela do filme */}

      <Image
        source={{
          uri: filme.imagem
        }}
        // Aqui pega a imagem do filme que foi clicado

        style={styles.imagem}
        // Usa o estilo da imagem
      />

      <Text style={styles.titulo}>
        {filme.titulo}
      </Text>
      {/* Aqui aparece o título do filme clicado */}

      <Text style={styles.informacoes}>
        2017 • 2h 13min • Ação/Aventura
      </Text>
      {/* Essas informações ainda estão fixas por enquanto */}

      <Text style={styles.subtitulo}>
        Sinopse
      </Text>
      {/* Título "Sinopse" */}

      <Text style={styles.sinopse}>
        Peter Parker é um jovem que ganha um poderoso senso de responsabilidade após ser picado por um rato genético. Ele se torna o Homem-Aranha e se dedica a proteger sua cidade de vilões.
      </Text>
      {/* Essa sinopse ainda é a do Homem-Aranha */}

    </View>
  );
}


const styles = StyleSheet.create({
// Aqui ficam os estilos

  filme: {
    flex: 1,
    // Ocupa a tela inteira

    backgroundColor: "#202020",
    // Cor do fundo

    padding: 20,
    // Espaço interno
  },

  imagem: {
    width: 200,
    // Largura da imagem

    height: 300,
    // Altura da imagem

    alignSelf: "center",
    // Coloca a imagem no centro

    borderRadius: 8,
    // Arredonda as pontas

    marginBottom: 15,
    // Espaço abaixo da imagem
  },

  titulo: {
    color: "#FFFFFF",
    // Cor branca

    fontSize: 28,
    // Tamanho da letra

    fontWeight: "bold",
    // Negrito

    marginBottom: 8,
    // Espaço abaixo
  },

  informacoes: {
    color: "#AAAAAA",
    // Cor cinza

    fontSize: 14,
    // Tamanho da letra

    marginBottom: 20,
    // Espaço abaixo
  },

  subtitulo: {
    color: "#FFFFFF",
    // Cor branca

    fontSize: 20,
    // Tamanho da letra

    fontWeight: "bold",
    // Negrito

    marginBottom: 8,
    // Espaço abaixo
  },

  sinopse: {
    color: "#CCCCCC",
    // Cor cinza claro

    fontSize: 15,
    // Tamanho da letra

    lineHeight: 22,
    // Espaçamento entre as linhas
  },

});
