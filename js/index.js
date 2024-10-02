//Create Dynamic Category Button section

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories))
    .catch((error) => console.log(error));
};

const displayCategory = (categories) => {
  const showCategory = document.getElementById("showCategory");
  categories.map((item) => {
    console.log(item);
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    showCategory.appendChild(button);
  });
};

loadCategory();

// Create Dynamic Video Sections
