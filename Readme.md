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
TODO

## Ordnerstrucktur
### React
In React hab ich einen ```/public``` ordner. Darin werden die fertig compilierten Javascript Dateien gespeichert. Dies ist auch der Ordner der über die Website erreichbar ist.
In dem Ordner ```/src``` sind die source datein der App gespiechert. Die Hauptdatei bildet hierbei die ```App.js```. Darin werden alle eizelnen Komponenten zu einer App zusammengeführt.
In dem Ordner ```/components``` und dessen Unterordner finden sich dann die einzelnen Komponenten aus denen sich unser App zusammensetzt.

### Webcomponents
TODO

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
TODO

## Logic
### React
React bietet die Möglichkeit, über hooks einen gewissen "State" in die App zubringen. Die beiden meist genutzten Hooks sind ```useState``` und ```useEffect```.
Ersterer dient der erstellung von reaktiven Variablen. Also einer Variable, die, wenn sie geändert wird, ein rerendern triggert.
Letzterer kann genutzt werden um bestimmten code Auszuführen sobald sich eine solche reaktive Variable ändert.