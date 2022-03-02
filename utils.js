// Chunk
// Creates an array of elements split into groups the length of size.
// If array can’t be split evenly, the final chunk will be the remaining elements.
export const chunk = (arr, chunkSize = 1, cache = []) => {
    const tmp = [...arr]
    if (chunkSize <= 0) return cache
    while (tmp.length) cache.push(tmp.splice(0, chunkSize))
    return cache
}

// Drop
// Creates a slice of array with n elements dropped from the beginning.
export const drop = (arr, n = 1) => arr.slice(n)

// DropRight
// Creates a slice of array with n elements dropped from the end.
export const dropRight = (arr, n = 1) => arr.slice(0, -n || arr.length)


// FindLastIndex
// This method is like _.findIndex except that it iterates over elements of collection from right to left.
export const findLastIndex = (arr, func) => {
    const reverseIdx = [...arr].reverse().findIndex(func)
    return reverseIdx === -1 ? reverseIdx : arr.length - (reverseIdx + 1)
}


// Intersection
// Creates an array of unique values that are included in all given arrays.
export const intersection = (arr, ...args) => arr.filter(item => args.every(arr => arr.includes(item)))

// IntersectionBy
// This method is like _.intersection except that it accepts iteratee which is
// invoked for each element of each arrays to generate the criterion by which
// they’re compared. The order and references of result values are determined
// by the first array. The iteratee is invoked with one argument: (value).
export const intersectionBy = (arr, ...args) => {
    let iteratee = args.pop()
    if (typeof iteratee === 'string') {
        const prop = iteratee
        iteratee = item => item[prop]
    }

    return arr.filter(item1 =>
        args.every(arr2 => arr2.find(item2 => iteratee(item1) === iteratee(item2)))
    )
}
