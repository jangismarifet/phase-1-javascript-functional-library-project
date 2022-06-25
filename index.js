function myEach(collection, callback) {
    if (typeof collection === 'object') {
        let arrayOfCollection = Object.values(collection);
        for (let i = 0; i < arrayOfCollection.length; i++) {
            callback(arrayOfCollection[i])
        }
    }
    else {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i])
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let resultArray = []
    if (typeof collection === 'object') {
        let arrayOfCollection = Object.values(collection);
        for (let i = 0; i < arrayOfCollection.length; i++) {
            resultArray.push(callback(arrayOfCollection[i]))
        }
    }
    else {
        for (let i = 0; i < collection.length; i++) {
            resultArray.push(callback(collection[i]))
        }
    }
    return resultArray;
}

function myReduce(collection, callback, acc) {
    let accumulator = acc === undefined ? 0 : acc;
    let arr;
    if (typeof collection === "object") {
        arr = Object.values(collection)
    }
    else {
        arr = collection;
    }
    for (let i=0;i<arr.length;i++) {
        accumulator = callback(accumulator, arr[i], arr);
    }     
    return accumulator;
}

function myFind(collection, predicate) {
    let arr = typeof collection === "object" ? Object.values(collection) : collection;
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
            return arr[i];
        }
        else {
            return undefined;
        }
    }
}

function myFilter(collection,predicate) {
    let arr = typeof collection === "object" ? Object.values(collection) : collection;
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
            resultArray.push(arr[i])
        }
    }
    return resultArray;
}

function mySize(collection) {
    let arr = typeof collection === "object" ? Object.values(collection) : collection;
    return arr.length;
}

function myFirst(collection, n) {
    let numOfElements = n === undefined ? 1 : n;
    let arr = typeof collection === "object" ? Object.values(collection) : collection;
    if (numOfElements === 1) {
        return arr[0];
    }
    else {
        let resultArray = []
        for (let i = 0; i < numOfElements; i++) {
            resultArray.push(arr[i]);
        }
        return resultArray;
    }
}

function myLast(collection, n) {
    let numOfElements = n === undefined ? 1 : n;
    let arr = typeof collection === "object" ? Object.values(collection) : collection;
    if (numOfElements === 1) {
        return arr[arr.length-1];
    }
    else {
        let resultArray = []
        for (let i = numOfElements; i > 0; i--) {
            resultArray.push(arr[arr.length-i]);
        }
        return resultArray;
    }
}

function myKeys(obj) {
    return Object.keys(obj)
}
function myValues(obj) {
    return Object.values(obj)
}