function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

module.exports = { sum: add, sub, mul }

class Student {
    constructor(sid, snm) {
        this.sid = sid
        this.snm = snm
    }

    print() {
        console.log(this.sid)
        console.log(this.sid)
    }
}

module.exports = { sum: add, sub, mul, Student }