const searchGithub = async () => {
    const username = document.getElementById("searchInput").value;
    const response = await fetch(`https://api.github.com/users/${username}`);

    const detailsContainer = document.getElementById("result"); // Only target the #result element
    const data = await response.json();

    if (response.ok) {
        detailsContainer.style.display = "block";  // Show the details container as a block element, not flex
        detailsContainer.innerHTML = `
            <div class="profile">
                <div class="profile-image">
                    <img src="${data.avatar_url}" alt="${data.login}'s avatar"/>
                </div>
                <div class="profile-details">
                    <h2 class="name">${data.name || data.login}</h2>
                    <p class="username">@${data.login}</p>
                    <p class="bio">${data.bio || 'Account doesn\'t have a bio.'}</p>
                    <div class="stats">
                        <div>
                            <div class="stats-name">Public Repos</div>
                            <div class="stats-value">${data.public_repos}</div>
                        </div>
                        <div>
                            <div class="stats-name">Followers</div>
                            <div class="stats-value">${data.followers}</div>
                        </div>
                        <div>
                            <div class="stats-name">Following</div>
                            <div class="stats-value">${data.following}</div>
                        </div>
                    </div>
                    <div class="media">
                        <p><span class="media-value">${data.location || 'Not Available'}</span></p>
                        <p><span class="media-value">${data.blog || 'Not Available'}</span></p>
                        <p><span class="media-value">${data.twitter_username || 'Not Available'}</span></p>
                        <p><span class="media-value">${data.company || 'Not Available'}</span></p>
                    </div>
                </div>
            </div>
        `;
    } else {
        alert(data.message);  // Show an error message if the API call fails
    }
};
