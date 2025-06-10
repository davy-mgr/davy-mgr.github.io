document.getElementById("searchButton").addEventListener("click", searchShows);

async function searchShows() {
    const query = document.getElementById("searchInput").value.trim();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (query === "") {
        resultsDiv.innerHTML = "<p>Please enter a search term.</p>";
        return;
    }

    const URL = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(URL);
        const data = await response.json();

        if (data.length === 0) {
            resultsDiv.innerHTML = "<p>No shows found.</p>";
            return;
        }

        data.forEach(result => {
            const show = result.show;
            const showDiv = document.createElement("div");
            showDiv.className = "show";

            const title = document.createElement("h2");
            title.textContent = show.name;

            const summary = document.createElement("div");
            summary.innerHTML = show.summary || "<em>No summary available.</em>";

            const genres = document.createElement("p");
            genres.textContent = "Genres: " + (show.genres.length ? show.genres.join(", ") : "N/A");

            showDiv.appendChild(title);
            showDiv.appendChild(summary);
            showDiv.appendChild(genres);
            resultsDiv.appendChild(showDiv);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        resultsDiv.innerHTML = "<p>Something went wrong. Please try again later.</p>";
    }
}
