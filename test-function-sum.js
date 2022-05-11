const { assert } = require("chai");
const functioSum = require("../function-sum") 

describe('Quantos Parametros forem necessarios', function(){
    describe('1° Teste: Somente um parâmetro' , function(){
        it('Recebendo somente um parâmetro', async function(){
            const retornaResultado = await functionSum(1, 2);
            assert.equal(retornaResultado, 3);            
        });
    })
            describe('2° Teste: Recebendo dois parametros' , function(){
            it('Espera receber o calculo de dois parametros', async function(){
                const retornaResultado = await functionSum(10, 50);
                assert.equal(retornaResultado, 60);            
        })
    })
    describe('3° Teste: Recebendo string' , function(){
        it('Espera receber uma concatenação', async function(){
            const retornaResultado = await functionSum(10, 'A');
            assert.equal(retornaResultado, '10A');    
        })
    })
    describe('4° Teste: Recebendo dois parametros' , function(){
        it('Espera receber o calculo de dois parametros', async function(){
            const retornaResultado = await functionSum(10, -50);
            assert.equal(retornaResultado, 60);            
          })
    })
    describe('5° Teste: Recebendo dois parametros' , function(){
        it('Espera receber o calculo de dois parametros', async function(){
            const retornaResultado = await functionSum(10, 50);
            assert.equal(retornaResultado, 60);    
        })
    })
    describe('6° Teste: Multiplicando dois parametros' , function(){
        it('Espera receber a multiplicação  de dois parametros', async function(){
            const retornaResultado = await functionSum(2, 4);
            assert.equal(retornaResultado, 8);    
        })
    })
    describe('7° Teste: dividindo dois parametros' , function(){
        it('Espera receber a divisão de dois parametros', async function(){
            const retornaResultado = await functionSum(4, 2);
            assert.equal(retornaResultado, 2);    
        })
    })
})
