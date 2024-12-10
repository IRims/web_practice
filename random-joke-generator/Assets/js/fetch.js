function getRandomJoke() {
    const jokeDiv = document.querySelector('.joke');
    jokeDiv.innerHTML = `<p class="text-center">Loading a joke...</p>`;
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch a joke");
            }
            return response.json();
        })
        .then((joke) => {
            jokeDiv.innerHTML = `
                    <div>
                        <h4>Here's a Joke for You!</h4>
                        <p class="mb-1"><strong>${joke.setup}</strong></p>
                        <p class="punchline">${joke.punchline}</p>
                    </div>
                `;
        })
        .catch((error) => {
            jokeDiv.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
        });
}

getRandomJoke();
