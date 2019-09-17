//function are hoisted, class declaration are not.

class GraphNode {
    constructor(data, children) {
        this.data = data;
        this.children = children;
    }

    //traverse to the bottom of the node, than back up
    dfs() {
        this.dfsHelper(this);
    } 

    dfsHelper(node) {
        console.log(node.data);
        if(node.children && node.children.length > 0) {
            node.children.map(child => this.dfsHelper(child));
        }
    }

    //same as depth first search, except we use queue.
    bfs() {
        let queue = [];
        queue.push(this);
        while(queue.length > 0) {
            const node = queue.shift();
            console.log(node.data);
            if(node.children && node.children.length > 0) {
                queue = [...queue, ...node.children]
            }
        }
    }

    dfsIterative() {
        let stack = [];
        stack.push(this);
        while(stack.length > 0) {
            const node = stack.pop();
            console.log(node.data);
            if(node.children && node.children.length > 0) {
                stack = [ ...stack, ...node.children ]; 
            }
        }
    }
}

const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');
const d = new GraphNode('d');
const e = new GraphNode('e');
const f = new GraphNode('f');

a.children = [b,c,d];
b.children = [e, f];

a.dfs();
console.log("iterative version");
a.dfsIterative();
console.log("bfs version");
a.bfs();