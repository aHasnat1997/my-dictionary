// "use strict";

const findBtn = () => {
  const findFild = document.getElementById('find-fild').value;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${findFild}`;
  // console.log(url);

  fetch(url).then(res => res.json()).then(deta => showDeta(deta[0]));


  document.getElementById('find-fild').value = '';
  document.getElementById('contener').innerHTML = '';
};

const showDeta = (deta) => {
  const { word, phonetic } = deta;
  console.log(deta);
  // console.log(deta.meanings[0].definitions[0].example);
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
    <h3 class="text-2xl mt-8 font-bold">Synonyms : <em class="font-normal">${deta.meanings[0].synonyms[0]}, ${deta.meanings[0].synonyms[1]}, ${deta.meanings[0].synonyms[3]}</em></h3>
    <div class="flex items-center gap-2 mt-4">
      <h4 class="text-3xl font-semibold">Verb</h4>
      <hr class="w-full" />
    </div>
    <h3 class="text-2xl mt-8 font-bold">Synonyms : <em class="font-normal">${deta.meanings[1].synonyms[0]}, ${deta.meanings[1].synonyms[1]}, ${deta.meanings[1].synonyms[2]}</em>
    </h3>
  </div>
  `;
  contener.appendChild(div)
};