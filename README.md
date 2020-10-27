# Trabalho prático modulo 02 Bootcamp: Desenvolvimento Full Stack IGTI

## Enunciado
O aluno deverá criar um projeto Node.js para realizar a criação de alguns métodos e processamento de arquivos JSON.
Atividades
O aluno deverá baixar os arquivos Cidades.json e Estados.json do seguinte link (https://github.com/felipefdl/cidades-estados-brasil-json) e coloca-los dentro do seu projeto. O arquivo Estados.json possui uma listagem com todos os estados do Brasil, cada um representado por um ID. No arquivo Cidades.json estão listadas todas as cidades do Brasil, com seu respectivo estado representando pelo ID fazendo referência ao arquivo Estados.json.
Os alunos deverão desempenhar as seguintes atividades:
1. Criar uma função que irá criar um arquivo JSON para cada estado representado no arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes a aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser o UF do estado, por exemplo: MG.json.
2. Criar uma função que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON correspondente e retorne a quantidade de cidades daquele estado.
3. Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades, seguidos da quantidade, em ordem decrescente. Você pode usar a função criada no tópico 2. Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]
4. Criar um método que imprima no console um array com o UF dos cinco estados que menos possuem cidades, seguidos da quantidade, em ordem decrescente. Você pode usar a função criada no tópico 2. Exemplo de impressão: [“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”]
5. Criar um método que imprima no console um array com a cidade de maior nome de cada estado, seguida de seu UF. Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].
6. Criar um método que imprima no console um array com a cidade de menor nome de cada estado, seguida de seu UF. Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].
7. Criar um método que imprima no console a cidade de maior nome entre todos os estados, seguido do seu UF. Exemplo: “Nome da Cidade - UF".
8. Criar um método que imprima no console a cidade de menor nome entre todos os estados, seguido do seu UF. Exemplo: “Nome da Cidade - UF".