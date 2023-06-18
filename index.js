function searchMenu(keyword) {
  document.getElementById("menu-container").innerHTML = "";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then(response => response.json())
    .then(data => {
      const menu = data.menu;
      if (menu) {
        menu.forEach(element => {
          
        });(menu => {
          const menuItem = document.createElement("div");
          menuItem.classList.add("menu-item");

          const menuImage = document.createElement("img");
          menuImage.src = menu.strMeal;
          menuImage.alt = menu.strMeal;
          menuItem.appendChild(menuImage);

          const menuTitle = document.createElement("h3");
          menuTitle.textContent = menu.strMeal;
          menuItem.appendChild(menuTitle);

          document.getElementById("menu-container").appendChild(menuItem);
        });
      } else {
        const noResult = document.createElement("p");
        noResult.textContent = "Tidak ada hasil pencarian.";
        document.getElementById("menu-container").appendChild(noResult);
      }
    })
    .catch(error => {
      console.log(error);
    });
}

document.getElementById("search-form").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const keyword = document.getElementById("search-input").value;
  searchMenu(keyword);
});
