/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    const characters = s.split('').map((el, idx) => idx % 2 === 1 ? Number(el) : el).map((el,idx,array) => typeof el === 'number' ? String.fromCharCode(s.charCodeAt(idx-1) + el) : el).join('')
    return characters;
    

};