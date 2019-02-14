import PubSub from 'pubsub-js';
export default class TratadorErros {
    publicarErros(erros){
        erros.errors.forEach(erro => {
            PubSub.publish('erro-validacao', erro);
        });
    }
}