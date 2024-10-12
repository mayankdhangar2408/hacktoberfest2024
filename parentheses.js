// Function to check if parentheses are balanced
function areParenthesesBalanced(expression) {
    const stack = [];
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];

    // Helper function to match corresponding open and close brackets
    function isMatchingPair(open, close) {
        return openBrackets.indexOf(open) === closeBrackets.indexOf(close);
    }

    for (let char of expression) {
        if (openBrackets.includes(char)) {
            // If the character is an opening bracket, push it to the stack
            stack.push(char);
        } else if (closeBrackets.includes(char)) {
            // If the character is a closing bracket, check for matching open bracket
            if (stack.length === 0 || !isMatchingPair(stack.pop(), char)) {
                return false;  // Unbalanced if no match found
            }
        }
    }

    // If stack is empty, all brackets were matched; otherwise, unbalanced
    return stack.length === 0;
}

// Example usage
const expression = "{[()]}";  // Change this to test with other expressions
if (areParenthesesBalanced(expression)) {
    console.log(`${expression} is balanced.`);
} else {
    console.log(`${expression} is not balanced.`);
}
