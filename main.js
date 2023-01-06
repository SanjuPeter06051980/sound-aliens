// https://teachablemachine.withgoogle.com/models/J4ucAgYL0/
function dance(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/J4ucAgYL0/model.json" ,ModelReady);
}

function ModelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error)
    console.error(error);
    else{
        console.log(results);
        random_num_r= Math.floor(Math.random() *255)+1;
        random_num_g= Math.floor(Math.random() *255)+1;
        random_num_b= Math.floor(Math.random() *255)+1;

        document.getElementById("result").innerHTML="I can hear:" + results[0].label;
        document.getElementById("accuracy").innerHTML= "Accuracy:" + (results[0].confidence*100).toFixed(3) +"%";
        document.getElementById("result").style.color= "rgb("+random_num_r+","+random_num_g+","+random_num_b+")";
        document.getElementById("accuracy").style.color= "rgb("+random_num_r+","+random_num_g+","+random_num_b+")";
    
        img1=document.getElementById("alien1");
        img2=document.getElementById("alien2");
        img3=document.getElementById("alien3");
        img4=document.getElementById("alien4");
    
        if(results[0].label =="clapp"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(results[0].label =="snapping"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(results[0].label =="Class 4"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";
        }
        else{
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";
        }
    }
}