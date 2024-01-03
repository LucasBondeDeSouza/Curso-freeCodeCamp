class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        };
        // Bind the methods to the component instance
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    handleChange(event) {
        // Update the input state with the user's input
        this.setState({
            input: event.target.value
        });
    }

    submitMessage() {
        // Concatenate the current message to the messages array and clear the input
        this.setState({
            messages: [...this.state.messages, this.state.input],
            input: ''
        });
    }

    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                {/* Input element */}
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                {/* Button element */}
                <button onClick={this.submitMessage}>Submit</button>
                {/* List element */}
                <ul>
                    {/* Map through the messages array and render each message as a list item */}
                    {this.state.messages.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            </div>
        );
    }
}