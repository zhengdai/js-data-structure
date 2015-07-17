/**
 * Created by 79848_000 on 2015/7/17.
 */
function Queue() {
    this.dataStore = [];
    this.end = -1;
}

Queue.prototype.enqueue = function(elem) {
    this.dataStore[this.end++] = elem;
};

Queue.prototype.dequeue = function() {
    return this.dataStore.shift();
};