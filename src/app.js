const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

for (let row = 0; row < 8; row++) {
    for (let col of cols) {
        let htmlSquare = document.createElement('div')
        htmlSquare.setAttribute('id', `${col}${row}`)
    }
}
