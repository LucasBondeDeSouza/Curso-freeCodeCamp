// Change code below this line
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        );
    }
}

// Renderize o componente no DOM usando ReactDOM.render()
ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));