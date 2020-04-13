/*
promisses são linhas que serão execuatadas em paralelo e não atrapalharam a execução do programa
*/

axios.get('https://api.github.com/users/biellbatista')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
