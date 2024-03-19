// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesMore18 = ages1.filter((age) => age > 18);

console.log (agesMore18);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const evenAges = ages2.filter((age) => ages2 % 2 === 0);

console.log(evenAges);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const newStreamersList = streamers1.filter((streamer) => streamer.gameMorePlayed === "League of Legends");

console.log(newStreamersList);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const nameStreamerWithU = streamers2.filter((streamer) => streamer.name.includes("u"));

console.log(nameStreamerWithU);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const newArrayStreamers = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed.includes("Legends")) {
      if (streamer.age > 35) {
          streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
      }
      return streamer;
  }
});

console.log(newArrayStreamers);