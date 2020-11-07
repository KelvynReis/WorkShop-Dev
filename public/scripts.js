function onOff(){
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

        document
                .querySelector("body")
                .classList
                .toggle("hideScrool")
        document
                .querySelector("#modal")
                .classList
                .toggle("addScroll")
}   

function checkFields(event){

        const valuesToCheck = [
                "title",
                "category",
                "image",
                "description",
                "link",
        ]
        const isEmpty = valuesToCheck.find(function(value){

                const checkIfIsString = typeof event.target[value].value === "string"
                const checkIfIsEmpty = !event.target[value].value.trim()

                if(checkIfIsString && checkIfIsString){
                        return true
                }
        })

        if(isEmpty){
                event.preventDefaut()
                alert("Por Favor, preencha todos os campos")
        }
}
