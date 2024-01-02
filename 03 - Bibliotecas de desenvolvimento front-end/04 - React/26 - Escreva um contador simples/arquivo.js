class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // Vincule os métodos ao componente no construtor
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    // Método para incrementar o contador em 1
    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    // Método para decrementar o contador em 1
    decrement() {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }));
    }

    // Método para redefinir o contador para 0
    reset() {
        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div>
                <button className='inc' onClick={this.increment}>Increment!</button>
                <button className='dec' onClick={this.decrement}>Decrement!</button>
                <button className='reset' onClick={this.reset}>Reset</button>
                <h1>Current Count: {this.state.count}</h1>
            </div>
        );
    }
};