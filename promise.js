var p1 = new Promise((resolve, reject) => {
    if (10 > 2) {
        resolve()
    } else {
        reject()
    }
})

p1.then(() => {
    console.log("success")
}, () => {
    console.log("Reject")
})

p1.then(() => {
    console.log("success")
}).catch(() => {
    console.log("Reject")
})