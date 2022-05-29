//const fullName = {
//firstName: 'Arthur',
//lastName: 'Amaral'
//}

const linksSocialMedia = {
  github: 'ArthurFAmaral95',
  youtube: '',
  facebook: '',
  instagram: 'arthurfamaral',
  twitter: 'arthuramaral95'
}

//const aboutText = 'An engineer learning how to code'

//function changeUserName() {
//userName.textContent = fullName.firstName + ' ' + fullName.lastName
//}

//function changeGithub() {
//for (let a of github.children) {
//a.href = `https://github.com/${linksSocialMedia.github}`
//}
// githubUserName.textContent = `${linksSocialMedia.github}`
//}

//function changeAboutText() {
//document.getElementById('aboutText').textContent = aboutText
//}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      githubLogo.href = data.html_url
      githubUserName.textContent = data.login
      githubUserName.href = data.html_url
      profilePicture.src = data.avatar_url
    })
}

//changeUserName()
//changeGithub()
//changeAboutText()
getGithubProfileInfos()
changeSocialMediaLinks()
