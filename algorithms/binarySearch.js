function rank(target, arr) {
    let start = 0
    let end = arr.length - 1
    while(start < end) {
        let mid = Math.ceil((end + start) / 2)
        if(arr[mid] === target) {
            return mid
        }
        if(arr[mid] > target) {
            end = mid - 1
        }
        if(arr[mid] < target) {
            start = mid + 1
        }
    }
    return -1
}