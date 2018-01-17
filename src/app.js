 
// This component renders other components (Nested Components)
class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer.';
        const options = ['Thing One', 'Thing Two', 'Thing Three', 'Thing Four'];


        return(
            <div>
                {/*The props title gets the value from the const variable declared above*/}
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options = {options}/>
                <AddOption />
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
    
    handlePick(){
        alert('HandlePick!');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should i do?</button>
            </div>
        )
    }
}

// Option component maps the array and render (nested) the the Option component. 
class Options extends React.Component{

    // Binding the method handleRemoveAll to 'this' cotext, to be able to access the options arrays from 
    // 'hendleRemoveAll function.
    // The biding has to be done, overrinding the super constructor. 
    constructor(props){
        super(props);
        // This bind the method to the current component instance
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        // The binding can be testes, by accessing the options array here.
        console.log(this.props.options)
        alert('RemoveAll!');
    }

    render(){
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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

    handleAddOption (e) {

        e.preventDefault();
    
        const option = e.target.elements.option.value.trim();
    
        //console.log(option);
        if(option){
            alert(option);
            e.target.elements.option.value = '';
        }
    }
    
    render(){
        return(
            <div>
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