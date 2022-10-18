function heapInsert(arr, i) {
    while (arr[i] > arr[ Math.floor((i - 1) / 2)]) {
        swap(arr, i, Math.floor((i - 1) / 2));
        i = Math.floor((i - 1) / 2);
    }
}

function heappify(arr, index, heapSize) {
    //左孩子下标
    let left = 2 * index + 1;
    let larger;
    let largest;
    while (left < heapSize) {
        larger = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
        largest = arr[larger] > arr[index] ? larger : index;
        if (largest == index) {
            break;
        }
        swap(arr, largest, index);
        index = largest;
        left = 2 * index + 1;
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function heapSort(arr) {
    if (arr.length < 2) {
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        heapInsert(arr, i);
    }
    let heapSize = arr.length;
    swap(arr, 0, --heapSize);
    while (heapSize > 0) {
        heappify(arr, 0, heapSize);
        swap(arr, 0, --heapSize);
    }
}

let arr = [2,3,1,5,1,2,3,1,4,6,67435,322];
heapSort(arr);
console.log(arr);