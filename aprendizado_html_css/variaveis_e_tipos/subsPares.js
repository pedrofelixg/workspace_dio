function substituindoPares(array) {
    if(!array) return -1;
    if(!array.length) return -1

    for(var i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0){
            array[i] = 0;
        } else if(array[i] === 0) {
            console.log('Você já é zero!!');
        }
    }
    console.log(array);
}
substituindoPares([1, 5, 2, 12, 6, 71, 73, 88]);