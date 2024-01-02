class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot'
        };
    }

    render() {
        return (
            <div>
                {/* Passe a propriedade 'name' para o componente Navbar */}
                <Navbar name={this.state.name} />
            </div>
        );
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* Exiba a propriedade 'name' na tag <h1> */}
                <h1>Hello, my name is: {this.props.name}</h1>
            </div>
        );
    }
}