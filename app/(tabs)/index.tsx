import { View, StyleSheet, FlatList, Text, Image} from 'react-native';
import {Link} from 'expo-router';
import DadosDosFilmes from '../componentes/DadosDosFilmes';

const categorias = DadosDosFilmes();

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
                  <Link href={'/filmes'}>

                  <Image
                    source={{ uri: item.imagem }}
                    style={styles.imagem}
                  />

                  <Text style={styles.tituloFilme}>
                    {item.titulo}
                  </Text>
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