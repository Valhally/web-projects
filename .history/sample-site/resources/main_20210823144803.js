function Person(first, last, age) {
    this.first = first;
    this.last = last;

    this.greeting = function {
        console.log('Hello, my name is ' + this.first + ' ' + this.last + '!');
    }
}

