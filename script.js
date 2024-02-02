function searchWord() {
        const wordInput = document.getElementById('wordInput').value.trim().toLowerCase();
    
        if (wordInput === '') {
            alert('Please enter a word.');
            return;
        }
    
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`)
        .then(response => response.json())
        .then(data => {
            displayResult(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred. Please try again.');
        });
    }
    

    function displayResult(data) {
        const resultContainer = document.getElementById('resultContainer');
        const wordTitle = document.getElementById('wordTitle');
        const definition = document.getElementById('definition');
        const example = document.getElementById('example');
        const partOfSpeech = document.getElementById('partOfSpeech');
    
        if (data.title === "No Definitions Found") {
            resultContainer.classList.add('hidden');
            alert('Word not found. Please try another word.');
        } else {
            resultContainer.classList.remove('hidden');
            wordTitle.innerText = data[0].word;
            definition.innerText = `Definition: ${data[0].meanings[0].definitions[0].definition || 'Not available'}`;
            example.innerText = `Example: ${data[0].meanings[0].definitions[0].example || 'Not available'}`;
            partOfSpeech.innerText = `Part of Speech: ${data[0].meanings[0].partOfSpeech || 'Not available'}`;
        }
    }
    