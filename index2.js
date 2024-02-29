function addtask()
{
    var input=document.getElementById("input").value
    var ele=document.getElementById("task-container")
    console.log(ele)
    var newele=document.createElement("div")
    newele.setAttribute('id','ind-task')
    newele.innerHTML=`<p>${input}</p><button onclick="deletetask(event)">Delete</button>`
    ele.append(newele)
    
}
function deletetask(event)
{
    event.target.parentElement.remove()
}