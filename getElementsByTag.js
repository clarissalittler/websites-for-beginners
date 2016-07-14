window.onload = function () {
    var lists = document.getElementsByTag("ol");
  
    for(var i = 0; i < lists.length; i++){
        var list = lists[i];
        var newItem = document.createElement("li");
        newItem.appendChild(document.createTextNode("new element"));
        list.appendChild(newItem);
    }
};
