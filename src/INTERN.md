
## contents
```
index.json      real data layer
cell/           real data handling
resources/      real data interpration
controls/       view data handlung
backbone/       renders controls
templates/      templating controls in html
```
- data layer real data depends on server or static
### resources
- deals with OOP
- interpates the logic of real data
- stores data reduced to essentials
- handles with actions to set view controls
## implementation details
```
Backbone <=> Localstorage
models        data storage
templates     show html implementation
views         interface viewbox
controller.js handles actions
route.js      actions in hierarchy
hierarchy.js  low-level hierarchy
index.json    delivers hierarchic file as ditamap given
```
### sequencing
```
index.html
globals.js
index.js
 - index.json
 - _.templates
AppView.js
```
### interpolations
```
index.json ==actions=> commands ==react=> dom
action => reaction
```
### commands content
```
commands = {
  ui:         template,
  uimode:     template-mode,
  route:      url,
  hier:       hierarchy-info,
  highlight:  option,
  commands:   {sub resources},
  roles:      [node, parent...] // class for styling
}
```
### resource mapper
```
resources     Groupes
mapper        maps resources to React
=> React.Component
```
## code convention
### pipe each process dataIn
```
export function pipe(dataIn){
  return _.extends(dataIn,{
    affected=true
  }
}
dataOut = pipe(dataIn);
```