let ticket=350;
let living=680;
let tour=230;
let dollor=11250;
let euro=12864;
let ticketsum=ticket*dollor;
let livingsum=living*dollor;
let toursum=tour*euro;
let totolsom=ticketsum+livingsum+toursum;

confirm("Assalomu alaykum. Bizning sayohat fizmamizga xush kelibsioz");
let permision = confirm(
  `Bizning xizmatlar:Chipta=$350, mahmonxona=$680, shahar bo'ylab sayohat=$230 Jami summa=${totolsom}`);
let mablag= +prompt("Mablag'ingizni kiriting! ");
let summa = mablag-totolsom;
let kun = Math.floor(Math.random()*(30-3+1))+3;

if(summa>0){
    let permis=confirm(`Siz yetarli summa bor. ${kun} kun ichida qo'ngirog' qilamiz!`)
}
else if(summa<0){
    let psrm=confirm(`Sizda mablag' yetarli emas. Sizga yana   ${summa} summa  kerak `)
}
