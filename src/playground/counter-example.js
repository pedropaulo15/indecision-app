class Counter extends React.Component{

    constructor(props){
        super(props);
        // This bind to the current component instance
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        // Here, we set all the default states we want to track
        this.state = {
            count: 0
        };
    }

    // 3 sort of lifecycle methods
    // componentDidUpdate used to check if the component was updated
    // It can also checks the previous props and states of components
    // Working with localStorage.
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count){
            //const json = JSON.stringify(this.state.count);
            console.log('updating data!');
            localStorage.setItem('count', this.state.count);
        }
    } 

    // componentDidMount used to check if the component was rendered
    componentDidMount() {
        
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);

            console.log('fetching data!', count);
            
            if(!isNaN(count)){
                this.setState(() => ({ count: count}));
            }    
    }
    
    // componentWillUnmount it fires just before our component goes away.
    componentWillUnmount() {
        console.log('componentWillUnmount!')
    }


    handleAddOne(){
        // setState method access the previous state (current state), and returns a updatep value redendering 
        // directly to the screen
        // prevState = THe current state before the update/change
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
            return {
                count: 0
            };
        });
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
    };
};


ReactDOM.render(<Counter />, document.getElementById('app'));