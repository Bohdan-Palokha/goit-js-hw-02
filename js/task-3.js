
function checkForSpam(message) {

    if (message.includes("sale".toLowerCase())) {
        return true
    } if (message.includes("sale".toUpperCase())) {
        return true
    } if (message.includes("spam".toLowerCase())) {
        return true
    } if (message.includes("spam".toUpperCase())) {
        return true
    } else {
        return false
    }

    // switch (message) {
    //     case message.includes("sale".toLowerCase()):
    //         return true;
    //         break;
    //     case message.includes("sale".toUpperCase()):
    //         return true;
    //         break;
    //     case message.includes("spam".toLowerCase()):
    //         return true;
    //         break;
    //     case message.includes("spam".toUpperCase()):
    //         return true;
    //         break;
    //     default:
    //         return false;
    // }

}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
