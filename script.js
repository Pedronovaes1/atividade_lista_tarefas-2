var btnTask = document.getElementById('addTaskBtn');
var ul = document.getElementById('taskList')


btnTask.addEventListener('click', function() {
    var task = document.getElementById('taskInput').value;
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(task));
    li.innerHTML = li.innerHTML + '<button class="delete"></button>';
    ul.appendChild(li);
    document.getElementById('taskInput').value = '';

    var deleteBtn = document.getElementsByClassName('delete');
    for (var i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', function() {
            this.parentNode.remove();
        })
    }
})
