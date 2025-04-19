        // Load data from the JSON file
        async function loadData() {
            const response = await fetch('data.json');
            const data = await response.json();
            return data;
        }

        // Search function
        async function searchFunction() {
            const input = document.getElementById('searchInput').value.toLowerCase();
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // Clear previous results

            const data = await loadData();

            const filteredData = data.filter(item => item.name.toLowerCase().includes(input));

            // Display filtered results
            filteredData.forEach(item => {
                const div = document.createElement('div');
                div.className = 'result-item';
                
                // Create an anchor element
                const anchor = document.createElement('a');
                anchor.href = `details.html?id=${item.id}`; // Adjust the link as needed
                anchor.textContent = item.name; // Set anchor text to the fruit name
                anchor.style.textDecoration = 'none'; // Remove underline from anchor
                anchor.style.color = 'inherit'; // Use the color of the parent (result-item)

                // Append the anchor to the result item
                div.appendChild(anchor);
                
                // Create a paragraph for the description
                const descriptionText = document.createElement('p');
                descriptionText.className = "username";
                descriptionText.textContent = item.description;
                
                div.appendChild(descriptionText);
                resultsDiv.appendChild(div);
            });
        }