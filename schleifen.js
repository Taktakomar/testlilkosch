"use strict"
let name =["omar","hichem","ali"]
let nachname= ["Taktak","Tricheli","Taktak"]

for(const i in name)
{
   
    console.log(name[i]+" "+nachname[i])
   console.log( parseInt(i))
}

for(const nachnamee of nachname )
{
    console.log(nachnamee)
}
/**
 * afficher msg
 * @param {string} name 
 */
function saghallo(name)
{
    console.log("Hallo "+name)
}
saghallo("Max")