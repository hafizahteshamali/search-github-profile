let user = document.getElementById("user");
let displayBox = document.getElementById("display-box");
let srchBtn = document.getElementById("srchBtn");
let Error = document.getElementById('error');

const FetchingAPI = () => {
  event.preventDefault();

  fetch(`https://api.github.com/users/${user.value.toLowerCase()}`)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);
      displayBox.innerHTML = `
        <div class="card" style="width: 18rem; margin:30px auto">
        <div class="img-wrapper">
        <img src="${data.avatar_url}" class="card-img-top" alt="">
        </div>
  <div class="card-body">
    <h4 class="card-title">${data.name}</h4>
    <span>${data.login}</span>
    <p class="card-text">${data.bio}</p>
    <hr>
    <div class"following-wrapper">
    <i class="fa-solid fa-users"></i>
    <span>Followers ${data.followers}</span>
    <span>${data.following}  Following</span>
    </div>

    <div class="btn-wrapper"><a href="#" class="btn btn-success">Follow</a></div>
  </div>
</div>
`;
    })

    .catch((error) => {
      Error.innerText = `API Not Found!!`;
      setTimeout(()=>{
        Error.innerText = "";
      }, 1000);
    });

    user.value = "";
}

srchBtn.addEventListener("click", FetchingAPI);
