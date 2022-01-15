import React from 'react';
import CounterComponent from "./components/Counter.component";
import TodoContainer from "./containers/Todo.container";
import Todo from "./components/Todo";

function App() {
    return (
        <div className="App">
            <CounterComponent/>
            <hr/>
            {/*<TodoContainer/>*/}
            <Todo/>
        </div>
    );
}

export default App;
