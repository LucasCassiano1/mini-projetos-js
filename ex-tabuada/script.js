function calcular(){
    var numero = document.getElementById('txtn')
    var tabuada = document.getElementById("seltab")

    if(numero.value.length == 0){
        window.alert("Está faltando o valor.")
    }else{
        let n = Number(numero.value)    
        let c = 1 
        tabuada.innerHTML = ""
        while(c <= 10){
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}