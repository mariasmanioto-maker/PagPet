

async function imagemApi() {
  let respostaApi = await fetch('https://dog.ceo/api/breeds/image/random');
  let dadosApi = await respostaApi.json();
  document.querySelector(".img-dog").src = dadosApi.message;
  console.log(dadosApi);
}

// async --> assincrono 

//imagens de cats
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

function whatZap(){

const texto = "Olá! Vim pelo site da PetCare e gostaria de agendar um horário para meu pet."
const textoFormatado =encodeURIComponent(texto)
 const url = "https://wa.me/5599825424?text=" + textoFormatado;
 open(url, '_blank');
 console.log(url);
}