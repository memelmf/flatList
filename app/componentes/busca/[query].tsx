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
  // toLowerCase deixa tudo em letras minúsculas para facilitar a comparação
  // includes verifica se o texto pesquisado aparece no título


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
          // Mostra cada filme encontrado


          <View style={styles.filme}>

            <Link href={`/componentes/filme/${item.id}`}>
              {/* 
                Quando clicar no filme,
                vai para a página daquele filme
              */}


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
      {/* 
        Se nenhum filme for encontrado,
        mostra essa mensagem
      */}

    </View>
  );
}


const styles = StyleSheet.create({
// Aqui ficam os estilos da tela


  app: {
    flex: 1,
    // Ocupa a tela inteira

    backgroundColor: "#202020",
    // Usa o mesmo fundo da página principal

    padding: 15,
    // Espaço interno da tela
  },


  titulo: {
    color: "#FFFFFF",
    // Cor branca

    fontSize: 20,
    // Tamanho da letra

    fontWeight: "bold",
    // Deixa o texto em negrito

    marginBottom: 15,
    // Espaço abaixo do título
  },


  filme: {
    width: "33.33%",
    // Cada filme ocupa aproximadamente um terço da tela

    padding: 5,
    // Espaço entre os filmes
  },


  imagem: {
    width: "100%",
    // A imagem ocupa toda a largura disponível

    height: 170,
    // Altura da imagem

    borderRadius: 5,
    // Arredonda as pontas da imagem
  },


  tituloFilme: {
    color: "#FFFFFF",
    // Cor branca

    fontSize: 13,
    // Tamanho do texto

    marginTop: 5,
    // Espaço acima do título
  },


  nenhum: {
    color: "#FFFFFF",
    // Cor branca

    fontSize: 16,
    // Tamanho da mensagem

    textAlign: "center",
    // Centraliza a mensagem

    marginTop: 30,
    // Espaço acima da mensagem
  },

});