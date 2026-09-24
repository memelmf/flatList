export default function DadosDosFilmes(){

   // Aqui criamos uma lista com todas as categorias
   const categorias = [

     {
       id: "1", // ID da categoria
       titulo: "Comédia", // Nome da categoria

       filmes: [
         {
           id: "1a", // ID do filme
           titulo: "As Branquelas", // Nome do filme
           imagem: "https://tse3.mm.bing.net/th/id/OIP.zcE46xXMtWk7K-Na10KMQQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", // Imagem
           ano: 2004, // Ano de lançamento
           duracao: "1h 49min", // Duração
           genero: "Comédia", // Gênero
           sinopse: "Dois agentes do FBI se disfarçam de mulheres para proteger duas herdeiras de um sequestro.", // Sinopse
         },

         {
           id: "1b",
           titulo: "Gente Grande",
           imagem: "https://m.media-amazon.com/images/M/MV5BZjEzM2U4NTQtNTdmMi00MDU1LWEzM2YtODcwNDkzZWE5YjhlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            ano: 2010,
            duracao: "1h 57min",
            genero: "Comédia",
            sinopse: "Cinco amigos de infância se reúnem após a morte de seu treinador de basquete para um fim de semana de diversão e nostalgia.",
         },

         {
           id: "1c",
           titulo: "Minha Mãe é uma Peça",
           imagem: "https://images.justwatch.com/poster/244868796/s718/minha-mae-e-uma-peca-o-filme.jpg",
            ano: 2013,
            duracao: "1h 38min",
            genero: "Comédia",
            sinopse: "Uma mãe e uma filha se envolvem em uma série de desventuras após a morte do pai.",
         },

         {
           id: "1d",
           titulo: "Todo Mundo em Pânico",
           imagem: "https://cinemaweb.com.br/wp-content/uploads/2024/06/poster-todo-mundo-em-panico-2000.jpg",
            ano: 2000,
            duracao: "1h 28min",
            genero: "Comédia",
            sinopse: "Um grupo de amigos enfrenta uma série de eventos cômicos e absurdos enquanto tentam sobreviver a uma onda de assassinatos.",
         },
         {
            id: "1e",
            titulo: "Se Beber, Não Case!",
            imagem: "https://m.media-amazon.com/images/M/MV5BY2NhNmY2NDEtMDM5My00YzUxLWI5ZDQtYzE0ZWNjYjlmMzYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            ano: 2009,
            duracao: "1h 40min",
            genero: "Comédia",
            sinopse: "Três amigos acordam em Las Vegas sem lembrar da noite anterior e precisam encontrar o noivo desaparecido antes do casamento.",
         },
         {
            id: "1f",
            titulo: "Apertem os Cintos... O Piloto Sumiu!",
            imagem: "https://www.querofilme.com.br/images/b/1525-apertem-os-cintos-o-piloto-sumiu.jpg",
            ano: 2006,
            duracao: "1h 30min",
            genero: "Comédia",
            sinopse: "Três amigos acordam em Las Vegas sem lembrar da noite anterior e precisam encontrar o noivo desaparecido antes do casamento.",
         },
         {
            id: "1g",
            titulo: "O Que Fazemos nas Sombras",
            imagem: "https://images.justwatch.com/poster/313020222/s718/o-que-fazemos-nas-sombras.jpg",
            ano: 2013,
            duracao: "1h 38min",
            genero: "Comédia",
            sinopse: "Um grupo de amigos enfrenta uma série de eventos cômicos e absurdos enquanto tentam sobreviver a uma onda de assassinatos.",
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
            ano: 2014,
            duracao: "1h 41min",
            genero: "Ação",
            sinopse: "Um ex-agente da CIA se vinga da morte do seu cão após ele ser atropelado por um carro.",
         },

         {
           id: "2b",
           titulo: "Top Gun",
           imagem: "https://tse2.mm.bing.net/th/id/OIP.ihnJM8xgikGKV1e3RcRsaQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            ano: 1986,
            duracao: "1h 50min",
            genero: "Ação",
            sinopse: "Um jovem piloto de caça da Marinha dos EUA é enviado para a escola de elite Top Gun, onde compete com outros pilotos para se tornar o melhor.",
         },

         {
           id: "2c",
           titulo: "Vingadores",
           imagem: "https://tse3.mm.bing.net/th/id/OIP.uPZnorK_fDGQ8VCtcRL_QgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            ano: 2012,
            duracao: "2h 23min",
            genero: "Ação",
            sinopse: "Um grupo de super-heróis se une para salvar o mundo de uma ameaça alienígena.",
         },

         {
           id: "2d",
           titulo: "Homem-Aranha",
           imagem: "https://tse1.mm.bing.net/th/id/OIP.YScgwJmodLYCGKejncwxVAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            ano: 2002,
            duracao: "1h 59min",
            genero: "Ação",
            sinopse: "Um jovem estudante descobre que tem poderes de aranha e decide usar seus novos talentos para proteger sua cidade.",
         },
         {
            id: "2e",
            titulo: "O Poderoso Chefão",
            imagem: "https://cdn.mercidisco.com.br/image/cache/data/dvd-poderoso-chefao-1-800x800.png",
            ano: 1972,
            duracao: "2h 55min",
            genero: "Drama",
            sinopse: "Um patriarca da família Corleone transfere o controle de seu império para seu filho, mas enfrenta a resistência de seus inimigos.",
         },
         {
            id: "2f",
            titulo: "Missão Impossível",
            imagem: "https://m.media-amazon.com/images/S/pv-target-images/9cf4d37563691d4ce4c34e866b3ff015f3a5d52dab3915e284e02fcd6dbe579d.jpg",
            ano: 1996,
            duracao: "1h 36min",
            genero: "Ação",
            sinopse: "Um agente da CIA é enviado para investigar uma ameaça global, mas descobre que está sendo usado por um grupo de terroristas.",
         },
         {
            id: "2g",
            titulo: "Mad Max: Estrada da Fúria",
            imagem: "https://images.justwatch.com/poster/301728736/s718/mad-max-estrada-da-furia.jpg",
            ano: 2015,
            duracao: "1h 47min",
            genero: "Ação",
            sinopse: "Em um futuro pós-apocalíptico, um motorista de caminhão enfrenta a perseguição de um grupo de bandidos.",
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
            ano: 2019,
            duracao: "1h 38min",
            genero: "Romance",
            sinopse: "Dois jovens se conhecem e se apaixonam, mas enfrentam desafios que testam seu relacionamento.",
         },

         {
           id: "3b",
           titulo: "Para Todos os Garotos",
           imagem: "https://media.fstatic.com/1Cn21jIOI1T0skuY0OF3oGQ6qFg=/220x330/smart/filters:format(webp)/media/movies/covers/2018/09/Dlx5arLX0AAuss3.jpg",
            ano: 2018,
            duracao: "1h 38min",
            genero: "Romance",
            sinopse: "Uma jovem escreve cartas para um garoto que ela nunca conheceu, mas que se torna seu melhor amigo.",
         },

         {
           id: "3c",
           titulo: "Diário de uma Paixão",
           imagem: "https://m.media-amazon.com/images/M/MV5BZjY0YzYwMDQtYmJjNi00Yzg5LWE3OTYtNDQzOGYxN2JiNGQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            ano: 2004,
            duracao: "2h 3min",
            genero: "Romance",
            sinopse: "Um jovem casal se apaixona, mas enfrenta obstáculos que ameaçam separá-los.",
         },

         {
           id: "3d",
           titulo: "Barraca do Beijo",
           imagem: "https://cinemaweb.com.br/wp-content/uploads/2024/06/poster-a-barraca-do-beijo-2018.jpg?x30423",
            ano: 2018,
            duracao: "1h 45min",
            genero: "Romance",
            sinopse: "Uma jovem se envolve em um relacionamento complicado com um garoto que ela conhece há anos.",
         },
         {
            id: "3e",
            titulo: "Vermelho, Branco e Sangue Azul",
            imagem: "https://tse4.mm.bing.net/th/id/OIP.fV7Fs67b9W2INiNck9fYCAHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            ano: 2023,
            duracao: "1h 58min",
            genero: "Romance",
            sinopse: "Conta a história de Alex Claremont-Diaz, o filho da presidente dos Estados Unidos, que se apaixona pelo príncipe Henry da Inglaterra após uma briga pública forçá-los a fingir uma amizade.",
         },
         {
            id: "3f",
            titulo: "A Culpa é das Estrelas",
            imagem: "https://tse1.mm.bing.net/th/id/OIP.-GXGVtwRwOAppZF1Ad1i3wHaKa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            ano: 2014,
            duracao: "1h 38min",
            genero: "Romance",
            sinopse: "Dois jovens se conhecem e se apaixonam, mas enfrentam desafios que testam seu relacionamento.",
         },
         {
            id: "3g",
            titulo: "Simplesmente Acontece",
            imagem: "https://i.pinimg.com/736x/b7/71/2b/b7712b05ce4965623926a4a1543ed2ff.jpg",
            ano: 2014,
            duracao: "1h 38min",
            genero: "Romance",
            sinopse: "Dois jovens se conhecem e se apaixonam, mas enfrentam desafios que testam seu relacionamento.",
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
            ano: 2014,
            duracao: "1h 39min",
            genero: "Terror",
            sinopse: "Um casal enfrenta eventos sobrenaturais após trazer uma boneca amaldiçoada para sua casa.",
         },

         {
           id: "4b",
           titulo: "Invocação do Mal",
           imagem: "https://m.media-amazon.com/images/S/pv-target-images/acefd1fb8810351510ad9b6dcdab6f382e920e6d009bf32d78315f7ef2f2484c.jpg",
            ano: 2013,
            duracao: "1h 52min",
            genero: "Terror",
            sinopse: "Um casal de investigadores paranormais ajuda uma família a lidar com uma presença demoníaca em sua casa.",
         },

         {
           id: "4c",
           titulo: "It: A Coisa",
           imagem: "https://m.media-amazon.com/images/S/pv-target-images/5a27f1b0f7724cc8e8ec146b4be257a42bee603a2731321ca82312fe9caec6f8.jpg",
            ano: 2017,
            duracao: "2h 15min",
            genero: "Terror",
            sinopse: "Um grupo de crianças enfrenta um monstro que se disfarça de palhaço e aterroriza sua cidade.",
         },

         {
           id: "4d",
           titulo: "Premonição",
           imagem: "https://m.media-amazon.com/images/M/MV5BN2ZiMzAyZTAtNTc3MS00M2FlLThmNjktOWRmMDJkNGNhMDNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            ano: 2000,
            duracao: "1h 32min",
            genero: "Terror",
            sinopse: "Uma jovem descobre um segredo sombrio que pode ameaçar sua vida.",
         },
         {
            id: "4e",
            titulo: "A Maldição da Chorona",
            imagem: "https://m.media-amazon.com/images/M/MV5BZmMzYTc2M2ItZWRkNC00MTZlLWJmZGMtNDk1NzhhZTkzMzUzXkEyXkFqcGc@._V1_.jpg",
            ano: 2014,
            duracao: "1h 38min",
            genero: "Terror",
            sinopse: "Uma jovem descobre um segredo sombrio que pode ameaçar sua vida.",
         },
         {
            id: "4f",
            titulo: "A Freira",
            imagem: "https://tse3.mm.bing.net/th/id/OIP.aBNr7TTpOf-3-m5yZJDtIgHaK-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            ano: 2016,
            duracao: "1h 34min",
            genero: "Terror",
            sinopse: "Uma freira enfrenta uma presença demoníaca em um convento.",
         },
         {
            id: "4g",
            titulo: "A Bruxa",
            imagem: "https://tse1.mm.bing.net/th/id/OIP.c1s-XON4-f_7KporwXIl6gHaKk?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            ano: 2015,
            duracao: "1h 36min",
            genero: "Terror",
            sinopse: "Uma jovem descobre que está sendo perseguida por uma bruxa malvada.",
         },
       ],
     },
   ];

   // Entrega os dados para o outro arquivo usar
   return categorias;
}
