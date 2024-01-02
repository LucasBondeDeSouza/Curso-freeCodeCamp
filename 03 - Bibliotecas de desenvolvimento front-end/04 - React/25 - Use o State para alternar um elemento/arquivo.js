class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        // Change code below this line
        // Vincule o método toggleVisibility ao componente
        this.toggleVisibility = this.toggleVisibility.bind(this);
        // Change code above this line
    }
    // Change code below this line
    // Método para alternar a visibilidade no estado
    toggleVisibility() {
        this.setState((prevState) => ({
            visibility: !prevState.visibility
        }));
    }
    // Change code above this line
    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <h1>Now you see me!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
        }
    }
}