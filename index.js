let user =0;
let computer =0 ;

const choices = document.querySelectorAll('.images');


const computerchoice = ()=>{
    const  choice = ["rock","paper","scissor"] ; 
    let  ind =Math.floor(Math.random() *3);
let cchoice = choice[ind] ;
return cchoice;
}


const playgame = (imagesid)=>{
    console.log("user choice is"+' '+ imagesid)
    let cchoice = computerchoice();
    console.log("computer choice is"+' '+  cchoice);
  if(imagesid===cchoice){
        console.log("The  game was draw");
        let message = document.querySelector('#msg');
        message.textContent="Its a draw";
  }
  else if((imagesid=='rock' && cchoice=='scissor')||(imagesid=="paper" && cchoice=="rock")||(imagesid=="scissor" && cchoice=="paper")){
      console.log("You won");
      let message = document.querySelector('#msg');
       message.textContent="you won!!!! \n to play again click on the image";


      user++;
  }
else if((imagesid=='rock' && cchoice=='paper')||(imagesid=='paper' && cchoice=='scissor')||(imagesid=='scissor' && cchoice=='rock')){
    console.log("computer won");
    let message = document.querySelector('#msg');
       message.textContent="you lost!!! \n to play again click on the image";
       
    computer++;
   
}

}

 const updateScore=()=>{
   let userscore = document.querySelector('#uscore');
   let computerscore = document.querySelector('#cscore');
   
   userscore.innerText = user;
   computerscore.innerText= computer;
   

 }

choices.forEach((image) => {
console.log(image)
    image.addEventListener('click', () => {
        const imagesid = image.getAttribute("id");
       
console.log('user choice  is '+ imagesid);
        playgame(imagesid);
updateScore();
    
    });
    })
    