import { View, StyleSheet, FlatList, Text, Image, TextInput} from 'react-native';
// Importa os componentes que vamos usar do React Native

import { Link, useRouter } from 'expo-router';
// Link serve para ir para outra tela
// useRouter permite mandar o usuário para outra página

import DadosDosFilmes from './componentes/DadosDosFilmes';
// Pega os dados dos nossos filmes

const categorias = DadosDosFilmes();
// Guarda todas as categorias e filmes

export default function Flat() {

  const router = useRouter();
  // Cria o controle que vamos usar para mudar de página

  return (
    <View style={styles.app}>
      {/* View é como uma "caixa" que segura o conteúdo */}

      <FlatList
        data={categorias}
        // Aqui colocamos as categorias dos filmes

        keyExtractor={item => item.id}
        // Usa o ID da categoria como identificação

        renderItem={({ item }) => (
          // Aqui mostramos cada categoria

          <View style={styles.categoria}>

            <Text style={styles.tituloCategoria}>
              {item.titulo}
            </Text>
            {/* Mostra o nome da categoria, por exemplo "Comédia" */}

            <FlatList
              data={item.filmes}
              // Pega os filmes daquela categoria

              keyExtractor={filme => filme.id}
              // Usa o ID de cada filme como identificação

              horizontal={true}
              // Faz os filmes ficarem lado a lado

              showsHorizontalScrollIndicator={false}
              // Esconde a barra de rolagem horizontal

              renderItem={({ item }) => (
                // Mostra cada filme

                <View style={styles.filme}>

                  <Link href={`/componentes/filme/${item.id}`}>
                    {/* 
                      Vai para a página do filme.
                      O ID do filme vai junto no endereço.
                      Exemplo: /filme/2d
                    */}

                    <Image
                      source={{ uri: item.imagem }}
                      // Pega a imagem que está nos dados do filme

                      style={styles.imagem}
                      // Usa o estilo da imagem
                    />

                    <Text style={styles.tituloFilme}>
                      {item.titulo}
                    </Text>
                    {/* Mostra o título do filme */}

                  </Link>

                </View>
              )}
            />

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
// Aqui ficam os estilos da tela

  app: {
    flex: 1,
    // Ocupa a tela inteira

    backgroundColor: "#202020",
    // Cor do fundo
  },

  categoria: {
    marginBottom: 20,
    // Espaço entre uma categoria e outra
  },

  tituloCategoria: {
    color: "#FFFFFF",
    // Cor branca

    fontSize: 20,
    // Tamanho da letra

    fontWeight: "bold",
    // Deixa em negrito

    marginLeft: 15,
    // Espaço da esquerda

    marginBottom: 8,
    // Espaço abaixo do título
  },

  filme: {
    width: 120,
    // Largura do card

    marginLeft: 15,
    // Espaço entre os filmes
  },

  imagem: {
    width: 120,
    // Largura da imagem

    height: 170,
    // Altura da imagem

    borderRadius: 5,
    // Deixa as pontas arredondadas
  },

  tituloFilme: {
    color: "#FFFFFF",
    // Cor branca

    fontSize: 13,
    // Tamanho da letra

    marginTop: 5,
    // Espaço acima do título
  },
});