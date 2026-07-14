class MinStack {
    constructor() {
        this.stack = [];
        this.minValue = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    //*[1,2,0]
    //*[]
    push(val) {
        this.stack.push(val);
        if (!this.minValue.length || val < this.minValue[this.minValue.length - 1]) {
            this.minValue.push(val);
        } else {
            this.minValue.push(this.minValue[this.minValue.length - 1]);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.minValue.pop()

        return this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {

        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minValue[this.minValue.length-1]
    }
}
