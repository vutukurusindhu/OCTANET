document.addEventListener('DOMContentLoaded',function()
{
    let text=document.getElementById('inputtext');
    let button=document.getElementById('addButton');
    let list=document.getElementById('list-items');
    button.addEventListener('click',function()
        {
       let text1 =  text.value.trim();
       if(text1!=="")
        {
            add(text1);
            text.value="";
        }

        }
    );
    list.addEventListener('click',function(e)
{
   if(e.target.classList.contains('remove'))
    {
        e.target.parentElement.remove();
    }

});
function add(task)
{
    let li=document.createElement('li');
    li.textContent=task;

    let span = document.createElement('span');
    span.textContent = 'X';
    span.classList.add('remove');
    li.appendChild(span);
    list.appendChild(li);
}
}
);