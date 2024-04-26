//Have taken 0 and 1 in Neither Category. I hope those are only the ones that are not prime and composite  

//main function to calculate the number of Prime, Composite or Neither.
function calculate() {
    const input = document.getElementById('numbersInput').value;
    if (input.trim() !== '') {
        const numbers = input.split(',').map(num => parseInt(num.trim(), 10));

        const primeCountForLoop = countPrimeNumbersForLoop(numbers);
        const compositeCountForLoop = countCompositeNumbersForLoop(numbers);
        const neitherCountForLoop = countNeitherForLoop(numbers);

        const primeCountForEach = countPrimeNumbersForEach(numbers);
        const compositeCountForEach = countCompositeNumbersForEach(numbers);
        const neitherCountForEach = countNeitherForEach(numbers);

        const primeCountMap = countPrimeNumbersMap(numbers);
        const compositeCountMap = countCompositeNumbersMap(numbers);
        const neitherCountMap = countNeitherMap(numbers);

        document.getElementById('forLoopResult').textContent = `Prime Numbers: ${primeCountForLoop}, Composite Numbers: ${compositeCountForLoop}, Neither: ${neitherCountForLoop}`;
        document.getElementById('forEachLoopResult').textContent = `Prime Numbers: ${primeCountForEach}, Composite Numbers: ${compositeCountForEach}, Neither: ${neitherCountForEach}`;
        document.getElementById('mapMethodResult').textContent = `Prime Numbers: ${primeCountMap}, Composite Numbers: ${compositeCountMap}, Neither: ${neitherCountMap}`;
    } else {
        alert('Please enter some numbers separated by commas.');
    }
}

//Via For Loop 
function countPrimeNumbersForLoop(numbers) {
    let primeCount = 0;
    for (let number of numbers) {
        if (isPrime(number)) {
            primeCount++;
        }
    }
    return primeCount;
}

function countCompositeNumbersForLoop(numbers) {
    let compositeCount = 0;
    for (let number of numbers) {
        if (!isPrime(number) && number !== 1) {
            compositeCount++;
        }
    }
    return compositeCount;
}

function countNeitherForLoop(numbers) {
    let neitherCount = 0;
    for (let number of numbers) {
        if (number == 0 || number == 1) {
            neitherCount++;
        }
    }
    return neitherCount;
}

//Via For Each Loop
function countPrimeNumbersForEach(numbers) {
    let primeCount = 0;
    numbers.forEach(number => {
        if (isPrime(number)) {
            primeCount++;
        }
    });
    return primeCount;
}

function countCompositeNumbersForEach(numbers) {
    let compositeCount = 0;
    numbers.forEach(number => {
        if (!isPrime(number) && number !== 1) {
            compositeCount++;
        }
    });
    return compositeCount;
}

function countNeitherForEach(numbers) {
    let neitherCount = 0;
    numbers.forEach(number => {
        if (number == 0 || number == 1) {
            neitherCount++;
        }
    });
    return neitherCount;
}

//Via Map 
function countPrimeNumbersMap(numbers) {
    return numbers.map(number => isPrime(number)).filter(Boolean).length;
}

function countCompositeNumbersMap(numbers) {
    return numbers.map(number => !isPrime(number) && number !== 1).filter(Boolean).length;
}

function countNeitherMap(numbers) {
    return numbers.map(number => number == 0 || number == 1).filter(Boolean).length;
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}