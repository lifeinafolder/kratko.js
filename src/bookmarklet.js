javascript:(function(){var el=document.createElement('script');el.src='https://github.com/kangax/kratko.js/raw/master/src/kratko.js';el.onload=function(){new TableViewer(Kratko.getStatsFor(window[window.prompt('Which object to inspect?')]))};document.getElementsByTagName("head")[0].appendChild(el)})();