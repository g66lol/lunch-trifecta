fetch('foods.json')
  .then(response => response.json())
  .then(data => {
    const resultsContainer = document.getElementById('results');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    function displayResults(items) {
      resultsContainer.innerHTML = '';
      items.forEach(item => {
        const foodItem = document.createElement('div');
        foodItem.textContent = item.name + ' - ' + item.category;
        resultsContainer.appendChild(foodItem);
      });
    }

    function filterItems() {
      const searchText = searchInput.value.toLowerCase();
      const category = categoryFilter.value;
      const filteredItems = data.foods.filter(item => {
        return (item.name.toLowerCase().includes(searchText) && (category === 'all' || item.category === category));
      });
      displayResults(filteredItems);
    }

    searchInput.addEventListener('input', filterItems);
    categoryFilter.addEventListener('change', filterItems);

    displayResults(data.foods);
  });
