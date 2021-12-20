 function display(val)
 {
     document.getElementById("id1").value+=val;
 }
 function solve()
 {
     var x=document.getElementById("id1").value;
     var y=eval(x);
     document.getElementById("id1").value=y;
    }
    function clr()
    {
        document.getElementById("id1").value='';
    }