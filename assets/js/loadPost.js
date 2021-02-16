
const postDiv = document.getElementById("myPost")

function loadPost(){
    const xhr = new XMLHttpRequest();

    //change file URL up on your location
    xhr.open('GET', 'assets/json/post.json', true);  

    xhr.onload = function() {
        if (this.status === 200)     //check the status  
        {
            const post = JSON.parse(this.responseText);
            let output = `
                    <div class="item">
                        <div class="image"> <img src="${post.image}"> </div>
                        <div class="content">
                                <a class="header" href="#" id="bTitle"> ${post.postTitle} </a>
                                <div class="meta">
                                    <span id="bDate">${post.date} </span>
                                    <span>By: <a href="#" id="bAuthor"> ${post.name}</a></span>
                                </div>
                                <div class="description">  <p id="bDesc">  ${post.postText} </p>  </div>
                                <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
                        </div>
                    </div> `;
            postDiv.innerHTML = output;
        }
    }

    xhr.send();
}

