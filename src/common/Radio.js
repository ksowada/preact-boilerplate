//
// # Radio as event bus
// date: 171229  edit: 171229 version: 1.0 so
// * use Radio.on("event")
// * use Radio.trigger("event")
// https://github.com/AmpersandJS/ampersand-events
let Events = require('ampersand-events');

module.exports = Events.createEmitter();