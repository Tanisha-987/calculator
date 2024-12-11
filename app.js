function get(v)
{
    document.getElementById("t1").value+=v
}

function empty(e)
{
    document.getElementById("t1").value=e
}

function equal()
{
let a=document.getElementById("t1").value
console.log(a)
let b= eval(a)
document.getElementById("t1").value=b
}

