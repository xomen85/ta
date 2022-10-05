const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id
  if (id) {
    //remover active from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active")
      //add class of active to a button once clicked
      e.target.classList.add("active")
    })
    //hide all the articles
    articles.forEach(function (article) {
      article.classList.remove("active")
    })
    const element = document.getElementById(id)
    element.classList.add("active")
  }
})
