function mergeSort(data){
    if(data.length < 2){
        return data;
    }else{
        let mid = Math.floor(data.length/2);
        let left = data.slice(0,mid);
        let right = data.slice(mid,data.length);
        let answer = [];

        let leftI = 0;
        let rightI = 0;
        let dataI = 0;
        let band = false;
        

        left=mergeSort(left);
        right=mergeSort(right);
        

        while((leftI < left.length) && (rightI < right.length)){
            band = true;
            if(left[leftI] <= right[rightI]){
                answer.push(left[leftI])
                leftI ++;
                dataI ++;
            }else{
                answer.push(right[rightI])
                rightI ++;
                dataI ++;
            }
        }

        
        if(band){
            if(leftI < left.length){
                for(leftI;leftI<left.length;leftI++){
                    answer.push(left[leftI])
                    dataI++;
                }
            }else{
                for(rightI;rightI<right.length;rightI++){
                    answer.push(right[rightI])
                    dataI++;
                }
            }
        }
        return answer;
    }
}

console.log(mergeSort([105,79,100,110]));