export const randomNumber = (arrays, numberMax) => {
    var number = Math.floor(Math.random() * numberMax + 1)
    arrays.map((num, index) => {
        if (Number(num) === Number(number)) {
            arrays.splice(index, 1)
            randomNumber(arrays)
        }
    })
    arrays.push(number)
}