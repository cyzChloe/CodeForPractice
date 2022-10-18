function quickSort(arr){
    if(arr.length<2){
        return arr;
    }
    let pivotIndex = Math.floor(arr.length/2);
    let pivot = arr[pivotIndex];
    let leftArr = [];
    let rightArr = [];
    let midArr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            leftArr.push(arr[i]);
        }
        if(arr[i]>pivot){
            rightArr.push(arr[i]);
        }
        if(arr[i] == pivot){
            midArr.push(pivot);
        }
    }
    return [...quickSort(leftArr),...midArr,...quickSort(rightArr)];

}
let arr = [12,3,4,45,6,7,3,54,9,2,4,6,4];
console.log(quickSort(arr));
