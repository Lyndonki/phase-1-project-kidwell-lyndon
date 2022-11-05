function getShows() {
    const search = document.getElementById('search').value;
    if (search === '') return alert('Please enter a show');
    fetch("https://api.tvmaze.com/search/shows?q=:" + search)
        .then(res => res.json())
        .then(data => {

            document.getElementById("shows").innerHTML = "";

            // Iterate through every item in the array
            data.forEach(show => {

            });
        });

}

