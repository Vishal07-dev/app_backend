require('dotenv').config()
const express = require('express')
const app = express()
const port=4000

const mydata={
    "login": "Vishal07-dev",
  "id": 156299618,
  "node_id": "U_kgDOCVDxYg",
  "avatar_url": "https://avatars.githubusercontent.com/u/156299618?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Vishal07-dev",
  "html_url": "https://github.com/Vishal07-dev",
  "followers_url": "https://api.github.com/users/Vishal07-dev/followers",
  "following_url": "https://api.github.com/users/Vishal07-dev/following{/other_user}",
  "gists_url": "https://api.github.com/users/Vishal07-dev/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Vishal07-dev/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Vishal07-dev/subscriptions",
  "organizations_url": "https://api.github.com/users/Vishal07-dev/orgs",
  "repos_url": "https://api.github.com/users/Vishal07-dev/repos",
  "events_url": "https://api.github.com/users/Vishal07-dev/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Vishal07-dev/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rohera Vishal Sanjaybhai",
  "company": null,
  "blog": "https://vishal-personal-portfolio.netlify.app/",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 1,
  "following": 4,
  "created_at": "2024-01-11T08:45:38Z",
  "updated_at": "2025-02-21T06:54:16Z"
}

app.get('/',(req,res)=>{
    res.send('Hello')
})
app.get('/twitter',(req,res)=>{
    res.send('<h1>The twitter called</h1>')
})
app.get('/github',(req,res)=>{
    res.json(mydata)
})

app.listen(process.env.PORT,(req,res)=>{
    console.log(`server created listning at ${port}`);
    
})