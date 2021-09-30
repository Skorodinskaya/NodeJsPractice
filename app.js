// - у вас є масив юзрів (до 10), з такими полями наприклад - const users = [
//     { name: 'olya', gender: 'female', age: 20 }
//         ...
// ], вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olya.txt),
// вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
// перед тим створити 4 папки (програмно) - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// і розподілити ваших юзерів саме по відповідних папках
const fs = require('fs');
const path = require('path');

const mkdirPath1 = path.join(__dirname, 'files', 'manOlder20');
const mkdirPath2 = path.join(__dirname, 'files', 'manYounger20');
const mkdirPath3 = path.join(__dirname, 'files', 'womanOlder20');
const mkdirPath4 = path.join(__dirname, 'files', 'womanYounger20');

const users = [
    {name: 'olya', gender: 'female', age: 14},
    {name: 'nastya', gender: 'female', age: 20},
    {name: 'iryna', gender: 'female', age: 29},
    {name: 'misha', gender: 'male', age: 16},
    {name: 'sasha', gender: 'male', age: 56},
    {name: 'nadia', gender: 'female', age: 4},
    {name: 'petro', gender: 'male', age: 26},
    {name: 'ivan', gender: 'male', age: 10}
];

// fs.mkdir(mkdirPath, {recursive: true}, (e) => {
//     console.log(e)
// });
//
// fs.mkdir(mkdirPath2, {recursive: true}, (e) => {
//     console.log(e)
// });
//
// fs.mkdir(mkdirPath3, {recursive: true}, (e) => {
//     console.log(e)
// });
//
// fs.mkdir(mkdirPath4, {recursive: true}, (e) => {
//     console.log(e)
// });
// fs.appendFile(appendFile, `{'name': 'olya', 'gender': 'female', 'age': 14}`, (err) => {
//     console.log(err)
// })


users.forEach(item => {
    if(item.gender === 'female' && item.age < 20) {
        fs.writeFile(path.join(mkdirPath4, `${item.name}.json`), JSON.stringify(item), (err) => {
            if (err) {
                console.log(err)
            }
        })

        return;
    }

    if(item.gender === 'female' && item.age >= 20) {
        fs.writeFile(path.join(mkdirPath3, `${item.name}.json`), JSON.stringify(item), (err) => {
            if (err) throw err;
        })

        return;
    }
    if(item.gender === 'male' && item.age >= 20) {
        fs.writeFile(path.join(mkdirPath1, `${item.name}.json`), JSON.stringify(item), (err) => {
            if (err) throw err;
        })

        return;
    }

    if(item.gender === 'male' && item.age <= 20) {
        fs.writeFile(path.join(mkdirPath2, `${item.name}.json`), JSON.stringify(item), (err) => {
            if (err) throw err;
        })

        return;
    }

    console.log(item)
})
