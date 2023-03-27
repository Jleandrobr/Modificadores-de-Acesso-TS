class PessoaJuridica extends Pessoa {
    _cnpj;
    constructor(nome, idade, dataNascimento, cnpj) {
        super("Jurídica- " + nome, idade, dataNascimento);
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
}
