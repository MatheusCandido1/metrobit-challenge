async function printItemsAfterDelay(arr) {
    for (let i = 0; i < arr.length; i++) {
        const wait = Math.pow(2, i) * 1000;
        await new Promise(resolve => setTimeout(resolve, wait));
        console.log(arr[i]);
    }
}

const items = ['a', 'b', 'c', 'd'];
printItemsAfterDelay(items);
