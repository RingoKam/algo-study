class node {    
    constructor(value, next) {
        this.value = value;
        this.next = next;
    } 
}

function ArrayToNode(list) {
    //create a node with the first element
    //store it in a temp variable
    //use it on the next one

    if(list && list.length === 0) {
        throw "Array cannot be empty"
    }

    let linkNode = new node(list[0]);
    let head = linkNode;
    for (let index = 1; index < list.length; index++) {
        const value = list[index];
        const newNode = new node(value);
        head.next = newNode;
        head = head.next;
    }

    return linkNode;
}

function ReverseLinkedList(linkedList) {

    if(linkedList !== null) {
        throw "linkList cannot be null";
    }

    let current = linkedList.value;
    let currentNode = linkedList;
    //hold a reference to previous node
    while(currentNode.next !== null) {
        let temp = currentNode.value;
        currentNode.value = previous;
         
    }

    //Go to the next one, save currentvalue to temp 

    //Replace value with previous

    //Next
    linkedList
}

//Test Cases
describe("LinkList test", () => {

    describe("ArrayToNode", () => {

        test("Empty Array should throw an exception", () => {
            expect(() => {ArrayToNode([])}).toThrowError("Array cannot be empty");
        })

        test("Array Length of 5 should return a linkedlist with depth of 5", () => {
            const result = ArrayToNode([1,2,3,4,5]);
            const expected = {
                "value": 1,
                "next": {
                  "value": 2,
                  "next": {
                    "value": 3,
                    "next": {
                      "value": 4,
                      "next": {
                        "value": 5
                      }
                    }
                  }
                }
              };
            expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
        });
    })

    describe("ReverseLinkedList", () => {
        
    })
})
