// =============================================================================
/*
 * Aula 02 do módulo 03
*/

import axios from 'axios';

class Api {
    static async getUserInfo(userName) {
        try {
            const response = await axios.get(`https://api.github.com/users/${ userName }`);
            console.log(response);
        } catch (err) {
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('biellbatista');
Api.getUserInfo('biellbatistaaa');

// =============================================================================
/*
 * Aula 01 do módulo 03
*/
// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK'); }, 2000);
// });

// // chamando a Promisse no modo antigo
// // minhaPromise().then(response => {
// //     console.log(response);
// // }).catch(err => {
// //     console.log(err);
// // });

// // toda function async vira uma Promisse
// async function executaPromise() {
//     const response = await minhaPromise();

//     console.log(response);
// }

// executaPromise();

// const executaPromise2 = async () => {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// };

// executaPromise2();
