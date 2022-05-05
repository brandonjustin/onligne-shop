
document.getElementById("open-card").addEventListener("click", function(){
document.getElementById("card-item").style.display="block";
var exit = document.getElementById("card-item");
window.onclick = function(event) {
    if (event.target == exit) {
        exit.style.display = "none";
    }
}
});


document.getElementById("menu-show").addEventListener("click", function(){
    document.getElementById("menu-panel").style.display="block";

    });
    document.getElementById("closed").addEventListener("click", function(){
        document.getElementById("menu-panel").style.display="none";

        });
        

        document.getElementById("open-card2").addEventListener("click", function(){
            document.getElementById("card-item").style.display="block";
            var exit = document.getElementById("card-item");
            window.onclick = function(event) {
                if (event.target == exit) {
                    exit.style.display = "none";
                }
            }
            });

            var myVar;
function welcome(){
myVar= setTimeout(show,3000);

}

function show(){
    document.getElementById("loader").style.display="none";
    document.getElementById("container").style.display="block";
}




document.getElementById("disturb").addEventListener("click",function(){
    document.getElementById("container_cool").style.visibility +="visible";
    document.getElementById("run").style.display = "none";

});

document.getElementById("fool").addEventListener("click",function(){
    document.getElementById("run").style.display = "block";
    document.getElementById("container_cool").style.visibility="hidden";
 
});

document.getElementById("previous").addEventListener("click", function(){
document.getElementById("slider-scroll").style.backgroundImage = "url('images/image-product-3.jpg')";


});


var button = document.getElementById("disturb");
count = 0;
button.onclick = function(){
count +=0;
var item = document.getElementById("good");
item.innerHTML = count;

}

var push = document.getElementById("pluss");
count = 0;
push.onclick = function(){
    count +=1;
    var item = document.getElementById("zero");
    item.innerHTML = count;
}
var push = document.getElementById("minus");
count = 0;
push.onclick = function(){
    count -=1;
    var item = document.getElementById("zero");
    item.innerHTML = count;
}