import { Ionicons } from "@expo/vector-icons";
// Importa o ícone da seta de voltar

import { Stack, useRouter } from "expo-router";
// Stack cria o cabeçalho das páginas
// useRouter permite navegar para outra página

import { TextInput, Pressable } from "react-native";
// TextInput cria o campo de busca
// Pressable cria o botão da seta


export default function ComponentesLayout() {
  // Cria o layout das páginas de filmes e busca

  const router = useRouter();
  // Cria o controle para mudar de página


  return (
    <Stack
      screenOptions={{
        headerShown: true,
        // Mostra o cabeçalho

        headerStyle: {
          backgroundColor: "rgb(0, 0, 0)",
          // Fundo preto
        },

        headerTitleStyle: {
          fontWeight: "700",
          // Deixa o título mais forte

          fontSize: 18,
          // Tamanho do título

          color: "rgb(209, 0, 0)",
          // Vermelho igual ao resto do aplicativo
        },

        headerLeft: () => (
          <Pressable
            onPress={() => router.replace("/")}
            // Ao clicar na seta, vai diretamente para a página inicial

            style={{
              marginLeft: 5,
              marginRight: 10,
            }}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color="rgb(209, 0, 0)"
            />
          </Pressable>
        ),
        // Cria nossa própria seta de voltar


        headerRight: () => (
          <TextInput
            placeholder="Buscar filmes..."
            // Texto que aparece antes de pesquisar

            placeholderTextColor="#999"
            // Cor do texto do placeholder

            style={{
              backgroundColor: "#2A2A2A",
              // Fundo cinza escuro

              color: "#FFFFFF",
              // Texto digitado branco

              height: 36,
              // Altura

              width: 170,
              // Largura

              marginRight: 15,
              // Distância da borda direita

              paddingHorizontal: 14,
              // Espaço interno

              borderRadius: 20,
              // Deixa arredondado

              borderWidth: 1,
              // Cria uma borda

              borderColor: "#555555",
              // Cor da borda
            }}

            onSubmitEditing={(event) => {
              // Acontece quando termina a pesquisa

              const texto = event.nativeEvent.text;
              // Pega o texto digitado

              if (texto.trim() !== "") {
                // Verifica se existe texto

                router.push(`/componentes/busca/${texto}`);
                // Vai para os resultados da busca
              }
            }}
          />
        ),
        // Coloca a busca no lado direito
      }}
    >

      <Stack.Screen
        name="busca/[query]"
        options={{
          title: "Início",
          // Mantém "Início" no topo
        }}
      />

      <Stack.Screen
        name="filme/[id]"
        options={{
          title: "Início",
          // Mantém "Início" no topo
        }}
      />

    </Stack>
  );
}