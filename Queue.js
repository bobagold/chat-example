var Queue = function(limit) {
    this.limit = limit;
    this.elements = [];
}
Queue.prototype.push = function(elem) {
    this.elements.push(elem);
    while (this.elements.length > this.limit) {
        this.elements.shift();
    }
}
module.exports = Queue;