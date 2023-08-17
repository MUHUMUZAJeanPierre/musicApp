document.getElementById('searchBtn').addEventListener('click', function() {
    const songName = document.getElementById('songName').value;
    if (songName) {
        const apiKey = 'b2861586eb1754fa77bc1d15df58f36c';
        const apiUrl = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${encodeURIComponent(songName)}&api_key=${apiKey}&format=json`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const track = data.results.trackmatches.track[0];
                const resultsDiv = document.getElementById('results');
                resultsDiv.innerHTML = `
                    <h2>${track.name}</h2>
                    <p>Artist: ${track.artist}</p>
                    <p>Album: ${track.album}</p>
                    <p>Year of Release: ${track.year}</p>
                    <a href="${track.url}" target="_blank">More Info</a>
                `;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});
