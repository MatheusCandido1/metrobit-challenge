function checkBrackets(brackets) {
    const openings = ["(", "{", "["];
    const closings = [")", "}", "]"];

    const combination = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const seen = [];

    for (const elem of brackets) {
        if (openings.includes(elem)) {
            seen.push(elem);
        } else if (closings.includes(elem)) {
            if (seen.pop() !== combination[elem]) {
                return false;
            }
        }
    }

    return seen.length === 0;
}

console.log(checkBrackets("()")); // true
console.log(checkBrackets("()[]{}")); // true
console.log(checkBrackets("(]")); // false