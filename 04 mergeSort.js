function merge(leftArr, rightArr) {
    let m = 0;
    let n = 0;
    let lenLeftArr = leftArr.length;
    let lenRightArr = rightArr.length;
    let res =  [];
    while (m < lenLeftArr && n < lenRightArr) {
        leftArr[m] <= rightArr[n] ? res.push(leftArr[m++]) : res.push(rightArr[n++]);
    }
    while (m < lenLeftArr) {
        res.push(leftArr[m++]);
    }
    while (n < lenRightArr) {
        res.push(rightArr[n++]);
    }
    return res;
}


function mergeSort(arr) {
    if(arr.length<2){
        return arr;
    }
    let mid = 0+(arr.length-0)>>1;
    let leftArr = arr.slice(0, mid);//不能用mid+1结束，很有可能该数组长度为2，则mid = 1，而1+1该下标在数组中不存在
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

let arr = [1, 333, 5, 4, 3, 6, 8, 7, 95, 4, 3, 67];
let a = mergeSort(arr);
console.log(a);