//选择排序: 从前往后排序，记录最小值的index
// function selectionSort(arr){
//     if(arr.length <2){
//         return arr;
//     }
//     for(let i=0;i<arr.length-1;i++){
//         let minIndex = i;
//         for(let j = i;j <arr.length-1;j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j;
//             }
//         }
//         if(minIndex !== i){
//             arr[minIndex] = arr[i]^arr[minIndex];
//             arr[i] = arr[minIndex]^arr[i];
//             arr[minIndex] = arr[i]^arr[minIndex];
//         }
//     }
//     return arr;
// }


// 选择排序：遍历一次数组，但往前比较
function  selectionSort(arr){
    if(arr.length <2){
        return arr;
    }
    for(let i = 1;i<arr.length;i++){
        for(let j = i;j>0;j--){
            if(arr[j-1]>arr[j]){
                arr[j] = arr[j-1]^arr[j];
                arr[j-1] = arr[j]^arr[j-1];
                arr[j] = arr[j]^arr[j-1];
            }
        }
    }
    return arr;
}
let arr = [2,3,5,4,32,5,7,9,1,2,1000];
console.log(selectionSort(arr));
