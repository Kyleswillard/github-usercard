import axios from 'axios';

/*

STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const gitApi = "https://api.github.com/users/"

axios.get(`${gitApi}kyleswillard`) //Returns the user information from the Github API - COMPLETE

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    DATA:
    {
  "login": "Kyleswillard",
  "id": 68755034,
  "node_id": "MDQ6VXNlcjY4NzU1MDM0",
  "avatar_url": "https://avatars1.githubusercontent.com/u/68755034?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Kyleswillard",
  "html_url": "https://github.com/Kyleswillard",
  "followers_url": "https://api.github.com/users/Kyleswillard/followers",
  "following_url": "https://api.github.com/users/Kyleswillard/following{/other_user}",
  "gists_url": "https://api.github.com/users/Kyleswillard/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Kyleswillard/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Kyleswillard/subscriptions",
  "organizations_url": "https://api.github.com/users/Kyleswillard/orgs",
  "repos_url": "https://api.github.com/users/Kyleswillard/repos",
  "events_url": "https://api.github.com/users/Kyleswillard/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Kyleswillard/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Kyle Willard",
  "company": null,
  "blog": "kylewillard.com",
  "location": "Oregon",
  "email": null,
  "hireable": null,
  "bio": "Full Stack Web Developer - Lambda School Student",
  "twitter_username": null,
  "public_repos": 44,
  "public_gists": 1,
  "followers": 3,
  "following": 8,
  "created_at": "2020-07-24T19:43:30Z",
  "updated_at": "2020-10-27T21:45:59Z"
}
    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card"> => Added
      <img src={image url of user} /> => Added
      <div class="card-info">
        <h3 class="name">{users name}</h3> => Added
        <p class="username">{users user name}</p> => Added
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const createCard = user => {
let ghUser = user.data
let div = document.createElement('div')
  div.classList.add('card');

let image = document.createElement('img');
  image.attributes('src', ghUser.avatar_URL);

let h3 = document.createElement('h3');
  h3.classList.add('name')
  h3.textContent(ghUser.name)

let username = document.createElement('p')
  username.classlist.add('username');
  username.textContent(ghUser.username)

let loc = document.createElement('p')
  loc.textContent(ghUser.location)

let profile = document.createElement('p')
  profile.textContent("Profile: ")

let url = document.createElement('a')
url.href = ghUser.url
url.textContent = ghUser.url
profile.appendChild(url)






}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/