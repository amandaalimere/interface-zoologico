class AnimalRequests {

    constructor() {
        this.serverUrl = 'http://localhost:3000';  
        this.routeListarAnimal = '/listar-aves';
        this.routeCadastrarAnimal = '/novo/ave';
        this.routeDeletarAnimal = '/remover/animal';
        this.routeAlterarAnimal = '/atualizar/animal';
    }

    async ListarAnimal(){

    }
}

export default new AnimalRequests 