
showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++){
        if (i % 2 === 0) console.log(i, 'Even');
        else console.log(i, 'Odd');
        //const message = (i % 2 === 0) ? 'Even' : 'Odd'
        //console.loge(i, message);        -replaces the if else above
    }
}

