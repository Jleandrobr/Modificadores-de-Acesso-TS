class PessoaFisica extends Pessoa {
    _cpf;
    constructor(nome, idade, dataNascimento, cpf) {
        super("Física - " + nome, idade, dataNascimento);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
}
