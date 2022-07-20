function numbers(){
    var array=[];
    while(array.length<5){            
        var a=Math.floor(Math.random()*45 +1);  
        if(!array.includes(a)){ array.push(a); }                               
    }
    document.write(array);
}

function tzoker(){
    var j=Math.floor(Math.random()*20 +1);
    document.write(j);
}

function button(){
    var button = document.getElementById("btn");
    button.addEventListener("click", function(){location.reload()});
}