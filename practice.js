function solution(arr) {
    if(arr.length === 1){
        return [-1]
    }
    const minValue = Math.min(...arr);
    // arr.indexOf(minValue);
    arr.splice(arr.indexOf(minValue),1);
    return arr;

}
console.log(solution([4,3,2,1]));

// const test = [1,2,3,4]
// const a = test.splice(1,1)
// console.log(a) // [2]
// console.log(test) //[1,3,4]