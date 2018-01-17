
// let count = 0;

// //The renderCounterApp function is used to re-render the content to the screen, updating the count variable.
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
//     //console.log('minusOne');
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     //console.log('Reset');
// };


// // Every time this method is called, it will re-render the content to the screen, as the ReactDOM.render is 
// // inside renderCounterApp method.
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>  
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);    
// };

// renderCounterApp();

class Counter extends React.Component{

    constructor(props){
        super(props);
        // This bind to the current component instance
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        // Here, we set all the states we want to track
        this.state = {
            count: 0
        };
    }

    handleAddOne(){
        // setState method access the previous state (current state), and returns a updatep value redendering 
        // directly to the screen
        this.setState((prevState) => {
            return {
                /*Updating the count instance variable from this.state from the constructor*/
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count - 1
            };
        });
    }

    handleReset(){
        // Setting the count to 0
        this.setState(() => {
            return{
                count: 0
            };
        });

        // Setting the count to 1, after setting the state to 0 as above.
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
            };
        });

        // Another way of doing it, but not recommended.
        // this.setState({
        //     count: 0
        // }); 

    }

    render (){
        return (
            <div>{/*Here i am accessing the state declared on the constructor, and rendering automatically*/}
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));