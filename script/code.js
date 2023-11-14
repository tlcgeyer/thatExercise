function displayMiddleNumber(numbers) {
    let middleIndex = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        // If the array size is even, return two elements
        let middleNumbers = numbers.slice(middleIndex - 1, middleIndex + 1);
        console.log("Middle Numbers:", middleNumbers);
    } else {
        // If the array size is odd, return a single element
        let middleNumber = numbers[middleIndex];
        console.log("Middle Number:", middleNumber);
    }
}

// Example usage with the provided array
let numbers = [12, 18, 11, 5, 8, 2];
displayMiddleNumber(numbers);
