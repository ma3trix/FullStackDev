/* 
function sum(a, b) {
    console.log(a + b)
}

function makeCallBack(x, y, fn) {
    if (x >= y) {
        fn(100, 200)
    } else {
        console.log("x must be >= y")
    }
}

makeCallBack(100, 200, sum)

*/



function makeApiCall(x, success, failre) {
    if (x == 200) {
        success()
    } else {
        failre()
    }
}

makeApiCall(200, () => {
    console.log("Success")
}, () => {
    console.log("Failure")
})

makeApiCall()