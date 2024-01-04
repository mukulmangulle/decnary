// const button = document.querySelector("button");
const input=document.querySelector("input");
const h2=document.querySelector("h2");
const h3=document.querySelector("h3");
const form =document.querySelector('form')


const getData = async(e) => {
  
        e.preventDefault()
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
        const data = await response.json();

         h2.innerText =`Word: ${data[0].word}`;
         h3.innerText=`meaning:  ${data[0].meanings[0].definitions[0].definition}`;


        console.log(data);
}

form.addEventListener("submit", getData);


