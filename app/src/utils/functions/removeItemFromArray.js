export default function removeItemFromArray(arr) {
    let item, a = arguments, len = a.length, index;
    
    while(len > 1 && arr.length) {
        item = a[--len];
        while((index = arr.indexOf(item)) !== -1) arr.splice(index, 1);
    }

    return arr;
}
