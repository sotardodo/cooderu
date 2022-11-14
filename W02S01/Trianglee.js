N=5
for(let i=0; i< N; i++) {
    let data = ''
    data += ' '.repeat(N-1-i)
    // data += '*'.repeat(i*2+1)
    for (let j=0; j< i*2+1; j++) {
        if (j==0 || j == (i*2+1)-1) {
            data += '*'
        } else {
            data += ' '
        }
    }
    console.log(data)
}
for(let i=0; i< N-1; i++) {
    let data = ''
    data += ' '.repeat(i+1)
    for (let j=0; j < (N-i-1)*2-1; j++) {
        if (j==0 || j == (N-i-1)*2-2 ) {
            data += '*'
        } else {
            data
for(let i=0; i< N-1; i++) {
    let data = ''
    data += ' '.repeat(i+1)
    for (let j=0; j < (N-i-1)*2-1; j++) {
        if (j==0 || j == (N-i-1)*2-2 ) {
            data += '*'
        } else {
            data += ' '
        }
    }
    console.log(data)
}function nbYear(p0, percent, aug, p) {
    years=0
    while(p0<p){
      p0=p0+parseInt(p0*percent/100)+aug
      years++
    }
    return years
  }