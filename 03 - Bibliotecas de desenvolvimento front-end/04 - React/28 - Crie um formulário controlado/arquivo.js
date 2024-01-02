class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit(event) {
        // Evite o comportamento padrão de envio do formulário
        event.preventDefault();

        // Atualize a propriedade 'submit' no estado com o valor atual da entrada
        this.setState({
            submit: this.state.input
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* Adicione o elemento input abaixo desta linha */}
                    <input value={this.state.input} onChange={this.handleChange} />
                    {/* Adicione o elemento input acima desta linha */}
                    <button type='submit'>Submit!</button>
                </form>
                {/* Adicione a tag h1 abaixo desta linha */}
                <h1>{this.state.submit}</h1>
                {/* Adicione a tag h1 acima desta linha */}
            </div>
        );
    }
}