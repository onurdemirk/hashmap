import { HashMap } from "/hashmap.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log("First 12 items:", test.entries());

console.log("Initial Capacity", test.capacity); 
console.log("Load Factor:", test.loadFactor);

test.set('moon', 'silver');

console.log("Capacity after the 13th element:", test.capacity); 
console.log("Size after the 13th element:", test.size); 

console.log("Entries after adding 13 items:", test.entries());
console.log("Get 'moon':", test.get("moon"));
console.log("Has 'jacket'?", test.has("jacket"));
console.log("Remove 'grape':", test.remove("grape"));
console.log("Entries after removal:", test.entries());
console.log("Length:", test.length());
console.log("Keys:", test.keys());
console.log("Values:", test.values());

test.clear();
console.log("Entries after clear:", test.entries());