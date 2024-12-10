async function fetchGitHubData() {
    const username = document.getElementById("username").value.trim();
    const resultDiv = document.getElementById("result");
    const userAvatarDiv = document.getElementById("user-avatar");
    const userDetailsDiv = document.getElementById("user-details");
    const repoList = document.getElementById("repo-list");

    if (!username) {
        alert("Please enter a username.");
        return;
    }

    resultDiv.style.display = "none"; // Hide the result section initially

    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error("User not found");
        const userData = await userResponse.json();

        const reposResponse = await fetch(userData.repos_url);
        const reposData = await reposResponse.json();

        userAvatarDiv.innerHTML = `
                    <img src="${userData.avatar_url}" alt="${username}'s avatar" style="border-radius: 50%; width: 150px; margin: 10px auto; display: block;" />
                `;

        userDetailsDiv.innerHTML = `
                    <strong>Name:</strong> ${userData.name || "N/A"}<br>
                    <strong>Bio:</strong> ${userData.bio || "N/A"}<br>
                    <strong>Location:</strong> ${userData.location || "N/A"}<br>
                    <strong>Followers:</strong> ${userData.followers}<br>
                    <strong>Following:</strong> ${userData.following}<br>
                `;

        repoList.innerHTML = reposData
            .map(repo => `<li>
                <a href="${repo.html_url}" target="_blank"><i class="fa-solid fa-code-branch"></i> ${repo.name}</a></li>`)
            .join("");

        resultDiv.style.display = "block";

    } catch (error) {
        alert(error.message);
    }
}