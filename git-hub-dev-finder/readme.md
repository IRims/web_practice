# GitHub User Info Viewer

This project is a simple web application that allows users to fetch and display GitHub user information and repositories by entering a GitHub username. If the API response is not available or the request fails, a fallback result with default data is displayed.

## Features
- Fetch GitHub user data and repositories using the GitHub API.
- Cache fetched results to avoid redundant API calls.
- Display a fallback result with default data when the API response is unavailable.
- User-friendly interface with a clean design.

## Demo
Insert a screenshot or demo GIF of your application here.

## How It Works
1. Enter a GitHub username in the input field.
2. Click the **Fetch Data** button to retrieve information.
3. The application will:
   - Fetch and display the user's avatar, name, bio, and a list of repositories.
   - Cache the result for future use.
   - Display fallback data if the GitHub API fails to fetch the requested user information.

## Technologies Used
- **HTML**: For structuring the content.
- **CSS**: For styling the interface (dark theme supported).
- **JavaScript**: For handling API requests, caching results, and dynamic UI updates.

