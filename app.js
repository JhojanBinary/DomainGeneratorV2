let pronoun = ["the", "our","my","i"];
let adj = ["great", "big", "dick","pink"];
let noun = ["jogger", "racoon"];
let exten = [".com", ".net", ".es", ".us"];



for(let i = 1; i< 501; i++){


    let pronombre = [Math.floor(Math.random() * pronoun.length)];
    let adjetivo = [Math.floor(Math.random() * adj.length)];
    let nombre =[Math.floor(Math.random() * noun.length)];
    let extension = [Math.floor(Math.random() * exten.length)]

     let domain = pronoun[pronombre] + adj[adjetivo] + noun[nombre] + exten[extension];

     console.log("NEW DOMAIN: "+ i + " = "+ domain);

}

