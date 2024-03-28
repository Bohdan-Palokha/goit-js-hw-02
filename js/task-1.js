function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;
    const messageTrue = `Insufficient funds!`;
    const messageFalse = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    if (totalPrice > customerCredits) {
        console.log(messageTrue)
    } else {
        console.log(messageFalse)
    }
    return messageFalse
}

console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000));
console.log(makeTransaction(8, 2000, 10000));
console.log(makeTransaction(10, 500, 5000)); 