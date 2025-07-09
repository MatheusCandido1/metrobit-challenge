function findDuplicateItems(array) {
    const visited = [];
    const duplicates = [];

    for (const elem of array) {
        if (visited.includes(elem)) {
            duplicates.push(elem);
        } else {
            visited.push(elem);
        }
    }

    return duplicates;
}

const array = [1, 2, "a", "b", "c", "c", 2, 3, 4, 1];

const duplicates = findDuplicateItems(array);

console.log(duplicates);
