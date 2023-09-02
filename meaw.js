//textarea element
var caption = document.getElementById("text");
//label element
let labelPic = document.getElementById("pic");
//button element
let post = document.getElementById("post");
//parent element
let parent = document.getElementById("posts");
//search element
let search = document.getElementById("search");


post.addEventListener('click', function(){
    let postman = document.createElement("div");
    let icon = document.createElement("div");
    let name = document.createElement("div");
    let paragraph = document.createElement("p");
    postman.className = "postman";
    icon.className = "icon";
    icon.innerHTML = `<i class="fa-solid fa-user fa-lg" style="color: #ffffff;"></i>`;
    name.className = "name";
    paragraph.innerText = "An anonymous added a new status";
    name.appendChild(paragraph);
    console.log(name);
    postman.appendChild(icon);
    postman.appendChild(name);
    let thePost = document.createElement("div");
    thePost.className = "card";
    let cap = document.createElement("div");
    let p = document.createElement("p");
    cap.className = "caption";
    p.innerText = caption.value;
    cap.appendChild(p);
    let imagediv = document.createElement("div");
    imagediv.className = "picture";
    let image = document.createElement("img");
    image.src = URL.createObjectURL(labelPic.files[0]);
    let reacts = document.createElement("div");
    reacts.className = "reacts";
    let like = document.createElement("div");
    like.className = "icons";
    like.innerHTML = `<i class="fa-solid fa-heart fa-2xl" style="color: #ffffff;"></i>`;
    let comment = document.createElement("div");
    comment.className = "icons";
    comment.innerHTML = `<i class="fa-solid fa-comment fa-2xl" style="color: #ffffff;"></i>`;
    let share = document.createElement("div");
    share.className = "icons";
    share.innerHTML = `<i class="fa-solid fa-share fa-2xl" style="color: #ffffff;"></i>`;
    reacts.append(like, comment, share);
    imagediv.appendChild(image);
    thePost.appendChild(postman);
    thePost.appendChild(cap);
    thePost.appendChild(imagediv);
    thePost.appendChild(reacts);
    parent.insertBefore(thePost, parent.firstChild);
    caption.value = "";
});
