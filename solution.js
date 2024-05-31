function fizzbuzzTest (j){
    if (j % 5 === 0 && j % 3=== 0){
        return `${j} FizzBuzz`
    }
    else if(j % 3 === 0){
        return `${j} Fizz`
    }
    else if(j % 5 === 0){
        return `${j} Buzz`
    }
    else {
        return `${j}`
    }
}
for (let i = 1; i <= 100; i++){
    console.log(fizzbuzzTest(i));
}