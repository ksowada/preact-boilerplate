# app for navigation and views
## layers:
```
REST        URL given
actions     UI inputs and URL change
practice    pipes actions to reactions
reactions   UI build
```
### REST
```
domain/path/selector.extension/suffix?query=parameters
```
### action: specific event of change
- action and reaction hold in action tree
- first level actions are ui inputs and URL change
- first level actions hold as well in separate storage
- each event is traced in history, so you can navigate back
```
action=a1      action=a2    action=a3
 .url          .url          .url
 .open         .focus        .zoom
```
### practise: how to react
```
practise
 .action
  .open
 .reaction
  .navigation
   .level=routebrothers
```
### reaction:
```
reaction=b1    action=a2    action=a3
 .url          .url          .url
 .open         .focus        .zoom
 .action=a1
```
### navigation.levels
different type of structure visibility
```
direct          include root and route
route           breadcrumbs
routebrothers   wise ancestors with family
solo            only node
hierarchy       full hierarchy, pre and suc hierarchy to route
fullcontent     all pages on block on content
```
### navigation element
```
navigation
 .parents
  .brothers
   .title
 .content
 .childs
```
### node element
```
node=n1       node=n2        node=n3
 .url=/        .url=/a        .url=/b
 .zoom=title   .zoom=title    .zoom=content
 .done         .done          .done
  .a1           .b1            .a3
   .url          .url           .url
   .navigate     .brothers      .zoom=content
```
### applications
```
iconic            direction mapping appearance    zoom      styling
----------------  --------- ------- ----------    ----      -------
ch1 ch2 ch3 ch4   grands  > trees > menu        > default > highlight level
par chi chi chi   child   > lists > linepath    > default > highlight node
roo ch1 ch2 ch3   route   > lists > breadcrumbs > default >
roo par nod chi   full    > trees > hierarchy   > default >
```
### resource creator
```
adress        url
direction     route (data-mapping-mode create controls)
mapping       tree  (linear, hier)
appearance    hierarchy (default) (<react>)
styling       highlight hierarchy (default) <options>
zoom          (default)
```
### requirements
- structure sets node appearance
- node may have individual appearance
## interface elements
### node: element with links to other
- node is a resource it is describable
- node have unique uri and unique id
```
 #1   #2 /--*   #6
 O----#----#----*   O root is single node carrys all branch and leaf
       \--#----*    # branch carrys leaf
           \--*     * leaf are childless endings in dirtree files
parents, brothers, childs axis connect neighbour nodes
```
### hierarchical directions
```
all             every node
grands          root elements in limited levels as menu
gone            every node before
root            root node only
route           path from root to node
parent          parent with node
isolated        node only
brother         nodes next
child           node with child
childs          node with all childs
coming          every node past
```
### hierarchical role
```
parents, brothers, childs axis connect neighbour nodes
node is specialised with ui commands, f.e. brothers in navi
cell is a hierachic node
node flawored with information of hierarchical roles
past=action(subject,relation,object,adject)
```
### visual structure
```
list listfixed list     list linear
list listfixed flex
list listfixed list

treeA                   tree hierarchic
| treeB
| | treeC
| |
|
```
### node apperance levels
```
hidden
icon
icon_title
title_shortdesc
content
tags
full
image
link
```
### screen structure
multiple of screen divisions
```
navi1 navi2 navi3
navi1 navi2 navi3
navi1 navi2 navi3

navi content links
navi content links
navi content links
navi content links

content
content
content
content

navi
content
content
content
links
```
### content focus
```
content   single-item

content1  list
content2

content2  unordered-list
content1
```
### box structure
rectangular division of screen in lines and cols
```
<span>          col
<div>           line
<div>           block

col col col col linecol

col col col     blocklocked
col col col

col colcol      blockloose
col co co col

line            blockline
line
line
```
## configuration
### info from html
```
<script type="text/javascript" id="selfinfo">
  var FromPage = {}; // carries info from html
  FromPage.focus = 'Fahrweise/Grundlagen/PhysikGrundlage/Luftwiderstand/Luftwiderstand.php';
  FromPage.index = '../../../../index.json';
  FromPage.url = 'http://spare-benzin.de';
  FromPage.callName = 'navigation';
  Window.FromPage = FromPage;
</script>
```
