# React vs Webcomponents
Im Zuge eines anderen Projektes muss ich mich zwischen React und Webcomponents entscheiden. Um diese Entscheidung leichter fällen zu können und um auch in Zukunft ein besseres Verständnis von Webcomponents zu haben will ich in diesem Repo die unterschiede und gleichheiten der beiden Technologien untersuchen. Dies will ich machen, in dem ich eine Simple ToDo App sowohl mit Webcomponents als auch mit React programmiere.


| Webcomponents |  |  React | 
:-:|:--:|:-:
<img src="webcomponents.png" alt="Markdown Monster icon" width="200px"/>  | VS | <img src="react.png" alt="Markdown Monster icon" width="200px"/>


## Setup
### React
Um eine React app aufzusetzen muss zuerst node und npm installiert sein. Anschließend kann die node app "create-react-app" verwendet werden.
```bash
npx create-react-app todo-app
```
Will man dann die App Starten kann man dies einfach mit folgendem Befehl machen
```
npm run start
```

### Webcomponents
Um eine App mit Webcomponents aufzusetzen muss lediglich eine ```index.html``` und ```index.js``` erstellt werden. Da diese App ja nicht gebuildet werden muss kann die App einfach mit einem beliebigen server bereitgestellt werden. Zum Beispiel:
```bash
php -S localhost:8080
```



## Ordnerstrucktur
### React
In React hab ich einen ```/public``` ordner. Darin werden die fertig compilierten Javascript Dateien gespeichert. Dies ist auch der Ordner der über die Website erreichbar ist.
In dem Ordner ```/src``` sind die source datein der App gespiechert. Die Hauptdatei bildet hierbei die ```App.js```. Darin werden alle eizelnen Komponenten zu einer App zusammengeführt.
In dem Ordner ```/components``` und dessen Unterordner finden sich dann die einzelnen Komponenten aus denen sich unser App zusammensetzt.

### Webcomponents
Für die Webcomponents gibt es lediglich einen ```/src``` Ordner. Darin sind gibt es wiederum einen ```/components``` Ordner. In diesem sind alle Komponenten der App. Im Ordner ```prototypes``` werden abstact classen gespeichert. Die relativ komplexe Webcomponents API wird so teilweise wesentlich vereinfacht. Die Datei ```helpers.js``` beinhaltet dann noch zusätzliche funktionen welche die API weiter vereinfachen.

## Komponenten
Die app besteht aus 6 Komponenten.
* App - die App komponente selber
* Überschrift - Die Überschrift der App
* Card - Hintergrund für die Todos
* Spacer - Ein einfacher abstandhalter
* Todo - Eine Checkbox mit Text daneben
* Button - Der "Neues ToDo" Button

### React
In React wird jede Komponente als Funktion definiert und anschließend mit ```default export ``` exportiert. Die Funktion akzepiert dabei parameter, mit denen dinge wie onClick funktionen, text, oder sonstiges der Komponente übergeben werden könne. Auch hat die Komponente zugriff auf dessen Child elemente. So ist die ```Card``` Komponente ein einfaches ```div``` Element welches die Child Elemente der Card Komponente umschließt.

### Webcomponents
Mit der Webcomponents API werden objecte als Klassen definiert. Gemeinsam mit der MutationObserver API können dann attribute oder children change events abgefangen werden und die Komponente kann sich selber neu rendern. HTML muss bei Webcomponents entweder als String oder mit ```document.createElement(...)``` erstellt werden. Hier könnte man natürlich aus JSX verwenden, in dem fall müsse man aber wieder einen compile Schritt einführen, denn ich auf jeden Fall vermeiden will!

## Logic
### React
React bietet die Möglichkeit, über hooks einen gewissen "State" in die App zubringen. Die beiden meist genutzten Hooks sind ```useState``` und ```useEffect```.
Ersterer dient der erstellung von reaktiven Variablen. Also einer Variable, die, wenn sie geändert wird, ein rerendern triggert.
Letzterer kann genutzt werden um bestimmten code Auszuführen sobald sich eine solche reaktive Variable ändert.

### Webcomponents
Die Webcomponents API gibt keine art von logic vor! Es bietet sich aber an, über standart Js Events zu kommunizieren! Theoretisch ist es aber auch ohne weiteres möglich keine Library wie BaconJS zu verwenden um reactive Variablen gemeinsam mit Webcomponents zu verwenden

## Vergleich
### Speicher
#### React
Das React Projekt ist 260 MB groß, wovon 551.1 kB beim aufrufen der App an den Browser gesendet werden.
#### Webcomponents
Das Projekt ist 26.3 kB groß, wovon 26.3 kB beim aufrufen der App an den Browser gesendet werden.
### Geschwindigkeit
#### React
Das erste Laden dauert 668ms.
In React dauert es von dem Zeitpunkt, andem man auf "OK" clickt 49ms bis man das Todo in der Liste sieht.
#### Webcomponents
Das erste Laden dauert 344ms.
Mit Webcomponents dauert es von dem Zeitpunkt, andem man auf "OK" clickt 42ms bis man das Todo in der Liste sieht.
### Useability
#### React
React bietet von haus aus, dank features wie JSX und die reaktiven variablen eine sehr gute useability
#### Webcomponents
Von haus aus ist die API für Webcomponents eher kompliziert. Auch der fehlende JSX support macht die Bedienung eher schwierig. Dies sind jedoch beides Probleme die durch einfach Libraryies gelöst werden können!