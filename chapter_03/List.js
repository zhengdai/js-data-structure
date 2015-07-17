/**
 * Created by 79848_000 on 2015/7/17.
 */
function List(){
    this.listSize = 0;
    this.dataStore = [];
    this.pos = 0;

}

List.prototype.append = function(elem) {
    this.dataStore.push(elem);
    this.listSize++;
};

List.prototype.find = function(elem) {
    for(var i = 0; i < this.listSize; ++i) {
        if(elem == this.dataStore[i]) {
            return i;
        }
    }
    return -1;
};

List.prototype.remove = function(elem) {
    var idx = this.find(elem);
    if(idx > -1) {
        this.dataStore.splice(idx, 1);
        this.listSize--;
        return true;
    }
    return false;
};

List.prototype.length = function() {
    return this.listSize;
};

List.prototype.toString = function() {
    return this.dataStore.join();
};

List.prototype.insert = function(elem, after) {
    var pos = this.find(after);
    if(pos > -1) {
        this.dataStore.splice(pos + 1, 0, elem);
        this.listSize++;
        return true;
    }
    return false;
};

List.prototype.clear = function() {
    this.dataStore.length = 0;
    this.listSize = 0;
    this.pos = 0;
};









