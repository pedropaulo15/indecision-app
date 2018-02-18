'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This component renders other components (Nested Components)
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    // 3 sort of lifecycle methods
    // componentDidMount used to check if the component was rendered
    // Working with localStorage.


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            try {
                var json = localStorage.getItem('options');
                console.log('fetching data!');
                var optionsArray = JSON.parse(json);

                if (optionsArray) {
                    this.setState(function () {
                        return { options: optionsArray };
                    });
                }
            } catch (e) {
                // Do nothing
            }
        }
        // componentDidUpdate used to check if the component was updated
        // It can also checks the previous props and states of components

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                console.log('updating data!');
                localStorage.setItem('options', json);
            }
        }
        // componentWillUnmount it fires just before our component goes away.

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount!');
        }

        // This is just a short cut code to save lines and make a bit less complex.
        // The commmented method below does the same thing; but uses more lines in it's syntax.    

    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',


        // handleDeleteOptions(){
        //    this.setState(() => {
        //        return {
        //            options: []
        //        };
        //    }); 
        // }

        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    // The filter is an array function to find a match of element
                    options: prevState.options.filter(function (option) {
                        // Checking if optionToRemove is the same of each element the filter method returns, 
                        // once if finds a match, it will return false and the item is deleted from the array.
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var pickOption = this.state.options[randomNum];
            alert(pickOption);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {

            if (!option) {
                return 'Enter a valid option please.';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists.';
            }
            // Short Cut method to concat the new option to the array
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var subtitle = 'Put your life in the hands of a computer.';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

;

// Header Component with title and subtitle
var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'IndecisionApp'

    // This is considered a stateless  functional component
    // A component does not access the state of a prop, we should use that syntax, as 
    // it is much faster then normal component syntax, when it extends the React Component.

};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What Should i do?'
        )
    );
};

// Option component maps the array and render (nested) the the Option component. 
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please Add an Option to get started!'
        ),
        props.options.map(function (option) {
            // Rendering the Option component for each value from the array 'options'
            // and passing the key and value for each 'option'.
            return React.createElement(Option, {
                key: option,
                option: option,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

// Option component will render each individual item from the array.
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.option,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.option);
                }

            },
            ' Remove'
        )
    );
};

// AddOption component 

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {

            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            e.target.elements.option.value = '';
            // Short cut method to display a error method in case of an invalid input    
            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'p',
                    null,
                    'Add Option Here.'
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// It renders the Indecision App component to the div 'app'


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
