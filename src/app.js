 
// This component renders other components (Nested Components)
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }; 
    }

    // 3 sort of lifecycle methods
    // componentDidMount used to check if the component was rendered
    // Working with localStorage.
    componentDidMount() {
        
        try{
            const json = localStorage.getItem('options');
            console.log('fetching data!');
            const optionsArray = JSON.parse(json);

            if(optionsArray){
                this.setState(() => ({ options: optionsArray}));
            }
        } catch (e){
            // Do nothing
        }
    }
    // componentDidUpdate used to check if the component was updated
    // It can also checks the previous props and states of components
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            console.log('updating data!');
            localStorage.setItem('options', json);
        }
    } 
    // componentWillUnmount it fires just before our component goes away.
    componentWillUnmount() {
        console.log('componentWillUnmount!')
    }


    // This is just a short cut code to save lines and make a bit less complex.
    // The commmented method below does the same thing; but uses more lines in it's syntax.    
    handleDeleteOptions(){
        this.setState (() => ( {options: []} ));
    };

    // handleDeleteOptions(){
    //    this.setState(() => {
    //        return {
    //            options: []
    //        };
    //    }); 
    // }

    handleDeleteOption(optionToRemove){
        this.setState( (prevState) => ({
            // The filter is an array function to find a match of element
            options: prevState.options.filter((option) => {
                // Checking if optionToRemove is the same of each element the filter method returns, 
                // once if finds a match, it will return false and the item is deleted from the array.
                return optionToRemove !== option;
            })
        }));
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const pickOption = this.state.options[randomNum];
        alert(pickOption);
    }

    handleAddOption(option){

        if(!option){
            return 'Enter a valid option please.';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists.';
        }
        // Short Cut method to concat the new option to the array
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

    render(){
        
        const subtitle = 'Put your life in the hands of a computer.';


        return(
            <div>
                {/*The props title gets the value from the const variable declared above*/}
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options = {this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}  
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    };
};


// Header Component with title and subtitle
const Header =(props) => {
    return (
        <div>{/*this.props.title > It gets the title from the Header props from the IndecisionApp component*/}
            <h1>{props.title}</h1>
            {/* It checks if ther is a subtitle, and renders to the screen in case to have it. */}
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'IndecisionApp'
}

// This is considered a stateless  functional component
// A component does not access the state of a prop, we should use that syntax, as 
// it is much faster then normal component syntax, when it extends the React Component.

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What Should i do?
            </button>
        </div>
    );
}

// Option component maps the array and render (nested) the the Option component. 
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please Add an Option to get started!</p>}
            {
                props.options.map((option) => {
                    // Rendering the Option component for each value from the array 'options'
                    // and passing the key and value for each 'option'.
                    return <Option 
                                key={option} 
                                option={option} 
                                handleDeleteOption={props.handleDeleteOption}
                            />
                })
            }
        </div>
    )
}

// Option component will render each individual item from the array.
const Option = (props) =>{
    return (
        <div>
            {props.option}
            <button 
                onClick = {(e) => {
                    props.handleDeleteOption(props.option);
                }}

            > Remove 
            </button>
        </div>
    );
}


// AddOption component 
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption (e) {

        e.preventDefault();
    
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        e.target.elements.option.value = '';
        // Short cut method to display a error method in case of an invalid input    
        this.setState(() => ( {error: error} ));

        if(!error){
            e.target.elements.option.value = '';
        }
    }
    
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <p>Add Option Here.</p>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// It renders the Indecision App component to the div 'app'
ReactDOM.render(<IndecisionApp /> , document.getElementById('app'))