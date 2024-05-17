const cup = {
    color:'red',
    size:'small',
    texture:'smooth',
    shape:'round',
    functionallity:{
        drinkType:'tea',
        temperature:'hot'
    },
    drink: function(){
    console.log('Use me to drink');
console.log(`My main purpose is to drink ${this.functionallity.temperature} ${this.functionallity.drinkType}`);
    }
};

console.log({color:cup.color});
console.log('size', cup.size);
console.log('tempurature',cup.functionallity.tempurature);
console.log('texture',cup['texture']);

cup.model = 'glass';
console.log({cup});
cup.color = 'green';
console.log({cup});

delete cup.model
cup.drink();

const keys = Object.values(cup);
console.log({keys});

const values = Object.values(cup);
console.log({values});

const loop = Object.keys(cup).map(item=>{
    return({key:item, value:cup[item]});
})
console.log({loop});
