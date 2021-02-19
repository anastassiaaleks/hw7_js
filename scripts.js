let Teapot =function(model,power, volume, amount) {
    this.model = model
    this.power=power
    this.volume=volume
    this.amount=amount
    this.work=false
    this.time=8

    this.on=function() {
        if (this.work==false) {        
            if (this.power>2000) {
                this.time=this.time-3
            }
            if (this.amount>0.1) {
                if (this.amount<this.volume) {
                    if(this.amount<(0.3*this.volume)) {
                        this.time=this.time-2
                    } else if(this.amount<(0.6*this.volume)) {
                        this.time=this.time-1
                    }
                    console.log(`Вы включили чайник ${this.model}. Ожидаемое время закипания ${this.time} минут`)
                    this.work=true
                } else {
                    console.log (`В чайнике ${this.model} слишком много воды`)
                    this.work==false
                }
            } else {
                console.log(`В чайнике ${this.model} ${this.amount} л. воды. Этого мало, добавьте еще`)
                this.work==false
            }
        } else {
            console.log(`Чайнике ${this.model} уже работает`)
        }
        
    }
    this.off=function() {
        if (this.work==false) {
            console.log('Нельзя выключить то, что не включено.')
        } else if (this.work=true) {
            console.log(`Чайник ${this.model} выключен.`)
            this.work=false
        }  
    }
}

let philips = new Teapot('Philips BR28', 2400, 3, 1)
let maxwell = new Teapot('Maxwell MV', 1800, 1.5, 1)
let normann = new Teapot('Normann L241', 1800, 2, 0.1)
let kitfort = new Teapot('Kitfort KT-08', 1800, 2, 2)

philips.on()
philips.on()
philips.off()

console.log('')
maxwell.on()
maxwell.off()
maxwell.off()

console.log('')
normann.on()
normann.off()

console.log('')
kitfort.on()
kitfort.off()