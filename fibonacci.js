function fibs(n){
    if(n == 1){
        let x = [0];
        return x;
    }else if(n != 0){
        let x = [0,1];
        for(i=2;i<n;i++){
            x.push(x[i-1]+x[i-2]);
        }
        return x;
    }else{
        return "seleccione seleccione una cantidad > 1"
    }
}

function fibsRec(n){
    let x = [];
    if(n==1){
        x = [0];
        return x;
    }else if(n != 0){
        if(n <= 2){
         return [0,1];   
        }else{
            x=fibsRec(n-1);
            x.push(x[n-2]+x[n-3])
            return x;
        }
    }else{
        return "seleccione una cantidad > 1"
    }
}

console.log(fibs(2))

console.log('Recursion:')

console.log(fibsRec(2));