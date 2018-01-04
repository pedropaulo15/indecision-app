console.log('App JS Running');

// JSX - JavaScript XML

const app = {
    title: 'Flash ON',
    subtitle: 'Trust your trip on our App.',
    options: []
};

// The object 'e' is returned when using the onSubmit method, which contains information about the event.
const onFormSubmit = (e) => {
    // The method below prevents the refresh of the page.
    e.preventDefault();
    // The option variable below, receives the value typed from the input tag from the form
    const option = e.target.elements.option.value;

    if (option){
        //Pushing the option typed into the options array.
        app.options.push(option);
        // Set the input tag back to blank/empty string;
        e.target.elements.option.value = '';
        renderApp();
    }
};

const appRoot = document.getElementById('app');

//const numbers = [55, 101, 1000];

const removeAll = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    // Math.random() generates a random number between 0 and in this case, the length of the array.
    // Math.floor() around the the number to a decimal number (from 1.52365 to 1);
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your cities.' : 'No cities.'}</p>
            <button disabled={app.options.length > 0 ? false : true} onClick={onMakeDecision}>Where should i go?</button>          
            <button onClick={removeAll}>Remove All</button>
            { // In this case, i am returning an array in JSX, icluding the p tag and it's unique key prop.
                /*numbers.map((number) => {
                  return <p key={number}>Number: {number}</p>;  
                })*/
            }
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}> {option} </li>
                    })
                }
                
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add City</button>
            </form>
    
        </div>
    ); 

    ReactDOM.render(template, appRoot);
};

renderApp();
