var franc = require('franc');
var langs = require('./lang.json');

var rtlLangCodes = ['urd', 'fas', 'heb', 'arb', 'aii', 'ckb'];

module.exports = {
    toName: function (code) {
        return langs[code];
    },
    detect: function (text, returnName) {
        var code = franc(text);
        if (returnName)
            return langs[code];
        else
            return code;
    },
    isRTL: function (text) {
        return rtlLangCodes.indexOf(franc(text)) > -1;
    }
};