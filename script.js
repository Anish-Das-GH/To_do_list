let input = document.getElementById('input')
let btn = document.getElementById('btn')
let text = document.getElementById('text')
btn.addEventListener('click', work)
input.addEventListener('keypress',function(e){
   if (e.key == "Enter Task !!")
    {
      work();   
    }
})
function work()
{
if(input.value == "")
{
    alert("Enter Task!!!")
}
else
{
let newele = document.createElement("h3");
newele.innerHTML = `${input.value}<i class="fa-solid fa-trash fa-shake"></i>`;
text.appendChild(newele);
input.value = "";
let rem = newele.querySelector("i");
rem.addEventListener("click",del);
function del()
{
    newele.remove();
}

}
}
