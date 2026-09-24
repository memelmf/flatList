import { Ionicons } from "@expo/vector-icons";
// Importa os ícones que aparecem nas abas

import { Tabs, useRouter } from "expo-router";
// Tabs cria as abas
// useRouter permite mandar para a página de busca

import { Platform, TextInput } from "react-native";
// Platform verifica se é Android ou iPhone
// TextInput cria o campo de busca


export default function TabLayout() {
  // Cria o layout das abas

  const router = useRouter();
  // Cria o controle para mudar de página


  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        // Mostra o cabeçalho no topo

        headerStyle: {
          backgroundColor: "rgb(0, 0, 0)",
          // Fundo preto

          elevation: 0,
          // Remove a sombra no Android

          shadowOpacity: 0,
          // Remove a sombra no iPhone

          borderBottomWidth: 1,
          // Cria uma pequena borda embaixo

          borderBottomColor: "#f0f0f0ff",
          // Cor da borda
        },

        headerTitleStyle: {
          fontWeight: "700",
          // Deixa o título em negrito

          fontSize: 18,
          // Tamanho do título

          color: "rgb(209, 0, 0)",
          // Cor vermelha
        },

        tabBarActiveTintColor: "rgb(209, 0, 0)",
        // Cor da aba selecionada

        tabBarInactiveTintColor: "#8E8E93",
        // Cor das abas não selecionadas

        tabBarStyle: {
          backgroundColor: "rgb(0, 0, 0)",
          // Fundo preto

          borderTopWidth: 1,
          // Borda no topo da barra

          borderTopColor: "#F0F0F0",
          // Cor da borda

          height: Platform.OS === "ios" ? 88 : 64,
          // Altura dependendo do celular

          paddingBottom: Platform.OS === "ios" ? 30 : 80,
          // Espaço inferior

          paddingTop: 10,
          // Espaço superior
        },

        tabBarLabelStyle: {
          fontSize: 12,
          // Tamanho do texto das abas

          fontWeight: "500",
          // Peso da fonte
        },
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          // Nome que aparece no topo


          headerRight: () => (
            <TextInput
              placeholder="Buscar filmes..."
              // Texto que aparece antes de digitar

              placeholderTextColor="#999"
              // Cor do texto "Buscar filmes..."

              style={{
  backgroundColor: "#2A2A2A",
  // Fundo cinza escuro

  color: "#FFFFFF",
  // Texto digitado fica branco

  height: 36,
  // Altura do campo

  width: 170,
  // Largura do campo

  marginRight: 15,
  // Distância da borda direita

  paddingHorizontal: 14,
  // Espaço entre o texto e a lateral

  borderRadius: 20,
  // Deixa o campo bem arredondado

  borderWidth: 1,
  // Cria uma borda

  borderColor: "#555555",
  // Cor da borda
}}

              onSubmitEditing={(event) => {
                // Acontece quando a pessoa termina a pesquisa

                const texto = event.nativeEvent.text;
                // Pega o texto que foi digitado

                if (texto.trim() !== "") {
                  // Verifica se a pessoa digitou alguma coisa

                  router.push(`/componentes/busca/${texto}`);
                  // Vai para a página de resultados
                }
              }}
            />
          ),
          // Coloca o campo de busca no lado direito do "Início"


          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "heart" : "home-outline"}
              size={24}
              color={color}
            />
          ),
          // Ícone da aba Início
        }}
      />


      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorar",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />


      <Tabs.Screen
        name="flex"
        options={{
          title: "Flexbox",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />


      <Tabs.Screen
        name="view"
        options={{
          title: "View",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "menu" : "menu-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />


      <Tabs.Screen
        name="image"
        options={{
          title: "Imagem",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add"}
              size={24}
              color={color}
            />
          ),
        }}
      />


      <Tabs.Screen
        name="btnTouch"
        options={{
          title: "Botão",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add" : "add"}
              size={24}
              color={color}
            />
          ),
        }}
      />


      <Tabs.Screen
        name="input"
        options={{
          title: "Input",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle"}
              size={24}
              color={color}
            />
          ),
        }}
      />


      <Tabs.Screen
        name="flat"
        options={{
          title: "FlatList",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "list" : "list-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

    </Tabs>
  );
}