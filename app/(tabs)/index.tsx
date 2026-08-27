import { View, StyleSheet, FlatList, Text, Image } from 'react-native';

const categorias = [
  {
    id: "1",
    titulo: "Comédia",
    filmes: [
      {
        id: "1a",
        titulo: "As Branquelas",
        imagem: "https://tse3.mm.bing.net/th/id/OIP.zcE46xXMtWk7K-Na10KMQQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "1b",
        titulo: "Gente Grande",
        imagem: "https://m.media-amazon.com/images/M/MV5BZjEzM2U4NTQtNTdmMi00MDU1LWEzM2YtODcwNDkzZWE5YjhlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      },
      {
        id: "1c",
        titulo: "Minha Mãe é uma Peça",
        imagem: "https://images.justwatch.com/poster/244868796/s718/minha-mae-e-uma-peca-o-filme.jpg",
      },
      {
        id: "1d",
        titulo: "Todo Mundo em Pânico",
        imagem: "https://cinemaweb.com.br/wp-content/uploads/2024/06/poster-todo-mundo-em-panico-2000.jpg",
      },
    ],
  },

  {
    id: "2",
    titulo: "Ação",
    filmes: [
      {
        id: "2a",
        titulo: "John Wick",
        imagem: "https://i.dailymail.co.uk/1s/2023/10/28/00/77101577-12672893-image-a-122_1698449970465.jpg",
      },
      {
        id: "2b",
        titulo: "Top Gun",
        imagem: "https://tse2.mm.bing.net/th/id/OIP.ihnJM8xgikGKV1e3RcRsaQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "2c",
        titulo: "Vingadores",
        imagem: "https://tse3.mm.bing.net/th/id/OIP.uPZnorK_fDGQ8VCtcRL_QgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "2d",
        titulo: "Homem-Aranha",
        imagem: "https://tse1.mm.bing.net/th/id/OIP.YScgwJmodLYCGKejncwxVAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
    ],
  },

  {
    id: "3",
    titulo: "Romance",
    filmes: [
      {
        id: "3a",
        titulo: "A Cinco Passos de Você",
        imagem: "https://tse1.mm.bing.net/th/id/OIP.QDP0U_00LrHxXKpGm0WAHgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "3b",
        titulo: "Para Todos os Garotos",
        imagem: "https://media.fstatic.com/1Cn21jIOI1T0skuY0OF3oGQ6qFg=/220x330/smart/filters:format(webp)/media/movies/covers/2018/09/Dlx5arLX0AAuss3.jpg",
      },
      {
        id: "3c",
        titulo: "Diário de uma Paixão",
        imagem: "https://m.media-amazon.com/images/M/MV5BZjY0YzYwMDQtYmJjNi00Yzg5LWE3OTYtNDQzOGYxN2JiNGQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      },
      {
        id: "3d",
        titulo: "Barraca do Beijo",
        imagem: "https://cinemaweb.com.br/wp-content/uploads/2024/06/poster-a-barraca-do-beijo-2018.jpg?x30423",
      },
    ],
  },

  {
    id: "4",
    titulo: "Terror",
    filmes: [
      {
        id: "4a",
        titulo: "Annabelle",
        imagem: "https://images.moviesanywhere.com/9bb79302cc5390cf15c9b61bace4cc6d/6cfdbb63-d7f9-4625-b000-4648e905ed38.jpg",
      },
      {
        id: "4b",
        titulo: "Invocação do Mal",
        imagem: "https://m.media-amazon.com/images/S/pv-target-images/acefd1fb8810351510ad9b6dcdab6f382e920e6d009bf32d78315f7ef2f2484c.jpg",
      },
      {
        id: "4c",
        titulo: "It: A Coisa",
        imagem: "https://m.media-amazon.com/images/S/pv-target-images/5a27f1b0f7724cc8e8ec146b4be257a42bee603a2731321ca82312fe9caec6f8.jpg",
      },
      {
        id: "4d",
        titulo: "Premonição",
        imagem: "https://m.media-amazon.com/images/M/MV5BN2ZiMzAyZTAtNTc3MS00M2FlLThmNjktOWRmMDJkNGNhMDNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      },
    ],
  },
];

export default function Flat() {

  return (
    <View style={styles.app}>

      <FlatList
        data={categorias}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (

          <View style={styles.categoria}>

            <Text style={styles.tituloCategoria}>
              {item.titulo}
            </Text>

            <FlatList
              data={item.filmes}
              keyExtractor={filme => filme.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (

                <View style={styles.filme}>

                  <Image
                    source={{ uri: item.imagem }}
                    style={styles.imagem}
                  />

                  <Text style={styles.tituloFilme}>
                    {item.titulo}
                  </Text>

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

  app: {
    flex: 1,
    backgroundColor: "#202020",
  },

  categoria: {
    marginBottom: 20,
  },

  tituloCategoria: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 8,
  },

  filme: {
    width: 120,
    marginLeft: 15,
  },

  imagem: {
    width: 120,
    height: 170,
    borderRadius: 5,
  },

  tituloFilme: {
    color: "#FFFFFF",
    fontSize: 13,
    marginTop: 5,
  },

});