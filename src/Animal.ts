class Animal{
    nome:string = "";
    raca:string = "";

    falar(fala:string){
        console.log(fala);
    }
}


Animal.prototype.Andar = function(andar:string){
    console.log(andar);
};

const cachorro = new Animal();
const gato = new Animal();

cachorro.nome = "Doguinho";
cachorro.raca = "Caramelonildo";

console.log(cachorro);
cachorro.falar("Lá ele");
cachorro.Andar("andando de carro");

gato.nome = "Gato Tom";
gato.raca = "Gatonildo do bravo";

console.log(gato)
gato.falar("Miauuu");
gato.Andar("andando de moto");

