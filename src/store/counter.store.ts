import {makeAutoObservable} from "mobx";

class CounterStore {
    constructor() {
        makeAutoObservable(this); // делает класс атоматически отслеживаемым
    }

    count: number = 0;

    // любая созданная функция - экшен
    increment() {
        this.count--;
    }

    decrement() {
        this.count++;
    }
}

export default new CounterStore();