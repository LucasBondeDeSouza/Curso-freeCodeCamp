class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div />
    }
};

// Change code below this line
const reactString = ReactDOMServer.renderToString(<App />);
console.log(reactString);