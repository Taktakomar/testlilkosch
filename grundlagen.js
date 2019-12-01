            "use strict"
            let str="omar";
            console.log(str+" Taktak");
            let Students =["Hichem","Trichili",10];
            Students.push("Miboun");
            console.log(__filename);
            debugger;
            Students.sort();
            let pos= Students.indexOf("Miboun");
            Students.splice(pos , 1);
            Students.splice(0,0,"Miboun");
            console.log(Students);
            console.log(Students[1].toFixed(2));
            let chaine = "3asba , lik , ya , miboun";
            let liste= chaine.split(",");
            console.log(liste);
            let liste1=liste.join(",");
            console.log(liste1);
           for(let i=0; i< liste.length; i++)
           {
            console.log(liste[i])
           }
