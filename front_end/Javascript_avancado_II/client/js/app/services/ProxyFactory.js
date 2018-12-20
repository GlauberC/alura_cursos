class ProxyFactory{
    static create(objeto, props, acao){
        return new Proxy( new ListaNegociacoes(), {
            get(target, prop, receiver){
                if(props.includes(prop) && typeof(target[prop] == typeof(Function))){
                    return function(){
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                    
                }
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver){
                Reflect.set(target, prop, value, receiver);
                acao(target);
                return true;
            }
        });
    }
}