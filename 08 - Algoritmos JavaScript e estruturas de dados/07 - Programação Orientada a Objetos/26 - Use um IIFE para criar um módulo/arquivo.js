let isCuteMixin = function (obj) {
    obj.isCute = function () {
        return true;
    };
};

let singMixin = function (obj) {
    obj.sing = function () {
        console.log("Singing to an awesome tune");
    };
};

// Criação do módulo funModule
let funModule = (function () {
    return {
        // Adiciona isCuteMixin ao módulo
        isCuteMixin: function (obj) {
            isCuteMixin(obj);
        },
        // Adiciona singMixin ao módulo
        singMixin: function (obj) {
            singMixin(obj);
        }
    };
})();

// Testa os mixins usando o funModule
let someObject = {};
funModule.isCuteMixin(someObject);
funModule.singMixin(someObject);

console.log(someObject.isCute()); // Exibirá true
someObject.sing(); // Exibirá "Singing to an awesome tune"