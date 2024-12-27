import { makeAutoObservable } from 'mobx'

class Counter {
    number = 0

    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        console.log(this)
        this.number++
    }

    decrement() {
        this.number--
    }

    incrementAsync() {
        setTimeout(() => {
            this.number++
        }, 1000)
    }
}

export default new Counter()
