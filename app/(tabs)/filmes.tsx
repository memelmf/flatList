import { View, StyleSheet, Text, Image } from 'react-native';

export default function Filme() {

  return (
    <View style={styles.filme}>

      <Image
        source={{
          uri: "https://tse1.mm.bing.net/th/id/OIP.YScgwJmodLYCGKejncwxVAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        Homem Aranha
      </Text>

      <Text style={styles.informacoes}>
        2017 • 2h 13min • Ação/Aventura
      </Text>

      <Text style={styles.subtitulo}>
        Sinopse
      </Text>

      <Text style={styles.sinopse}>
        Peter Parker é um jovem que ganha um poderoso senso de responsabilidade após ser picado por um rato genético. Ele se torna o Homem-Aranha e se dedica a proteger sua cidade de vilões.
      </Text>

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