var num = []


function primao(x){

for(let c = 2;c <= x**(1/2); c += 1)
        {
             y =  x % c
             num.push(y)
             console.log(c)
        } 
if( num.includes(0)){
     console.log('Este número não é primo')
     }
     else if(x <= 0) {
     console.log(' ta locao')
     }
        else {
     console.log('Este número é primo')
}  
}

primao()




         

 
 