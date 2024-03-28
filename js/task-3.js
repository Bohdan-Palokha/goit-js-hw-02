console.log("sale".toLowerCase())
console.log("sale".toUpperCase())
console.log("spam".toLowerCase())
console.log("spam".toUpperCase())

function checkForSpam(message) {
    if (message = `sale`) {
        console.log(true)
    } else if (message = `spam`) {
        console.log(true)
    } else {
        console.log(false)
    }

    return message;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
