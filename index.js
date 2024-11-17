const articleContainer = document.querySelector(".container");
// lay the search ra
const searchInput = document.querySelector("#searchInput");
// tao 1 bien articlesList
let articlesList = null;
fetch("https://671e105a1dfc429919812c32.mockapi.io/api/article/articles", {
  method: "GET",
  headers: { "content-type": "application/json" },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    // handle error
  })
  .then((articles) => {
    // update lai articlesList
    articlesList = articles;
    console.log(articlesList);
    // Do something with the list of tasks
    renderFunction(articles);
  })
  .catch((error) => {
    // handle error
  });

// dinh nghia ham searchFunction
function searchFunction() {
  // lay value cua search
  const searchValue = searchInput.value.toLowerCase();
  console.log(searchValue);
  // tao 1 bien articlesFilter
  const articlesFilter = articlesList.filter(function (article) {
    return article.title.toLowerCase().includes(searchValue);
  });
  renderFunction(articlesFilter);
}
function renderFunction(articles) {
  articleContainer.innerHTML = "";
  for (let i = 0; i < articles.length; i++) {
    const articleElement = document.createElement("div"); // <div><p>title</p></div>
    articleElement.innerHTML = `
    <p class="red">${articles[i].title}</p>
    <img src=${articles[i].image} class='img'/>
    `;

    articleContainer.appendChild(articleElement);
  }
}
