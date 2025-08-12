let searchInput=document.getElementById("search-input");
let creature;
let searchBtn=document.getElementById("search-button");
async function getCreatures(creature){
  try{
const res=await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature
/${creature}`);
const data=await res.json();
return data;
 }
 catch(error){
   alert("Something went wrong");
 }
}

searchBtn.addEventListener("click",async ()=>{
 creature=searchInput.value
showCreature(creature);
})
async function showCreature(creature){
  const data=await getCreatures(creature);
let creatureName=document.getElementById("creature-name");
 let creatureId=document.getElementById("creature-id");
  let weight=document.getElementById("weight");
  let height=document.getElementById("height");
  let types1=document.getElementById("types1");
  let hp=document.getElementById("hp");
   let types2=document.getElementById("types2");
  let attack=document.getElementById("attack");let defense=document.getElementById("defense"); let specialAttack=document.getElementById("special-attack");
let specialDefense=document.getElementById("special-defense");
let speed=document.getElementById("speed");
let specialName=document.getElementById("special-name");
let specialDescription=document.getElementById("special-description");
let namecr=data.name.toUpperCase();
creatureName.innerText=namecr;
creatureId.innerText=`# ${data.id}`;
weight.innerText=`Weight: ${data.weight}`;
height.innerText=`Height: ${data.height}`;
let typeOne = data.types[0]?.name?.toUpperCase() || "";
let typeTwo = data.types[1]?.name?.toUpperCase() || "";
types1.innerText = typeOne;
types2.innerText = typeTwo;
hp.innerText=data.stats[0].base_stat;
attack.innerText=data.stats[1].base_stat;
defense.innerText=data.stats[2].base_stat;
specialAttack.innerText=data.stats[3].base_stat;
specialDefense.innerText=data.stats[4].base_stat;
speed.innerText=data.stats[5].base_stat;
specialName.innerText=data.special.name;
specialDescription.innerText = data.special.description;
let typeContainers = document.querySelectorAll(".type-container"); 
typeContainers.forEach(div => {
    div.style.background = "";
    div.style.color = "";
    if (div.innerText === "WATER") {
        div.style.background = "blue";
    }
    else if(div.innerText==="FIRE"){
        div.style.background = "red";
    }
    else if(div.innerText==="ROCK"){
        div.style.background = "brown";

    }else if(div.innerText==="DRAGON"){
        div.style.background = "orange";

    }else if(div.innerText==="FAIRY"){
        div.style.background = "deeppink";

    }else if(div.innerText==="ICE"){
        div.style.background = "blue";

    }else if(div.innerText==="GROUND"){
        div.style.background = "brown";

    }else if(div.innerText==="FLYING"){
        div.style.background = "blue";

    }else if(div.innerText==="BUG"){
        div.style.background = "brown";

    }else if(div.innerText==="DARK"){
        div.style.background = "gray";

    }else if(div.innerText==="PSYCHIC"){
        div.style.background = "gray";

    }else if(div.innerText==="STEEL"){
        div.style.background = "gray";

    }
     else if(div.innerText==="GHOST"){
        div.style.background = "gray";
    }
     else if(div.innerText==="GRASS"){
        div.style.background = "green";
    }
     else if(div.innerText==="POISON"){
        div.style.background = "lightgreen";
    }
    
});
}
