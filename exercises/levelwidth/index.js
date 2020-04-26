// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const counter = [0];
    const arr = [root, 'S'];

    while(arr.length > 1) {
        let node = arr.shift();
        if (node === 'S') {
            arr.push(node);
            counter.push(0);
        } else {
            counter[counter.length - 1] += 1;
            arr.push(...node.children);
        }
    }
    return counter;
}

module.exports = levelWidth;
