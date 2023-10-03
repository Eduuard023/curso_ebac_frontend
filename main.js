function Veiculo(model, color, maxSpeed){
    this.model = model,
    this.color = color

    let _maxSpeed = maxSpeed;

    this.getMaxSpeed = function(){
        return _maxSpeed
    }

    this.setMaxSpeed = function (speed){
        if(typeof speed === 'number'){
            _maxSpeed = speed
        }
    }
}


function Carro (model, color, maxSpeed){
    Veiculo.call(this, model, color, maxSpeed)

    this.newSpeed = function(){
        const newMaxSpeed = this.getMaxSpeed() *1.3
        this.setMaxSpeed(newMaxSpeed)
    }
}

function Moto (model, color, maxSpeed){
    Veiculo.call(this, model, color, maxSpeed)

    this.newSpeed = function(){
        const newMaxSpeed = this.getMaxSpeed() *1.5
        this.setMaxSpeed(newMaxSpeed)
    }
}

function Jetski (model, color, maxSpeed){
    Veiculo.call(this, model, color, maxSpeed)

    this.newSpeed = function(){
        const newMaxSpeed = this.getMaxSpeed() *1.1
        this.setMaxSpeed(newMaxSpeed)
    }
}

const carroEduardo = new Carro('Civic', 'Branco', 180)
const motoEduardo = new Moto('R6 Race', 'Preta', 240)
const jetskiEduardo =  new Jetski('Rxt-x 300', 'Azul', 80)

carroEduardo.newSpeed();
console.log(carroEduardo.getMaxSpeed())

motoEduardo.newSpeed();
console.log(motoEduardo.getMaxSpeed())

jetskiEduardo.newSpeed();
console.log(jetskiEduardo.getMaxSpeed())