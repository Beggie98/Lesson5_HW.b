let data = receipt()

console.log(data);

let del = 9000

let word =''

let sum = 0

for (let key in data){
    all = `${key} ${data[key]['info']}, `
    word = all + word
    sum = sum + data[key]['price']
} 

let total = sum + del

console.log(`Вы заказали ${word} | Общая стоимость ${total} сумм с доставкой (9000)`);