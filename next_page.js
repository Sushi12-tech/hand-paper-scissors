function toggleRules() {
    var div = document.getElementById('rules-container');
    if (div.style.display !== 'none') {
      div.style.display = 'none';
    } else {
      div.style.display = 'block';
    }
  }
  function closeRulesContainer() {
    document.getElementById("rules-container").style.display = "none";
  }
  