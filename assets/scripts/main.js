$("pre").each(function() {
  var el = $(this),
  type = el.data("type"),
  codeInside = el.find("code"),
  isCodeInside = codeInside.length, // does it or not?
  HTML = "",
  CSS = "",
  JS = "";

  if (type == "html") {
    if (codeInside) {
      HTML = codeInside.html();
    } else {
      HTML = el.html();
    }
  } else if (type == "css") {
    if (codeInside) {
      CSS = codeInside.html();
    } else {
      CSS = el.html();
    }
  } else if (type == "js") {
    if (codeInside) {
      JS = codeInside.html();
    } else {
      JS = el.html();
    }
  }

  var data = {
    html               : HTML,
    css                : CSS,
    js                 : JS
  };

  var JSONstring = 
  JSON.stringify(data)
    // Quotes will screw up the JSON
    .replace(/"/g, "&​quot;") // careful copy and pasting, I had to use a zero-width space here to get markdown to post this.
    .replace(/'/g, "&apos;");
  
  var form = 
  '<form action="https://codepen.io/pen/define" method="POST" target="_blank">' + 
    '<input type="hidden" name="data" value=\'' + 
      JSONstring + 
      '\'>' + 
    '<input type="image" src="http://s.cdpn.io/3/cp-arrow-right.svg" width="40" height="40" value="Create New Pen with Prefilled Data" class="codepen-mover-button">' +
  '</form>';

  el.append(form);

});