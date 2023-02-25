// "use strict";

const findBtn = () => {
  const findFild = document.getElementById('find-fild').value;
  // if(typeof findFild === 'number'){
  //   alert('Search with Word...');
  //   return 0;
  // }
  // else{
  //   const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${findFild}`;
  //   fetch(url).then(res => res.json()).then(deta => showDeta(deta[0]));
  // }
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${findFild}`;
  fetch(url).then(res => res.json()).then(deta => showDeta(deta[0]));

  document.getElementById('find-fild').value = '';
  document.getElementById('contener').innerHTML = '';
};

const showDeta = (deta) => {
  const { word, phonetic } = deta;
  // console.log(deta);

  const synonymsNoun = deta.meanings[0].synonyms.map(() => deta.meanings[0].synonyms.join(" , "));
  let synonymsVerb = (deta.meanings[1].synonyms === []) ? " " : deta.meanings[1].synonyms.map(() => deta.meanings[1].synonyms.join(" , "));

  const contener = document.getElementById('contener');
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="text-neutral-200 opacity-100">
    <h1 class="text-6xl font-bold">${word}</h1>
    <h4 class="text-2xl text-blue-400 my-2">${phonetic}</h4>
    <div class="flex items-center gap-2 mt-4">
      <h4 class="text-2xl font-semibold">Noun</h4>
      <hr class="w-full" />
    </div>
    <h3 class="text-2xl mt-8 font-bold">Synonyms : <em class="font-normal">${synonymsNoun[0]}</em></h3>
    <div class="flex items-center gap-2 mt-4">
      <h4 class="text-3xl font-semibold">Verb</h4>
      <hr class="w-full" />
    </div>
    <h3 class="text-2xl mt-8 font-bold">Synonyms : <em class="font-normal">${synonymsVerb[0]}</em></h3>
  </div>
  `;
  contener.appendChild(div)
};