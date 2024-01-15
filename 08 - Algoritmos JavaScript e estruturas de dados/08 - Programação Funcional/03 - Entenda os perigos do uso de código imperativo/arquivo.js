// tabs é uma matriz de títulos de cada site aberto na janela
const Window = function (tabs) {
    this.tabs = tabs; // Mantemos um registro do array dentro do objeto
};

// Quando você junta duas windows em uma window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// Quando você abre uma nova guia no final
Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // Vamos abrir uma nova aba por enquanto
    return this;
};

// Quando você fecha uma guia
Window.prototype.tabClose = function (index) {
    // Altere apenas o código abaixo desta linha

    this.tabs.splice(index, 1); // Remova a guia no índice especificado

    // Altere apenas o código acima desta linha

    return this;
};

// Vamos criar três janelas do navegador
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Sua caixa de correio, unidade e outros locais de trabalho
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sites sociais
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sites de entretenimento

// Agora execute a abertura, fechamento da guia e outras operações
const finalTabs = socialWindow
    .tabOpen() // Abra uma nova aba para memes de gatos
    .join(videoWindow.tabClose(2)) // Feche a terceira guia na janela do vídeo e participe
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);