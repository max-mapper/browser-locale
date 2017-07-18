module.exports = function browserLocale () {
  var lang;

  if (navigator.userLanguage) {
    // IE only
    lang = navigator.userLanguage;
  } else if (navigator.language) {
    // latest versions of Chrome, Firefox, Edge and Safari set this correctly
    lang = navigator.language;
  } else if (navigator.browserLanguage) {
    // used by Edge
    lang = navigator.browserLanguage;
  } else if (navigator.languages && navigator.languages.length) {
    // latest versions of Chrome and Firefox set this correctly
    lang = navigator.languages[0];
  }

  return lang;
}
