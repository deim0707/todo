import React from 'react';
import counter from "../store/counter.store";
import {observer} from "mobx-react-lite"; // заставляет компонент следить за обновления из мобИкс

const Counter = observer(() => {
    return (
        <div className="App">
            value: {counter.count}
            <hr/>
            <button onClick={() => counter.increment()}>-</button>
            <button onClick={() => counter.decrement()}>+</button>
        </div>
    );
});

export default Counter;