function getlcoalUser() {
  return JSON.parse(localStorage.getItem("loginUser")) || false;
}
let lcoalUser = getlcoalUser();
if (!lcoalUser) {
  if (window.location.href.indexOf("login.html") == -1) {
    window.location.href = "login.html";
  }
}
function generateError(message) {
  let errorMsg = document.getElementById("errorMsg");
  errorMsg.innerHTML = `<h5>${message}</h5>`;
  errorMsg.setAttribute("class", "p-5 fixed-top badge badge-danger d-block");
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

function logoutFunc() {
  localStorage.removeItem("loginUser");
  window.location.reload();
}

window.addEventListener("load", () => {
  let logout = document.getElementById("logout");
  logout.addEventListener("click", logoutFunc);
});
