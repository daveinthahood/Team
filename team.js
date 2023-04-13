const team = [{
    name: "Simone",
    surname: "Strati",
    age: 27,
    city: "Bianco(rc)",
    hobby:"sport",
    favoriteFood:"pizza",
    favoriteGame:"resident evil",
    favoriteFilm:"ritorno al futuro",
    favoriteBook:"tutta la verità sull'advertising che funziona",
    petName:"charlie",
},
  {
    name: "Andrea",
    surname: "Izzo",
    age: 24,
    city: "Napoli",
    hobby: ["Basketball", "Music", "chess"],
    favoriteFood: ["Pizza", "Pasta", "Sandwiches"],
    favoriteVideoGame: "Call of duty",
    favoriteFilm: "Prison Break",
    favoriteBook: "Il Piccolo Principe",
    petName: "Marek",
},
  {
    name: "Gianmarco",
    surname: "Pesola",
    age: 29,
    city: "Brindisi",
    hobby: "Gym",
    favoriteFood: "Sushi",
    favoriteVideoGame: "League of legends",
    favoriteFilm: "American sniper",
    favoriteBook: "Game of thrones",
    petName: "Teddy",
},

  { name : "Davide", 
    surname: "Simone", 
    age : 26, 
    city:"Sora", 
    hobby:"Music", 
    favoriteFood:"Sushi", 
    favoriteVideoGame:"Fifa", 
    favoriteFilm:"The Prisoners", 
    favoriteBook:"Il codice da Vinci",  
    petName:"Dora"
},

  {
    name: "Gabriele",
    surname: "Barberio",
    age: 28,
    city: "Codogno",
    hobby:"Pugilato",
    favoriteFood:"Pasta e piselli", 
    favoriteVideoGame:"Fallout 4",
    favoriteFilm:"Doctor Who",
    favoriteBook:"1984",
    petName: "Tofa",
},
];

//stampare i nomi degli animali 
function printPetName(array, parametro, name1) {
 
    for (let i = 0; i < array.length; i++) {
      if( array[i][parametro].length >= 1 ){
        console.log(`L'animale domestico di ${array[i][name1]} si chiama ${array[i][parametro]} `) 
      }
      
    }
  }
   printPetName(team, "petName" , "name");