# Weather-API

In diesem Projekt erstelle ich eine kleine aber feine Webseite welche Abfragen von einer Wetter "[OpenWeather](https://openweathermap.org/api)". Das Projekt wird mit Pure JavaScript gebaut um mein können mit JS unterbeweis zustellen.

---

# Dokumentation

### 12.11.2024
Projekt Start!!! Zuerst habe ich mit der HTML-Struktur angefangen und nach passenden API's für die Wetterabfrage gesucht. Habe mich dann für eine API entschieden. Diese habe ich dann kommentiert im JS Code hinterlegt.

### 13.11.2024
Heute war ich sehr produktiv! Ich habe weiter an der HTML & CSS Struktur gearbeitet, die jetzt sehr schön aussieht. Klar könnte man es Professionell schöner darstellen, aber dieses Projekt sollte mir mehr JavaScript können zeigen. Hauptsächlich habe ich mich dann mit dem Async / Await und Fetch von JavaScript auseinandergesetzt. Kam sehr schnell zurecht und ich habe die Funktion fertig gebaut. Dann habe ich noch Vorbereitungen für die Searchbar gemacht, die ich bauen möchte.

Weitere Informationen zu [JavaScript Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### 14.11.2024
Heute habe ich mir etwas Zeit genommen, um weiter am Projekt zu arbeiten. Ich habe die Suchfunktion neu eingebaut und den bestehenden Code gerefactored. Sehr wichtig war der Abschnitt wie ich die `weatherCard` aufbaue. Diese wurde nun zu einer Funktion erweitert, die den Parameter `JsonData` enthält, der die empfangenen Wetterdaten enthält.

Für die Suchfunktion habe ich ein PopUp mit CSS Styling in HTML eingebaut. Zuerst wollte ich mit einem generierten PopUp beginnen, aber ich fand, es wiederholte sich und ich wollte es ausprobieren, also entschied ich mich, die HTML-Struktur zu nehmen und mit den Selektoren `getElementById` und `getElementByClasName` Elemente erscheinen oder verschwinden zu lassen. Es würden 2 Methoden funktionieren. Entweder man macht es:
```js
obj.style.display = "none";

obj.style.display = "flex";
```
oder mit der Variante, für die ich mich letztendlich nicht entschieden habe:
```js
obj.classList.add('show');
obj.classList.remove('show');
```

# Possible Addition
- [ ] Current Location Grep
- [ ] Schöneres UI
- [ ] Daten abfragen und Anhand der Daten eine Einleitung einbauen. z.B Heute ist ein schönes Wetter...