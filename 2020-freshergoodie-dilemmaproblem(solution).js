const goodies = {
    fp: 7980,
    Ipods: 22349,
    MI_band: 999,
    cp: 2799,
    mp: 229900, 
    dc: 11101,
    alexa: 9999,
    st: 2195,
    MO: 9800,
    scale: 4999,
}
     let values = Object.values (goodies).sort((a, b) => a - b) 
     console.log(values);
    let min = Number.MAX_SAFE_INTEGER, M = 2
    for (let i = 0; i < (values.length- M); i++) {
         
    let diff = values[i + M - 1] - values[i]
    if (diff < min) min = diff
    }
    console.log(min); 
