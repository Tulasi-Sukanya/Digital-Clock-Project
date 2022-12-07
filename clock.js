function displayTime(){
    let dt = new Date();
    let hrs = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();
    let a=document.getElementById('ampm').innerText;
    console.log(a);
    

    if(hrs > 12){
        hrs = hrs - 12;
        document.getElementById("ampm").innerHTML = "PM"
    }
    else{
        document.getElementById("ampm").innerHTML = "AM"
    }
    if(hrs < 10){
        hrs = "0" + hrs;
    }
    if(min <10){
        min = "0" + min;
    }
    if(sec <10){
        sec = "0" + sec;
    }
    hrs.textContent=hrs;
    min.textContent=min;
    sec.textContent=sec;
    document.getElementById("hrs").innerHTML = hrs 
    document.getElementById("min").innerHTML = min 
    document.getElementById("sec").innerHTML = sec
    // based on clock messages for morning,afternoon,evening and night..
    if(hrs <= 12 && a === "AM"){
        var msg = "GRAB SOME HEALTHY BREAKFAST !!!";
        var wish = "GOOD MORNING !! WAKE UP !!"
    }
    if((hrs >= 12 && hrs <= 3) && a === "PM"){
        var msg = "LETS HAVE SOME LUNCH !!!";
        var wish = "GOOD AFTERNOON !! TAKE SOME SLEEP!!"
    }
    if((hrs >= 4 && hrs <= 6) && a === "PM"){
        var msg = "STAY YAWNING,GET SOME TEA.. ITS JUST EVENING!";
        var wish = "GOOD EVENING !!!"
    }
    if((hrs > 7 && hrs < 12) && a === "PM"){
        var msg = "CLOSE YOUR EYES AND GO TO SLEEP...";
        var wish = "GOOD NIGHT !!"
    }
    document.getElementById("msg").innerHTML = msg;
    document.getElementById("wish_msg1").innerHTML = wish;
}
setInterval(displayTime,1000);

// changing image by time

const changeimage = () => {
    // e.preventDefault();
    let wake=document.getElementById('wakeup').value;
    let lunch=document.getElementById('lunch').value;
    let napp=document.getElementById('nap').value;
    let nyt=document.getElementById('night').value;
    let a=document.getElementById('ampm');
    let ph=parseInt(hrs.innerText)
    let arr1=wake.split(" ")
    let arr2=lunch.split(" ")
    let arr3=napp.split(" ")
    let arr4=nyt.split(" ")
    console.log(arr1[0],"wu");
    console.log(arr2[0]),"lu";
    console.log(arr3[0],"na");
    console.log(arr4[0],"ny");
    console.log(ph);

if(arr1[0]==ph && arr1[1]==a.innerText){
    // document.getElementById("img-container").innerText="fetchimage"
    // console.log("some Error");
    document.getElementById("img-container").style.backgroundImage="url(./assets/images/gm.jpeg)"
   document.getElementById("img-container").style.backgroundRepeat = "no-repeat"
   document.getElementById("img-container").style.backgroundSize = "cover"
}
else if(arr2[0]==ph && arr2[1]==a.innerText){
    document.getElementById("img-container").style.backgroundImage="url(./assets/images/gf.jpeg)"
    document.getElementById("img-container").style.backgroundRepeat = "no-repeat"
    document.getElementById("img-container").style.backgroundSize = "cover"
}
else if(arr3[0]==ph && arr3[1]==a.innerText){
    document.getElementById("img-container").style.backgroundImage="url(./assets/images/goodeve.jpg)"
    document.getElementById("img-container").style.backgroundRepeat = "no-repeat"
    document.getElementById("img-container").style.backgroundSize = "cover"
}
else if(arr4[0]==ph && arr4[1]==a.innerText){
    document.getElementById("img-container").style.backgroundImage="url(./assets/images/gn.jpeg)"
    document.getElementById("img-container").style.backgroundRepeat = "no-repeat"
    document.getElementById("img-container").style.backgroundSize = "cover"
}
else{
    document.getElementById("img-container").style.backgroundImage = "url(./assets/images/wel5.jpg)"
    document.getElementById("img-container").style.backgroundRepeat = "no-repeat"
    document.getElementById("img-container").style.backgroundSize = "cover"
}
setInterval(changeimage  ,18000)
};
let img=document.querySelector("#alarm_btn");
img.addEventListener("click",changeimage);
changeimage();
// alarm time shedule
const alarmTimeShedule=()=>{
    let wake=document.getElementById('wakeup').value;
    let lunch=document.getElementById('lunch').value;
    let napp=document.getElementById('nap').value;
    let nyt=document.getElementById('night').value;

    if(wake === "Set time"){
        document.getElementById('wT').innerText=" ";
    }
    else{
        document.getElementById('wT').innerText=wake;
    }
    if(lunch === "Set time"){
        document.getElementById('lT').innerText=" ";
    }
    else{
        document.getElementById('lT').innerText=lunch;
    }
    if(napp === "Set time"){
        document.getElementById('nT').innerText=" ";
    }
    else{
        document.getElementById('nT').innerText=napp;
    }
    if(nyt === "Set time"){
        document.getElementById('ntT').innerText=" ";
    }
    else{
        document.getElementById('ntT').innerText=nyt;
    }
}
let btn=document.getElementById('alarm_btn');
btn.addEventListener("click", alarmTimeShedule);
let value = document.getElementById("wakeup").value;
console.log(value);