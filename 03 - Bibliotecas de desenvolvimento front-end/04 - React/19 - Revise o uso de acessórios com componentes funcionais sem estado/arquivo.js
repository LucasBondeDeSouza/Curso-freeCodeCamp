class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Camper />
            </div>
        );
    }
};

class Camper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                { /* Change code below this line */}
                <p>{this.props.name}</p>
                { /* Change code above this line */}
            </div>
        );
    }
}

// Defina defaultProps para Camper com name como 'CamperBot'
Camper.defaultProps = {
    name: 'CamperBot'
};

// Defina PropTypes para garantir que name seja fornecido e seja do tipo string
Camper.propTypes = {
    name: PropTypes.string.isRequired
};