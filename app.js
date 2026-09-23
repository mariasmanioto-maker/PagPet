

async function imagemApi() {
  let respostaApi = await fetch('https://dog.ceo/api/breeds/image/random');
  let dadosApi = await respostaApi.json();
  document.querySelector(".img-dog").src = dadosApi.message;
  console.log(dadosApi);
}

// async --> assincrono 
async function imagemApiCat() {
  // espera chegar a resposta --> await
  let respostaApi = await fetch("https://api.thecatapi.com/v1/images/search?limit=1", {
    headers: { "x-api-key": "live_EIZqWUzPvGRkTFR8H4pSTlNuPpIO40ai6Rrplv0zL3l30L404fF7kZwd4IJZ0ORS" },
  });
  let dadosApi = await respostaApi.json();
  document.querySelector(".img-dog").src = dadosApi[0].url;
  console.log(dadosApi[0].url);

}
imagemApiCat()