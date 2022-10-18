// function sort1(arr,num){
//     //仅分了小于等于区域和 大于区域
//     //时间复杂度O(n),空间复杂度O(1)
//     //小于num区域用left指针，大于num区域用right指针
//     //若arr[i]<=num 则i++且将小于区域的下一个数与arr[i]交换
//     //若arr[i]>num i++
//     let left = -1;
//     let temp;
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]<=num){
//             left++;
//             temp = arr[i];
//             arr[i] = arr[left];
//             arr[left] = temp;
//         }
//     }
//     return arr;
// }
function sort2(arr, num) {
    let right = arr.length;
    let left = -1;
    let temp;
    //如果arr[i]<num,则arr[i]与小于区的下一个交换，并且i++.小于区域右扩充
    //如果arr[i]==num,则不动,i++
    //如果arr[i]>num,则arr[i]与大于区的上一个交换，并且i不动，大于区域左扩充
    for (let i = 0; i < arr.length; i++) {
        if (i == right) {
            return arr;
        }
        if (arr[i] < num) {
            temp = arr[++left];
            arr[left] = arr[i];
            arr[i] = temp;
        }
        if (arr[i] > num) {
            temp = arr[--right];
            arr[right] = arr[i];
            arr[i] = temp;
            i--;
        }
    }
}

let arr = [1, 33, 4, 5, 6, 2, 8, 5, 4, 3, 7, 2, 5, 3, 8, 4];
let num = 5;
console.log(sort2(arr, num))