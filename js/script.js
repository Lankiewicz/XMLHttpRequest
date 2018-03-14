var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke'); // znajdujemy odpowiedni przycisk na stronie
button.addEventListener('click', function(){      //podpinamy nasłuchiwanie na zmienną button pobraną powyżej
getJoke();
});

var paragraph = document.getElementById('joke'); // do zmiennej paragraph przypisujemy element DOM paragrafu, który odpowiada za wyświetlenie dowcipu


//Implementacja funkcji getJoke()
function getJoke() {
  var xhr = new XMLHttpRequest();              // Tworzenie nowej instancji obiektu XMLHttpRequest
  xhr.open('GET', url);                        //  Otwarcie połączenia z wybranym adresem
  xhr.addEventListener('load', function(){     //   Do połączenia podpinamy nasłuchiwanie na odpowiedź z serwera
    var response = JSON.parse(xhr.response);   // Callback --> zmienna response do której przypisujemy JSON
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}
$(function() {
	$('p').hide();
});