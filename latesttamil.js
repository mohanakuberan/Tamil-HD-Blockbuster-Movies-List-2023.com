var movies = [
    "Chithha",
    "Irugapatru",
    "Jawan",
    "Leo",
    "jailer",
    "Mark Antony",
    "DD Returns",
    "Maveeran",
    "Por Thozhil",
    "Maamannan",
    "Goodnight",
    "Yaathisai",
    "Viduthalai",
    "Pathu Thala",
    "Ayothi",
    "Bakasuran",
    "Vaathi",
    "Viduthalai",
    "Thunivu",
    "Paramporul"
    // Add more movies to the array
];

function search() {
    var searchInput = document.getElementById("searchInput");
    var searchTerm = searchInput.value.toLowerCase();
    var searchResultContainer = document.getElementById("searchResult");

    // Clear previous search results
    searchResultContainer.innerHTML = "";

    // Filter movies based on the search term
    var searchResults = movies.filter(function (movie) {
        return movie.toLowerCase().includes(searchTerm);
    });

    // Display search results
    if (searchResults.length > 0) {
        searchResults.forEach(function (result) {
            var resultElement = document.createElement("div");
            resultElement.className = "search-result";
            resultElement.textContent = result;
            searchResultContainer.appendChild(resultElement);
        });
    } else {
        // No results found message
        var noResultsMessage = document.createElement("div");
        noResultsMessage.className = "no-results";
        noResultsMessage.textContent = "No results found.";
        searchResultContainer.appendChild(noResultsMessage);
    }
}
// Add this script to your JavaScript file or within a <script> tag in your HTML

// Add this script to your JavaScript file or within a <script> tag in your HTML

function submitComment() {
    var commentInput = document.getElementById("commentInput").value;

    // Check if the comment is not empty
    if (commentInput.trim() !== "") {
        // Create a new comment element
        var commentElement = document.createElement("p");
        commentElement.textContent = commentInput;

        // Append the comment to the container
        var commentContainer = document.getElementById("commentContainer");
        commentContainer.appendChild(commentElement);

        // Clear the comment input
        document.getElementById("commentInput").value = "";
    } else {
        alert("Please enter a comment before submitting.");
    }
}
