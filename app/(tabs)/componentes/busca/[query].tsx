import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
// Importa os componentes que vamos usar

import { Link, useLocalSearchParams } from 'expo-router';
// Link serve para ir para outra tela
// useLocalSearchParams serve para pegar o que foi pesquisado

import DadosDosFilmes from '../DadosDosFilmes';
// Importa os dados dos filmes


export default function Busca() {
  // Cria a página de busca


  const { query } = useLocalSearchParams();
  // Pega o que foi digitado na pesquisa


  const categorias = DadosDosFilmes();
  // Pega todas as categorias e seus filmes


  const filmes = categorias.flatMap(categoria => categoria.filmes);
  // Junta todos os filmes de todas as categorias em uma lista só


  const filmesEncontrados = filmes.filter(filme =>
    filme.titulo.toLowerCase().includes(String(query).toLowerCase())
  );
  // Procura nos títulos dos filmes aquilo que foi pesquisado


  return (
    <View style={styles.app}>
      {/* View é a caixa principal da tela */}


      <Text style={styles.titulo}>
        Resultados para: {query}
      </Text>
      {/* Mostra o que foi pesquisado */}


      <FlatList
        data={filmesEncontrados}
        // Coloca na lista somente os filmes encontrados

        keyExtractor={item => item.id}
        // Usa o ID do filme como identificação

        numColumns={3}
        // Coloca 3 filmes em cada linha

        renderItem={({ item }) => (
          // Mostra cada filme

          <View style={styles.filme}>

            <Link href={`/componentes/filme/${item.id}`}>
              {/* Quando clicar no filme, vai para a página daquele filme */}

              <Image
                source={{ uri: item.imagem }}
                // Pega a imagem do filme

                style={styles.imagem}
                // Usa o estilo da imagem
              />


              <Text style={styles.tituloFilme}>
                {item.titulo}
              </Text>
              {/* Mostra o nome do filme */}

            </Link>

          </View>
        )}
      />


      {filmesEncontrados.length === 0 && (
        <Text style={styles.nenhum}>
          Nenhum filme encontrado.
        </Text>
      )}
      {/* Mostra uma mensagem caso nenhum filme seja encontrado */}

    </View>
  );
}


const styles = StyleSheet.create({

  app: {
    flex: 1,
    backgroundColor: "#202020",
    padding: 15,
  },


  titulo: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },


  filme: {
    width: "33.33%",
    padding: 5,
  },


  imagem: {
    width: "100%",
    height: 170,
    borderRadius: 5,
  },


  tituloFilme: {
    color: "#FFFFFF",
    fontSize: 13,
    marginTop: 5,
  },


  nenhum: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 30,
  },

});