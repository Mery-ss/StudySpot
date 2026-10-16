# StudySpot 2.0 📚

StudySpot er en mobilapp udviklet i React Native og Expo som er målrettet nye CBS-studerende og har til formål at gøre det nemmere, at finde et passende studiested på og omkring CBS.

## Funktioner

- Oversigt over studiesteder
- Filtrering efter stille steder og gruppearbejde
- Søgning efter navn eller område
- Detaljer om støjniveau, Wi-Fi og strøm
- Mulighed for at gemme favoritsteder
- Lokal lagring af favoritter med AsyncStorage
- Find vej-funktion med Google Maps

## Videreudvikling fra StudySpot 1.0

StudySpot 2.0 bygger videre på den første version.

Følgende forbedringer er implementeret:

1. En søgefunktion, så brugeren lettere kan finde studiesteder.
2. En ny FindWayScreen, hvor brugeren kan åbne et studiested i Google Maps.
3. AsyncStorage, så favoritter gemmes, selvom appen lukkes.
4. En separat datafil til oplysninger om studiestederne.

## Brugerinddragelse

### Første brugeriteration – StudySpot 1.0

I første godkendelsesopgave blev der gennemført to brugerinterviews med fokus på de studerendes behov, udfordringer og oplevelse af appen.

Brugerne efterspurgte blandt andet bedre hjælp til at finde studiesteder og mere information om deres placering.

Denne feedback har været med til at danne grundlag for videreudviklingen af StudySpot 2.0.

### Anden brugeriteration – StudySpot 2.0

I anden godkendelsesopgave er der planlagt tre nye brugerinterviews med CBS-studerende.

Deltagerne skal afprøve appens funktioner, herunder søgning, filtrering, favoritter og Find vej.

Formålet er at undersøge:

- Om appen er nem at bruge.
- Om funktionerne hjælper med at finde passende studiesteder.
- Hvilke funktioner brugerne oplever som mest værdifulde.
- Hvilke forbedringer brugerne efterspørger.
- Om de kunne forestille sig at bruge eller downloade StudySpot.

Resultaterne og refleksionerne dokumenteres i den individuelle rapport.

## Teknologier

- React Native
- Expo
- JavaScript
- React Navigation
- AsyncStorage
- React Native Linking

## Projektstruktur

- `App.js` – Navigation mellem skærmene
- `screens/HomeScreen.js` – Forside
- `screens/StudySpotsScreen.js` – Studiesteder, søgning, filtre og favoritter
- `screens/DetailsScreen.js` – Detaljer om studiesteder
- `screens/FindWayScreen.js` – Find vej via Google Maps
- `data/studySpots.js` – Data om studiesteder
- `styles/GlobalStyle.js` – Fælles styling

## Installation

Installer projektets afhængigheder:

    npm install

Start appen:

    npx expo start

Åbn appen med Expo Go på en telefon.

## Demovideoer

StudySpot 1.0:
[Se demovideo](https://github.com/Mery-ss/StudySpot/blob/main/studyspot-demo.mp4)

StudySpot 2.0:
[Se demovideo](https://github.com/Mery-ss/StudySpot/blob/main/studyspot-demo-2.mp4)

## GitHub

https://github.com/Mery-ss/StudySpot
