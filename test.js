//


const {fromDollarToYen} = require('./app.js');

test('verifica que el precio de 1 dolar a yen sea 146.26', () =>{
    let dolToYen = fromDollarToYen(1)

    expect(dolToYen).toBe(146.26168224299064)
}) 

const {fromYenToPound} = require('./app.js');

test('verifica que el precio de 1000 yen a Pound sea 5.559105431309905', () =>{
    let yenToPound = fromYenToPound(1000)

    expect(yenToPound).toBe(5.559105431309905)
})
