//your JS code here. If required.
 const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
                      'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
                      'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
                      'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        // Function to remove articles for sorting
        function stripArticle(name) {
            return name.replace(/^(a |an |the )/i, '').trim();
        }

        // Sort bands while ignoring articles
        const sortedBands = bands.sort((a, b) => 
            stripArticle(a).localeCompare(stripArticle(b))
        );

        // Populate the list
        const list = document.getElementById('band');
        sortedBands.forEach(band => {
            const li = document.createElement('li');
            li.textContent = band;
            list.appendChild(li);
        });