function findMinAndMax(arr : number[]) : string{
    let min = arr[0];
    let max = arr[0];
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            minIndex = i;
        }

        if(arr[i] > max){
            max = arr[i];
            maxIndex = i;
        }
    }

    return `min: ${min} index: ${minIndex} max: ${max} index: ${maxIndex}`;
}

console.log(findMinAndMax([5, 7, 4, -2, -1, 8]))