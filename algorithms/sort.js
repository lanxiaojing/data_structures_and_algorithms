function quickSort(arr, start = 0, end) {
    if (end <= start) {
        return
    }
    end = end || arr.length - 1

    let curr = arr[start]
    let i = start
    let j = end + 1
    while (true) {
        while (arr[++i] < curr) {
            if (i === j) {
                break
            }
        }
        while (arr[--j] > curr) {}
        if (i >= j) {
            break
        }
        exchange(arr, i, j)
    }
    exchange(arr, start, j)

    quickSort(arr, start, i - 1)
    quickSort(arr, i + 1, end)

    function exchange(arr, x, y) {
        let t = arr[x]
        arr[x] = arr[y]
        arr[y] = t
    }
}

let arr = [5, 3, 27, 2, 5, 0]
quickSort(arr)
console.log(arr)
