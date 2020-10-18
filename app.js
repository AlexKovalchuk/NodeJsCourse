const validator = require('validator');
const {getNotes} = require('./note');

const msg = getNotes();
console.log('msg:', msg)

console.log(validator.isEmail('alex@gmail.com'))
console.log(validator.isURL('http://mtl-blade16-10.cerence.net:28661/dialog/#/dialogs/16420/develop/477397605/dtable?clientData=ALL_DATA'))
