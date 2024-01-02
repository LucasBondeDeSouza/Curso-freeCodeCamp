class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        return (
            <div>
                {/* Adicione o componente GetInput e passe as propriedades necessárias */}
                <GetInput input={this.state.inputValue} handleChange={this.handleChange} />

                {/* Adicione o componente RenderInput e passe a propriedade necessária */}
                <RenderInput input={this.state.inputValue} />
            </div>
        );
    }
}

class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Get Input:</h3>
                {/* Adicione o input element e passe as propriedades necessárias */}
                <input
                    value={this.props.input}
                    onChange={this.props.handleChange}
                />
            </div>
        );
    }
}

class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Input Render:</h3>
                {/* Exiba a propriedade 'input' */}
                <p>{this.props.input}</p>
            </div>
        );
    }
}