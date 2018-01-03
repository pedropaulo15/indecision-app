
let count = 0;

//The renderCounterApp function is used to re-render the content to the screen, updating the count variable.
const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
    //console.log('minusOne');
};
const reset = () => {
    count = 0;
    renderCounterApp();
    //console.log('Reset');
};


// Every time this method is called, it will re-render the content to the screen, as the ReactDOM.render is 
// inside renderCounterApp method.
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>  
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);    
};

renderCounterApp();