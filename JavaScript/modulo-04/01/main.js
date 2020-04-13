var xhr = new XMLHttpRequest(); // començando uma requisição AJAX para solicitar informações ao servidor

xhr.open('GET', 'https://api.github.com/users/biellbatista'); // acessando a URL
xhr.send(null); // enviando parametros nulo]

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}
