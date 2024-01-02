const ShoppingCart = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
            <p>Items: {props.items}</p>
        </div>
    );
};

// Define defaultProps para items com valor 0
ShoppingCart.defaultProps = {
    items: 0
};