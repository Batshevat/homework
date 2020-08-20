// SL - 75

// SL - looks like perhaps you didnt really understand the counter question - but also looks like maybe you could use some more practice with closures.

window.app.increment.counter(10);

const counter1 = window.app.increment.createCounter(5);

const counter2 = window.app.increment.createCounter(15);

console.log("counter", window.app.increment.counter(10), "counter1", counter1, "counter2", counter2);