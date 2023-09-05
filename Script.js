let audioelement=new Audio('songs/1.mp3');


let index=0;
let info=document.getElementById('info')
                                                            
let listplay = Array.from(document.getElementsByClassName('listplaybtn'));




let gif=document.getElementById('gif');

let seekbar=document.getElementById('seekbar');

//        songs list

let songslist=[
    {songname:"Naa Roja Nuvve", coverpic:"Songs/images/1.jpeg", path:"songs/1.mp3"},

    {songname:"Hungry Cheetah", coverpic:"Songs/images/2.jpeg", path:"songs/2.mp3"},

    {songname:"Jawan Prevue Theme", coverpic:"Songs/images/3.jpeg", path:"songs/3.mp3"},

    {songname:"Hukum - Jailer", coverpic:"Songs/images/4.jpeg", path:"songs/4.mp3"},

    {songname:"Bro Slokam  -Bro", coverpic:"Songs/images/5.jpeg", path:"songs/5.mp3"},

    {songname:"Chaleya -Jawan", coverpic:"Songs/images/6.jpeg", path:"songs/6.mp3"},

    {songname:"Tere Vaste Falak", coverpic:"Songs/images/7.jpeg", path:"songs/7.mp3"},

    {songname:"Shape Of you", coverpic:"Songs/images/8.jpeg", path:"songs/8.mp3"},

    {songname:"Blinding Lights", coverpic:"Songs/images/9.jpeg", path:"songs/9.mp3"},

    {songname:"Heat Waves", coverpic:"Songs/images/10.jpeg", path:"songs/10.mp3"},



]

//       Handling master play Buttom           


let masterplay=document.getElementById('masterplay')
  masterplay.addEventListener('click',()=>{
   
    if(audioelement.paused || audioelement.currentTime<=0)
    {
       
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
       info.innerText= songslist[index].songname


        gif.style.opacity = 1;
       
       
        
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;


    }

})


//          Updating Seekbar

audioelement.addEventListener('timeupdate',()=>{
    
    //console.log('timeupdate');

    let seekprogress=parseInt((audioelement.currentTime/audioelement.duration)*100);

   

    seekbar.value=seekprogress;

})



seekbar.addEventListener('change',()=>{

    audioelement.currentTime=(seekbar.value*audioelement.duration)/100;
})

//------------------------Handling Songs List Play Button--------------------------------------//

const makeplay=()=>{

    listplay.forEach((e)=>{
        e.classList.remove('fa-circle-pause');
        e.classList.add('fa-circle-play');



    })
}

listplay.forEach((elem) => {

    elem.addEventListener('click',(e)=>{
       

        console.log(e.target.id);
        index=parseInt(e.target.id)+1;

       makeplay();
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioelement.src=`Songs/${index}.mp3`
       audioelement.play();
       info.innerText=songslist[index-1].songname


       gif.style.opacity = 1;

       

       masterplay.classList.remove('fa-circle-play');
       masterplay.classList.add('fa-circle-pause');
       
      



        
    })
    
});

//<-------------------------------------Handling Back button------------------------------------------------------->//

let backbutton=document.getElementById('backbutton');
backbutton.addEventListener('click',(e)=>{
    if(index<=1)
    {
        index=10;
    }
    else{
        index--;
    }
    audioelement.src=`Songs/${index}.mp3`;
    audioelement.play();
    info.innerText= songslist[index-1].songname



})


let forwardbutton=document.getElementById('forwardbutton');
forwardbutton.addEventListener('click',(e)=>{
    if(index>=10)
    {
        index=1;
    }
    else{
        index++;
    }
    audioelement.src=`Songs/${index}.mp3`;
    audioelement.play();
    info.innerText= songslist[index-1].songname



})
    
//-------------------------------------Song Name Updation--------------------------------------------------//

Array.from(document.getElementsByClassName('image')).forEach((Element,i)=>{

    Element.src=songslist[i].coverpic;

})

Array.from(document.getElementsByClassName('title')).forEach((Element,i)=>{

    Element.innerText=songslist[i].songname;
    
})