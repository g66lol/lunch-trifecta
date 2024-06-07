fetch('foods.json')
  .then(response => response.json())
  .then(data => {
    const resultsContainer = document.getElementById('results');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    function displayResults(items) {
      resultsContainer.innerHTML = '';
      
      const table = document.createElement('table');
      table.classList.add('results-table');
      
      // Create table header
      const headerRow = table.insertRow();
      headerRow.innerHTML = '<th>Name</th><th>Category</th>';
      
      // Populate table with data
      items.forEach(item => {
        const row = table.insertRow();
        row.innerHTML = `<td>${item.name}</td><td>${item.category}</td>`;
      });
      
      resultsContainer.appendChild(table);
    }

    function filterItems() {
      const searchText = searchInput.value.toLowerCase();
      const category = categoryFilter.value;
      const filteredItems = data.foods.filter(item => {
        return (item.name.toLowerCase().includes(searchText) && (category === 'all' || item.category === category));
      });
      displayResults(filteredItems);
    }

    searchInput.addEventListener('input', () => filterItems());
    categoryFilter.addEventListener('change', () => filterItems());
  });
