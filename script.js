
function showWave(n){
const data={
1:'1ª Onda: Regras. Exemplo: MYCIN.',
2:'2ª Onda: Machine Learning. Aprende com dados.',
3:'3ª Onda: Big Data, IA Cognitiva, ChatGPT.'
};
document.getElementById('wave').innerText=data[n];
}

function showLearn(t){
if(t==='sup'){
document.getElementById('learn').innerText=
'Supervisionado: existe gabarito. Ex: Spam/Não Spam.';
}else{
document.getElementById('learn').innerText=
'Não supervisionado: sem gabarito. Ex: agrupar clientes.';
}
}

function train(){
document.getElementById('trainOut').innerText=
'Analisando dados...\nPadrão encontrado: carros brancos apresentam mais problemas.';
}

const quiz=[
{
q:'MYCIN pertence a qual onda?',
a:['1ª','2ª','3ª'],
c:0
}
];

let i=0;
function render(){
document.getElementById('q').innerText=quiz[i].q;
document.getElementById('opts').innerHTML=
quiz[i].a.map((x,n)=>`<button onclick="ans(${n})">${x}</button>`).join('');
}
function ans(n){
document.getElementById('result').innerText=
n===quiz[i].c?'Correto!':'Errado!';
}
render();
