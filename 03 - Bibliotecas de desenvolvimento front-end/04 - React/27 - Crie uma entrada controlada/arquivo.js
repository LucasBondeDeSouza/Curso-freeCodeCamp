class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        // Vincule o método handleChange ao componente no construtor
        this.handleChange = this.handleChange.bind(this);
    }

    // Método para lidar com mudanças no input
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    render() {
        return (
            <div>
                { /* Adicione o input element abaixo desta linha */}
                <input value={this.state.input} onChange={this.handleChange} />

                { /* Adicione o input element acima desta linha */}
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
};