const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords ="";
let randWords ="";
let sWords = ['python', 'javascript','c++','java','Tanya','komal','himanshu','anshul'];


const createeNewWords = () => {
    let ranNum = Math.floor(Math.random() *  sWords.length);
    let newTemporyswords = sWords[ranNum];
    console.log(newTemporyswords);
 //  console.log( newTemporyswords.split(""));
    return newTemporyswords;

}
const scrambleWords = (arr) => {
    for(let i = arr.length-1; i>0;i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        arr[i] = arr[j];
        arr[j] = temp;



    }
    return arr;

}
btn.addEventListener('click',function(){
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
      newWords =  createeNewWords();
      console.log(randWords); 
    //  console.log(scrambleWords.spillt(''));
     randWords =  scrambleWords(newWords.split("")).join("");
console.log(randWords);
msg.innerHTML = ` Guess the word: .${randWords}`;
        
    }else{
        let tempWord = guess.value;
        if(tempWord === newWords){
           // console.log('Correct');
            play = false;
            msg.innerHTML =`Awesome It is correct .It is ${newWords}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value ="";


        }else{
            console.log('incorrect');
            msg.innerHTML = ` It's not Correct.Please try it again ${randWords}`
        }

    }
})
