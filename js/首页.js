
window.onload = function(){
    var  $ul = document.getElementsByClassName("inner")[0];
    var $lis = $ul.children;
    console.log($lis);
    var $photos = document.getElementsByClassName("photos")[0];
    var $photosWidth = $photos.offsetWidth;
    var $luBo = document.getElementsByClassName("lunBo")[0];
    for(var i = 0;i<$lis.length;i++){
        $lis[i].index = i;
        $lis[i].onmouseover = function(){
            for(var j = 0;j<$lis.length;j++){
                $lis[j].className="";
            }
            this.className = "current";
            // console.log(-this.index*$photosWidth);
            animate( $luBo,-this.index*$photosWidth);
        }
    }
    function animate(ele,target){
        clearInterval(ele.timer);
        var speed = target>ele.offsetLeft?10:-10;
        ele.timer = setInterval(function(){
            var val = target - ele.offsetLeft;
            ele.style.left = ele.offsetLeft + speed +"px";
            if(Math.abs(val)<Math.abs(speed)){
					ele.style.left = target + "px";
					clearInterval(ele.timer);
				}
        },1);
    }


    var $outer = document.getElementById("outer");
    var $li = $outer.children;
    var $moveLeft_1 = document.getElementsByClassName("moveLeft_1")[0];
    var $moveLeft_2 = document.getElementsByClassName("moveLeft_2")[0]; 
    
 
    for(var i = 0;i<$li.length;i++){
        $li[i].onclick = function(){
            for(var j = 0;j<$li.length;j++){
                $li[j].className = "";
            }
            this.className = "outter";
            if(this.innerHTML=="机构"){
                $moveLeft_1.style.display = "block";
            }else if(this.innerHTML=="招募"){
                $moveLeft_1.style.display = "none";
                $moveLeft_2.style.display = "block";
            }
        }
    }
}
