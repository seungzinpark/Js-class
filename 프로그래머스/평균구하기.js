// 1) 평균 구하기
arr = [5,5]
function solution(arr){
    let len = arr.length;
    let sum = 0;
    let avg = 0;
    for(let i=0;i<len;i++){
        sum += arr[i];
    }
    avg = sum / len;
    return avg
}
const result = solution(arr);
console.log("avg",result);