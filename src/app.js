 
// This component renders other components (Nested Components)
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        } 
    }

    handleDeleteOptions(){
       this.setState(() => {
           return {
               options: []
           };
       }); 
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const pickOption = this.state.options[randomNum];
        alert(pickOption);
    }

    handleAddOption(option){

        if(!option){
            return 'Enter a valid option please.'
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists.'
        }

        this.setState((prevState) => {
             return {
                options: prevState.options.concat(option)
             };
        });
    }

    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer.';


        return(
            <div>
                {/*The props title gets the value from the const variable declared above*/}
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options = {this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}  
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}


// Header Component with title and subtitle
class Header extends React.Component {
    render () {
        {/*console.log(this.props);*/}
        return (
            <div>{/*this.props.title > It gets the title from the Header props from the IndecisionApp component*/}
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

// Action Component
class Action extends React.Component{

    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What Should i do?
                </button>
            </div>
        )
    }
}

// Option component maps the array and render (nested) the the Option component. 
class Options extends React.Component{

    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => {
                        // Rendering the Option component for each value from the array 'options'
                        // and passing the key and value for each 'option'.
                        return <Option key={option} option={option} />
                    })
                }
            </div>
        )
    }
}

// Option component will render each individual item from the array.
class Option extends React.Component{
    render(){
        return (
            <div>
                {this.props.option}
            </div>
        )
    }
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
            
         this.setState(() => {
            return {
                error: error
            };
         });
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