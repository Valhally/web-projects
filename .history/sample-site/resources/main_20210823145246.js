function Person(first, last, age) {
    this.first = first;
    this.last = last;
    this.__proto__.version = '1.0.0';

    this.greeting = function() {
        console.log('Hello, my name is ' + this.first + ' ' + this.last + '!');
    }
}

