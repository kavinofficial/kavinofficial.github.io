var typed = new Typed(".typing",{
    strings:[" ","Web designer","web developer","graphics designer","youtuber"],
    typespeed:100,
    backupspeed:60,
    loop:true
})
let sam = document.getElementById('type').innerHTML=typed;
console.log(typed);