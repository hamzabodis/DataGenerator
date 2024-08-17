const boxusername = document.getElementById("input1");
const boxpassword = document.getElementById("input2");

letter = 12;

const uppercase = "AZERTYUIOPMLKJHGFDSQWXCVBN";
const lowercase = "azertyuiopmlkjhgfdsqwxcvbn";
const numbers = "0123456789";
const symbols = "&é(-è_çà)=/*-+.<>?!§ù%$£^¨[|]~";
const alltypes = uppercase + lowercase + numbers + symbols ;

function genee1(){
    let user ="";
    user += uppercase[Math.floor(Math.random()* uppercase.length)];
    user += lowercase[Math.floor(Math.random()* lowercase.length)];
    user += lowercase[Math.floor(Math.random()* lowercase.length)];
    user += lowercase[Math.floor(Math.random()* lowercase.length)];
    user += numbers[Math.floor(Math.random()* numbers.length)];
    user += numbers[Math.floor(Math.random()* numbers.length)];
   
    boxusername.value= user;

}

function genee2(){
    let password ="";
    password += uppercase[Math.floor(Math.random()* uppercase.length)];
    password += lowercase[Math.floor(Math.random()* lowercase.length)];
    password += numbers[Math.floor(Math.random()* numbers.length)];
    password += symbols[Math.floor(Math.random()* symbols.length)];

    while (letter > password.length){
        password += alltypes[Math.floor(Math.random()* alltypes.length)];
    }

    boxpassword.value = password;
   

}

function copyuser(){
    boxusername.select();
    document.execCommand("copy");
}

function copypass(){
    boxpassword.select();
    document.execCommand("copy");
}

const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const title3 = document.getElementById("title3");
const title4 = document.getElementById("title4");


function light(){
  document.getElementById("body").style.backgroundColor ="whitesmoke";
  title1.style.color = "#333";
  title2.style.color = "#333";
  title3.style.color = "#333";
  title4.style.color = "#333";
  document.getElementById("gen1").style.border ="2px solid #333";
  document.getElementById("gen2").style.border ="2px solid #333";
  document.getElementById("img2").style.display ="block";
  document.getElementById("img1").style.display ="none";
  
}
function dark(){
    document.getElementById("img2").style.display ="none";
    document.getElementById("img1").style.display ="block";
    document.getElementById("body").style.backgroundColor ="#333";
    title1.style.color = "#fff";
  title2.style.color = "#fff";
  title3.style.color = "#fff";
  title4.style.color = "#fff";

}