import { promises as fs} from "fs";

initi();

const qtCidadesEstado = [];
const maiorCity = [];
const menorCity = [];
const maiorCityTodas = [];
const imprimeMaiorCityTodas = [];
const imprimeMenorCityTodas = [];

async function initi() {

    try{

        const estados = JSON.parse( await fs.readFile("Estados.json") );
        const cidades = JSON.parse( await fs.readFile("Cidades.json") );
    
        estados.forEach( estado => {

            let idEstado = estado.ID;
            let ufEstado = estado.Sigla;
            const todasCidades = [];
            
                    cidades.forEach(cidade => {
                        let idCidade = cidade.Estado;
                            if(idCidade === idEstado) {
                                // todasCidades.push({Nome:cidade.Nome, Id:cidade.ID, UF: ufEstado, qtName:cidade.Nome.length});
                                todasCidades.push({Nome:cidade.Nome, UF: ufEstado});
                                maiorCityTodas.push({Nome:cidade.Nome, UF: ufEstado});
                            }
                        })

                //passando os parâmetro coletados para utilizar na função
            salvaEstado(estado.Sigla, todasCidades);

            qtCidadesEstado.push({Uf:estado.Sigla, Qt:todasCidades.length});
        
            maiorCidade(todasCidades);
            menorCidade(todasCidades);
            console.log("\n");

    });
    } catch(err) {

        console.log(err);
    }

   //imrime total de cidades por cada estado
    imprimeTotalCidades(qtCidadesEstado);
    console.log("\n");

    //retorna os cinco estados mais cidades
    ordemDecrescente(qtCidadesEstado);
    console.log("\n");

    //retorna os 5 estados com menos cidades
    ordemCrescente(qtCidadesEstado);
    console.log("\n");

    //retorna o nome cidade de maior nome de cada estado
    maiorCidadeDeTodas(maiorCityTodas);
    console.log("\n");

    //retorna a menor cidade de cada estado
    menorCidadeDeTodas(maiorCityTodas);
    console.log("\n");

    //imprime a cidade de maior nome de cada estado
    imprimeMaiorCidade(maiorCity);
    console.log("\n");

    //imprime a cidade de maenor nome de cada estado
    imprimeMenorCidade(menorCity);
    console.log("\n");

    //imprime a cidade de maior nome entre todos os estados
    imprimeMaiorCidadeDeTodas(imprimeMaiorCityTodas);
    console.log("\n");

    //imprime a cidade de maior menor entre todos os estados
    imprimeMenorCidadeDeTodas(imprimeMenorCityTodas);
    
} //final da função initi


//função gera novos arquivos ou subescreve os arquivos uf.json
async function salvaEstado (est, cid) {
    await fs.writeFile( `${est}.json`,  JSON.stringify(cid, null, 2));
}


//retorna os 5 estados com mais cidades em ordem drecrescente
 function ordemDecrescente (recebe) {
   recebe.sort((a, b) => {
        return b.Qt - a.Qt;
    })
    console.log("\nCinco Estado com mais cidades: \n", recebe.slice(0, 5 ));
}


// retorna os cinco estados com menos cidades em ordem crescente
function ordemCrescente (recebe) {
    recebe.sort((a, b) => {
         return a.Qt - b.Qt;
     })
     console.log("\nCinco estados com menos cidades: \n", recebe.slice(0, 5));
 }


//retorna a cidade como  maior nome de cada estado e o seu UF
 function maiorCidade (recebe) {
    //verificando a ordem descrescente
   recebe.sort((a, b) => {
         return b.Nome.length - a.Nome.length ;
     })
     //verificando a ordem alfabética
   recebe.sort((a, b) => {
         return a.Nome > b.Nome ;
     })

     const filtro = recebe.map(item =>{
         return ` ${item.Nome} - ${item.UF}`;
     })
     maiorCity.push(filtro.slice(0, 1))
   // console.log("\nCidade com maior nome de cada estado: \n\n", filtro.slice(0, 1));
 }


 //retorna a cidade com o menor nome de cada estado e o seu UF
 function menorCidade (recebe) {
    recebe.sort((a, b) => {
          return a.Nome.length - b.Nome.length;
      })
    //verificando a ordem alfabética
    recebe.sort((a, b) => {
        return a.Nome > b.Nome ;
    })

      const filtro = recebe.map(item =>{
          return ` ${item.Nome} - ${item.UF}`;
      })

      menorCity.push(filtro.slice(0, 1))
  //   console.log("\nCidade com menor nome de cada estado: \n\n", filtro.slice(0, 1));
  }

//retorna a cidade com maior nome entre todas
function maiorCidadeDeTodas (recebe) {
        recebe.sort((a, b) => {
            return b.Nome > a.Nome ;
        })
        //verificando a ordem descrescente
           recebe.sort((a, b) => {
               return b.Nome.length - a.Nome.length ;
           })
           
           const filtro = recebe.map(item =>{
               return ` ${item.Nome} - ${item.UF}`;
           })
           
           imprimeMaiorCityTodas.push(filtro.slice(0, 1));
}

//retorna a cidade com menor nome entre todas
function menorCidadeDeTodas (recebe) {
    //verificando a ordem descrescente
       recebe.sort((a, b) => {
           return a.Nome.length - b.Nome.length ;
       })

       recebe.sort((a, b) => {
        return a.Nome > b.Nome ;
    })
       
       const filtro = recebe.map(item =>{
           return ` ${item.Nome} - ${item.UF}`;
       })

       imprimeMenorCityTodas.push(filtro.slice(0, 1));
}



//imprime a lista com a cidade de maior nome de cada estado e sua UF
function imprimeTotalCidades(item){
    console.log("\nQuantidade de cidades por estado: \n", item);
}

//imprime a lista com a cidade de maior nome de cada estado e sua UF
 function imprimeMaiorCidade(item){
     console.log("\nCidade com maior nome de cada estado: \n", item);
 }

//imprime a lista com a cidade de menor nome de cada estado e sua UF
 function imprimeMenorCidade(item){
     console.log("\nCidade com menor nome de cada estado: \n", item);
 }

 //imprime a lista com a cidade de menor nome de cada estado e sua UF
 function imprimeMaiorCidadeDeTodas(item){
    console.log("\nCidade com o maior nome entre todos os estados: \n", item.slice(0, 1));
}

 //imprime a lista com a cidade de menor nome de cada estado e sua UF
 function imprimeMenorCidadeDeTodas(item){
    console.log("\nCidade com o menor nome entre todos os estados: \n", item.slice(0, 1));
}

















////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


// async function lerEstado (uf) {

    
//     const estado =  Object.keys(JSON.parse( await fs.readFile(`${uf}.json`))).length ;
    
//         // console.log(uf, estado);

//          qtCidadesEstado.push({uf, estado});  
          
//          await fs.appendFile( "novoarquivo.json",  JSON.stringify(qtCidadesEstado, null, 2))
    
//     }



// async function ordemDecrescente() {
    
//     const ordem = JSON.parse( await fs.readFile("novoarquivo.json") );

//     ordem.estado.sort((a , b )=> {
//         return b - a;
//     });

//   return  console.log(ordem.estado);
// }


// console.log(ordemDecrescente());



////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////








// async function ordem () {

//     await fs.writeFile( "novoarquivo.json",  JSON.stringify(qtCidadesEstado, null, 2));//colocar um a mais no segundo parametro do slice

// }




// const qtCidadesEstado = [];
    
// async function imprime () {

//     // qtCidadesEstado.push(item);

//    await   qtCidadesEstado.sort((a, b) => {
//             return b - a;
//         })
//             console.log(qtCidadesEstado);

//     }



// function ordemDecrescente (uf) {

   
//     qtCidadesEstado.sort((a, b) => {
//          return b - a;
//      });
// }


// const qtCidadesEstado = [];
//função para ler a quantidade de cidades por estado


// async function salvaqtCidades ( qt) {
//     //como o arquivo esta formato de object
//     //é necessário converter para string através da função JSON.strinfy
//     // os parâmetros null e 2 foram inseridos apenas para gerar uma formatação no arquivo json
//     await fs.appendFile("qtCidades.json",  JSON.stringify( {qt}, null, 2));

// }




