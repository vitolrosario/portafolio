function loadGoogleTranslate() {
    new google.translate.TranslateElement({
      pageLanguage: 'es', 
      includedLanguages: 'en,es', 
      autoDisplay: true, 
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    //   layout: google.translate.TranslateElement.FloatPosition.TOP_RIGHT// seems to be the same as SIMPLE

    }, "google_element");
}

function translateTo(lang) {
    var frame = document.querySelector('iframe.skiptranslate');
    if (frame) {
      var frameDoc = frame.contentDocument || frame.contentWindow.document;
      var langElements = frameDoc.querySelectorAll('span.text');
      langElements.forEach(function(element) {
        if (element.innerText.trim() === lang) {
          element.click();
        }
      });
    }
}

function goBackToSpanish() {
    var iframe = document.querySelector('.skiptranslate iframe');
    if(!iframe) return;

    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var restore_el = innerDoc.getElementsByTagName("button");

    for(var i = 0; i < restore_el.length; i++){
      if(restore_el[i].id.indexOf("restore") >= 0) {
        restore_el[i].click();
        var close_el = innerDoc.getElementById(":2.close");
        close_el.click();
        return;
      }
    }
  }
  