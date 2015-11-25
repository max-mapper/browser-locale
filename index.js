module.exports = function() {
  var lang
  
  if (navigator.languages) {
    // chrome does not currently set navigator.language correctly https://code.google.com/p/chromium/issues/detail?id=101138
    // but it does set the first element of navigator.languages correctly
    lang = navigator.languages[0]
    if (!lang) {
      // chrome mobile otherwise returns undefined
      lang = navigator.language
    }
  } else if (navigator.userLanguage) {
    // IE only
    lang = navigator.userLanguage
  } else {
    // as of this writing the latest version of firefox + safari set this correctly
    lang = navigator.language
  }
  
  return lang
}
