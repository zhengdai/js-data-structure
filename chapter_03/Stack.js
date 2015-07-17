/**
 * Created by 79848_000 on 2015/7/17.
 */
function Stack() {
    this.dataStore = [];
    this.top = 0;
}
Stack.prototype.push = function(elem) {
    this.dataStore[this.top++] = elem;
};

Stack.prototype.pop = function() {
    return this.dataStore[--this.top];
};

Stack.prototype.peek = function() {
    return this.dataStore[this.top - 1];
};

Stack.prototype.length = function() {
    return this.top;
};

Stack.prototype.clear = function() {
    this.top = 0;
};


//测试代码
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());

function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

console.log(mulBase(8, 2));

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    return rword == word;
}

var word = "hello";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}
word = "racecar";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}