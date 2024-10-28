// 380. Insert Delete GetRandom O(1)

// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

class RandomizedSet {
    constructor() {
        this.map = new Map();  // Stores value -> index
        this.values = [];       // Stores the actual values
    }

    /** 
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.map.has(val)) {
            return false;  // Return false if val already exists
        }
        // Insert the value into the array and save the index in the map
        this.map.set(val, this.values.length);
        this.values.push(val);
        return true;
    }

    /** 
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (!this.map.has(val)) {
            return false;  // Return false if val doesn't exist
        }
        
        // Get the index of the value to remove
        const index = this.map.get(val);
        const lastVal = this.values[this.values.length - 1];

        // Move the last element to the place of the element to delete
        this.values[index] = lastVal;
        this.map.set(lastVal, index);
        
        // Remove the last element
        this.values.pop();
        this.map.delete(val);
        return true;
    }

    /**
     * @return {number}
     */
    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.values.length);
        return this.values[randomIndex];
    }
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
