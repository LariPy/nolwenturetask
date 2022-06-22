// if used:

// gets data
// reads data
// sends to parser
// (why not parse here?)

const fs = require('fs')

let text = null;

fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    text = data
})

const Read = () => {
    return(
        text
    )
}


export default Read;