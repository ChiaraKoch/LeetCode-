// Insert Greatest Common Divisors in Linked List


// Given the head of a linked list head, in which each node contains an integer value.

// Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

// Return the linked list after insertion.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Example 1:

// Input: head = [18,6,10,3]
// Output: [18,6,6,2,10,1,3]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
// - We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
// - We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
// - We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
// There are no more adjacent nodes, so we return the linked list.

// Example 2:

// Input: head = [7]
// Output: [7]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes.
// There are no pairs of adjacent nodes, so we return the initial linked list.

// Constraints:

// The number of nodes in the list is in the range [1, 5000].
// 1 <= Node.val <= 1000

var insertGreatestCommonDivisors = function(head) {
    // Helper function to compute GCD
    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    
    let current = head;
    
    while (current && current.next) {
        // Calculate GCD of current node and the next node
        const gcdValue = gcd(current.val, current.next.val);
        
        // Create a new node with the GCD value
        const newNode = new ListNode(gcdValue);
        
        // Insert the new node between the current node and the next node
        newNode.next = current.next;
        current.next = newNode;
        
        // Move to the next original node
        current = newNode.next;
    }
    
    return head;
};

// Helper function to create a linked list from an array
const createLinkedList = (arr) => {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
};

// Helper function to convert a linked list to an array
const linkedListToArray = (head) => {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
};
