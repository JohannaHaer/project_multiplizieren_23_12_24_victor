let multi = () => {
    let factor1 = Number(document.querySelector("#factor1").value)
    let factor2 = Number(document.querySelector("#factor2").value)
    let output = document.querySelector("#output")
    let ergebnis = 0
    // console.log(typeof(factor1));

    for (let i = 1; i <= Math.abs(factor2); i++) {
        
        if (factor1 == 0 || factor2 == 0) {
            ergebnis = 0
         } 
        else if (factor1 < 0) {
            ergebnis += factor1
        } 
        else if (factor2 < 5) {
            ergebnis += -factor1
        }
        else if (factor1 < 0 && factor2 < 0) {
            ergebnis += factor1
        }
        else if (factor1 > 0 && factor2 > 0) {
            ergebnis += factor1
        }
        
        
        
    }
    output.innerHTML = ergebnis
}

multi()








