//Declaración de la promesa
const promesa = new Promise((accept, reject) => {
    //Hay un posible procesamiento interno
    reject({ value: "Fue aceptada la promesa" })
})

//Forma tradicional de gestionar promesas
promesa
    .then(result => console.log(result))  //El result que se declara, nos va a consologuear el value { value: "error en la promesa" }
    .catch(error => {
        console.log("Hubo un error")
        console.log(error)
    })

//Otra forma
/* promesa.then(
    result => console.log(`Se resolvió bien: ${result.value}`),
    error => console.log(`Hubo un error: ${error.value}`)
)
 */