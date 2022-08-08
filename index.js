function myEach(collection, callBack) {
    const iterableCollection = collection instanceof Array ? collection : Object.values(collection)
for(let i = 0; i < iterableCollection.length; i++) {
    callBack(iterableCollection[i])

}
   return collection; 
}

function myMap(collection, callBack) {
    const iterableCollection = collection instanceof Array ? collection : Object.values(collection)
    const newArr = []
    for( let i = 0; i < iterableCollection.length; i++) {
        newArr.push(callBack(iterableCollection[i]))
    }
    return newArr;
}

function myReduce(collection, callBack, acc) {
    let iterableCollection = (collection instanceof Array) ? collection : Object.values(collection)
    if(!acc){
        acc = iterableCollection[0]
        iterableCollection = iterableCollection.slice(1)
    }
    for(let i = 0; i < iterableCollection.length; i++) {
        acc = callBack(acc,iterableCollection[i], iterableCollection)
    }
    return acc;
}

function myFind(collection, predicate) {
    const iterableCollection = collection instanceof Array ? collection : Object.values(collection)
    for(let i = 0; i < iterableCollection.length; i++) {
        
    }
    
}