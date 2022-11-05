function getShows() {
    const search = document.getElementById('search').value;
    if (search === '') return alert('Please enter a show');
    fetch("https://api.tvmaze.com/search/shows?q=:" + search)
        .then(res => res.json())
        .then(data => {

            document.getElementById("shows").innerHTML = "";

            // Iterate through every item in the array
            data.forEach(show => {

                // Create a new row
                const row = document.createElement("tr");

                // Create a new cell for the image
                const imageCell = document.createElement("td");
                const image = document.createElement("img");
                image.src = show.show.image.medium;
                imageCell.appendChild(image);

                // Create a new cell for the show name
                const cell = document.createElement("td");
                cell.innerHTML = show.show.name;

                // Create a new cell for the summary
                const cell2 = document.createElement("td");
                cell2.innerHTML = show.show.summary;

                // Change the color of the row when you hover over it
                row.addEventListener("mouseover", function () {
                    row.style.backgroundColor = "lightgrey";
                });

                row.addEventListener("mouseout", function () {
                    row.style.backgroundColor = "white";
                });
                // Add the cell to the row
                row.appendChild(imageCell);
                row.appendChild(cell);
                row.appendChild(cell2);

                // Add the row to the table
                document.getElementById("shows").appendChild(row);
            });
        });

}
function returnToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.getElementById("returnButton").addEventListener("click", returnToTop);

document.getElementById("search").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        getShows();
    }
});
