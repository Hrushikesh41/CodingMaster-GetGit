let username = document.getElementById("username");
let searchBtn = document.getElementById("btn");
let showUsers = document.getElementById("showUsers")

searchBtn.addEventListener('click', () => {
    users = username.value;

    console.log(users);
    showData();

});

showData = () => {
    url = `https://api.github.com/users/${users}`;


    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {

        if (data.login == undefined) {
            let content = "";
            content += `<div id="showUsers">
        <div class="showContent"
        <div class="profile">
        </div>
        <div class="login"> No Username Found</div>
        <div class="bio">
        <a href ="https://github.com/" target = "_blank">Create GitHub Account</a>
        </div>
        <div class="link">
            
        </div>
        </div>
    </div>`;

            showUsers.innerHTML = content;
        } else {
            console.log(data.avatar_url);

            let content = "";
            content += `<div id="showUsers">
        <div class="showContent"
        <div class="profile">
        <img src="
        ${data.avatar_url}
        " alt="Profile Pic">
        </div>
        <div class="login">Username : ${data.login}</div>
        <div class="bio">
            Bio : ${data.bio}
        </div>
        <div class="link">
            GitHub Profile Link : <a href ="${data.html_url}" target = "_blank">Click Here</a>
        </div>
        </div>
    </div>`;

            showUsers.innerHTML = content;
        }
    });
}