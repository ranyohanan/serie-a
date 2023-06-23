
//teams data
class data {
  constructor(id, team, coverUrl, SymbolUrl, lastFinish, year, stadium) {
    this.id = id;
    this.team = team;
    this.coverUrl = coverUrl;
    this.SymbolUrl = SymbolUrl;
    this.lastFinish = lastFinish;
    this.year = year;
    this.stadium = stadium;
  }
  get(propName) {
    return this[propName]
  }
  set(propName, value) {
    return this[propName] = value;
  }
}

//object array of all the teams
let teamsData = [
  {
    id: 1,
    team: "Atalanta",
    coverUrl: "https://img.legaseriea.it/vimages/6346d0bc/ATALANTATIFO.png?webp&q=70&size=1903.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cfd69d/atalanta.png?webp&q=70&size=240x-",
    lastFinish: "5th",
    year: 1907,
    stadium: "Stadio Atleti Azzurri d'Italia"
  },
  {
    id: 2,
    team: "Bologna",
    coverUrl: "https://img.legaseriea.it/vimages/62cef444/tifoseria_bologna.png?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef3f6/bologna.png?webp&q=70&size=240x-",
    lastFinish: "9th",
    year: 1909,
    stadium: "Stadio Renato Dall'Ara"
  },
  {
    id: 3,
    team: "Cremonese",
    coverUrl: "https://img.legaseriea.it/vimages/632862c8/TIFOSI%20CREMONESE756.jpg?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef3c1/cremonese.png?webp&q=70&size=240x-",
    lastFinish: "19th",
    year: 1903,
    stadium: "Stadio Giovanni Zini"
  },
  {
    id: 4,
    team: "Empoli",
    coverUrl: "https://img.legaseriea.it/vimages/62d9626f/Stadio-Carlo-Castellani.jpg?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef42e/empoli.png?webp&q=70&size=240x-",
    lastFinish: "14th",
    year: 1920,
    stadium: "Stadio Carlo Castellani"
  },
  {
    id: 5,
    team: "Fiorentina",
    coverUrl: "https://img.legaseriea.it/vimages/63286bb1/Tifosi%20Firenze.JPG?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef452/fiorentina.png?webp&q=70&size=240x-",
    lastFinish: "8th",
    year: 1926,
    stadium: "Stadio Artemio Franchi"
  },
  {
    id: 6,
    team: "Hellas Verona",
    coverUrl: "https://img.legaseriea.it/vimages/6346d325/VERONATIFO.png?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef475/colore=YELLOW.png?webp&q=70&size=240x-",
    lastFinish: "17th",
    year: 1903,
    stadium: "Stadio Marc'Antonio Bentegodi"
  },
  {
    id: 7,
    team: "Inter",
    coverUrl: "https://img.legaseriea.it/vimages/62d034f4/inter-stadio.jpg?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef496/inter.png?webp&q=70&size=240x-",
    lastFinish: "3rd",
    year: 1908,
    stadium: "San Siro"
  },
  {
    id: 8,
    team: "Juventus",
    coverUrl: "https://www.juvelive.it/wp-content/uploads/2017/11/GettyImages-877566948.jpg",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef4b7/colore=WHITE.png?webp&q=70&size=240x-",
    lastFinish: "7th",
    year: 1897,
    stadium: "Juventus Stadium"
  },
  {
    id: 9,
    team: "Lazio",
    coverUrl: "https://img.legaseriea.it/vimages/6346d265/LAZIOTIFO.png?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef4d5/lazio.png?webp&q=70&size=240x-",
    lastFinish: "2nd",
    year: 1900,
    stadium: "Stadio Olimpico"
  },
  {
    id: 10,
    team: "Lecce",
    coverUrl: "https://img.legaseriea.it/vimages/6346d41c/LECCETIFOSI.png?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef4f6/lecce.png?webp&q=70&size=240x-",
    lastFinish: "16th",
    year: 1908,
    stadium: "Stadio Via del Mare"
  },
  {
    id: 11,
    team: "Milan",
    coverUrl: "https://frontofficesports.com/wp-content/uploads/2022/06/FOS-22-6.14-AC-Milan-Stadium.jpg",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef513/milan.png?webp&q=70&size=240x-",
    lastFinish: "4th",
    year: 1899,
    stadium: "San Siro"
  },
  {
    id: 12,
    team: "Monza",
    coverUrl: "https://pbs.twimg.com/media/FT9HvZ5XwAEXdv4.jpg:large",
    SymbolUrl: "https://img.legaseriea.it/vimages/62c6acbd/monza.png?webp&q=70&size=240x-",
    lastFinish: "11th",
    year: 1912,
    stadium: "Stadio Brianteo"
  },
  {
    id: 13,
    team: "Napoli",
    coverUrl: "https://img.legaseriea.it/vimages/62da9c49/stadio-maradona%20interno-tribuna.jpg?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef532/napoli.png?webp&q=70&size=240x-",
    lastFinish: "1st",
    year: 1926,
    stadium: "Stadio Diego Armando Maradona"
  },
  {
    id: 14,
    team: "Roma",
    coverUrl: "https://img.legaseriea.it/vimages/6346d5f4/ROMATIFO.png?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cfd5ce/roma.png?webp&q=70&size=240x-",
    lastFinish: "6th",
    year: 1927,
    stadium: "Stadio Olimpico"
  },
  {
    id: 15,
    team: "Salernitana",
    coverUrl: "https://img.legaseriea.it/vimages/62cfe4dd/tifoseria_team.png?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef553/salernitana.png?webp&q=70&size=240x-",
    lastFinish: "15th",
    year: 1,
    stadium: "Stadio Arechi"
  },
  {
    id: 16,
    team: "Sampdoria",
    coverUrl: "https://www.calciolecce.it/wp-content/uploads/2023/04/tifosi-sampdoria.jpg",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef574/sampdoria.png?webp&q=70&size=240x-",
    lastFinish: "20th",
    year: 1946,
    stadium: "Stadio Luigi Ferraris"
  },
  {
    id: 17,
    team: "Sassuolo",
    coverUrl: "https://img.legaseriea.it/vimages/62cef41c/Sassuolo.png?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef590/sassuolo.png?webp&q=70&size=240x-",
    lastFinish: "13th",
    year: 1974,
    stadium: "Mapei Stadium"
  },
  {
    id: 18,
    team: "Spezia",
    coverUrl: "https://img.legaseriea.it/vimages/62cef4ec/tifoseria_spezia.png?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef5ae/spezia.png?webp&q=70&size=240x-",
    lastFinish: "18th",
    year: 1906,
    stadium: "Stadio Alberto Picco"
  },
  {
    id: 19,
    team: "Torino",
    coverUrl: "https://img.legaseriea.it/vimages/170e43207455051c/STADIO-OLIMPICO-TORINO.png?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef5cb/torino.png?webp&q=70&size=240x-",
    lastFinish: "10th",
    year: 1906,
    stadium: "Stadio Olimpico Grande Torino"
  },
  {
    id: 20,
    team: "Udinese",
    coverUrl: "https://img.legaseriea.it/vimages/62dfdddd/Udinese@fabrice_gallina2019-8288-min.jpg?webp&q=70&size=991.5x-",
    SymbolUrl: "https://img.legaseriea.it/vimages/62cef5e9/udinese.png?webp&q=70&size=240x-",
    lastFinish: "12th",
    year: 1896,
    stadium: "Stadio Friuli"
  },
]



let secretTeam = teamsData[Math.floor(Math.random() * teamsData.length)];
console.log(secretTeam.team);

function yourGuess() {

  let guessInput = document.getElementById('input').value;
  document.getElementById('input').disabled = true;
  document.getElementById('flowUp').style.height = "45vh";

  if (secretTeam.team.indexOf(guessInput) !== -1) {
    document.getElementById('answer').innerHTML = 'Correct!' + " " + secretTeam.team;
    document.getElementById('answer').style.backgroundColor = "green";
  } else {

    document.getElementById('answer').innerHTML = 'Wrong!' + " " + "it's" + " " + secretTeam.team;
    document.getElementById('answer').style.backgroundColor = "red";
  }
  document.getElementById('divTeam').style.backgroundColor = "rgba(29, 18, 94, 0.7)"
  document.getElementById('divTeam').style.border = '1px solid rgba(255, 255, 255, 0.7)';
  document.getElementById('flowUp').style.backgroundImage = `url(${secretTeam.coverUrl})`;
  document.getElementById('symbol').innerHTML = `<img src="${secretTeam.SymbolUrl}">`;
  document.getElementById('details').innerHTML = `<h2>${secretTeam.team}</h2><p class="pDetails">Last finish: ${secretTeam.lastFinish}<p><p class="pDetails">Establish year: ${secretTeam.year}<p><p class="pDetails">Stadium: ${secretTeam.stadium}<p>`;
}

function refresh() {
  location.reload();
}










