// Define ADD, addMessage(), messageReducer(), and store here:
// Defina um tipo de ação ADD e configure-o como const ADD.
const ADD = 'ADD';

// Defina um criador de ação addMessage() que cria a ação para adicionar uma mensagem.
const addMessage = (message) => ({
    type: ADD,
    message
});

// Crie um redutor chamado messageReducer() que trata do estado das mensagens.
// O estado inicial deve ser igual a um array vazio.
const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            // Adicione a mensagem ao array de mensagens no estado
            return [...state, action.message];
        default:
            // Se a ação não for reconhecida, retorne o estado atual
            return state;
    }
};

// Crie sua loja Redux e passe para ela o redutor.
const { createStore } = Redux;
const store = createStore(messageReducer);