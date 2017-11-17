window.onload = function(){
    //获取要漂浮显示的div
    var div = document.getElementsByClassName("piao")[0];
    //获取div下的所有子元素
    var lis = div.children;
    //获取鼠标滑动到的标签的父级元素
    var list = document.getElementsByClassName("list")[0];
    //获取到要划过相应的子标签
    var $li = list.lastElementChild;
    //遍历实现漂浮窗下的子元素样式改变
    for(var i=0; i<lis.length; i++){
        var $a = lis[i].firstElementChild;
        $a.onmouseover = function(){
            // console.log(event.target,this);
            for(var j = 0;j<lis.length;j++){
                lis[j].firstElementChild.className = "";
            }
            this.className = "current";          
        }
    }
    //绑定鼠标划过相应的子标签漂浮窗口显示
    $li.addEventListener("mouseover",function(){
        div.style.display = "block";
    });
    //绑定鼠标移开相应的子标签漂浮窗口消失
    $li.addEventListener("mouseout",function(){
        div.style.display = "none";
    });
   
    for(var i=0; i<lis.length; i++){
         //绑定鼠标移动到漂浮窗口内容依然显示,不消失
        lis[i].addEventListener("mouseover",function(){
            div.style.display = "block"; 
    }); 
        //绑定鼠标移开漂浮窗口内容消失
        lis[i].addEventListener("mouseout",function(){
            div.style.display = "none";
        }); 
    }
}