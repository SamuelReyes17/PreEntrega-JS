function costoLote() {
    const questions = [("Quieres saber el metro cuadrado de tu lote? y/n"),
                    ("Quieres saber el perimetro de tu lote? y/n"),
                    ("Quiere saber el area de su lote? y/n"),
                    ("Quiere saber el precio de su lote? y/n")];
                
                for (i = 0; i < questions.length; i++) {
                    let q = prompt(questions[i]).toLowerCase();
                    while ((q == "y")) {
                        let lado = Number(prompt("Cuanto mide un lado de su lote?"))
                        perimetro = lado * 4
                        m2 = lado * lado
                        valorLote = m2 * 1000
                        let pregunta = prompt("Quieres saber el perimetro de su lote? y/n")
                        if (pregunta == "y") {
                            alert("El perimetro de su lote es " + perimetro)
                        } else {
                            alert("Gracias por tu consulta")
                        }
                        let pregunta2 = prompt("Quieres saber el m2 de su lote? y/n")
                        if (pregunta2 == "y") {
                            alert("El metro cuadrado de su lote es de " + m2)
                        } else {
                            alert("Gracias por tu consulta")
                        }
                        alert("Actualmente el metro cuadrado esta avaluado en 1000 dolares")
                        let pregunta3 = prompt("Quieres saber el precio de su lote? y/n")
                        if (pregunta3 == "y") {
                        alert("El precio de su lote es de " + valorLote) 
                        } else {
                            alert("Gracias por tu consulta")
                        }
                }
                alert("Nos vemos pronto")
                }
            }
            costoLote()









/*function costoLote() {
    let q = prompt ("Quieres saber el metro cuadrado de tu lote? y/n")
    while (( q == "y" ) || (q == "Y")){
        let lado = Number(prompt("Cuanto mide un lado de su lote?"))
        perimetro = lado * 4
        m2 = lado * lado
        valorLote = m2 * 1000
        let q = prompt("Quieres saber el perimetro de tu lote? y/n").toLowerCase()
        if (q == "y") {
            alert(`El perimetro de su lote es de ${perimetro}`)
        } else {
            alert("Gracias por tu consulta")
        }
        let q = prompt("Quieres saber el metro cuadrado de tu lote? y/n").toLowerCase()
        alert(`El metro cuadrado de su lote es de ${m2}`)
        alert("Actualmente el metro cuardado esta avaluado en 1000 dolares")
        alert (`El precio de su lote es de ${valorLote}`)
    } 
    alert ("Nos vemos pronto")
    }
costoLote()
 */

