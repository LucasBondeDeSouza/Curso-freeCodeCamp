// Declare a constante de estilos como uma variável global
const styles = {
    color: "purple",
    fontSize: 40,
    border: "2px solid purple"
};

class Colorful extends React.Component {
    render() {
        // Use a constante de estilos no atributo style
        return (
            <div style={styles}>Style Me!</div>
        );
    }
}