function foo() {
    var a = 10; // Stored on stack
    var b = 20; // Stored on stack
    return a + b;
}

foo();


function bar() {
    var obj = { x: 10, y: 20 }; // Stored in heap, reference stored on stack
    var arr = [1, 2, 3];        // Stored in heap, reference stored on stack
    return obj.x + arr[0];
}

bar();