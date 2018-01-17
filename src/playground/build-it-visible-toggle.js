class VisibilityToggle extends React.Component{

    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    };

    handleToggleVisibility(){
        
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility 
            };
        });
    };

    render(){

        const title = 'VisibilityToggle';

        return(
            <div>
                <Header title={title}/>
                <button onClick={this.handleToggleVisibility}> {this.state.visibility ? 'Hide Details': 'Show Details'} </button>
                <p>{this.state.visibility ? 'Some message here.' : ''}</p>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


