// COLORS
const black = "#202028";
const darkblue = "#08033b";
const blue = "#5684e7";
const gray = "#b9b5cb";
const white = "#f1f2ff";

// FONTS
const cabin = "Cabin, arial, sans-serif";
const cutive = "Cutive, 'Times New Roman', serif";
const exo = "Exo, arial, sans-serif";
const fjalla = "'Fjalla One', arial, sans-serif";
const gurajada = "gurajada, arial, sans-serif";
const sofia = "'Sofia Sans Extra Condensed', arial, sans-serif";

// IMAGE LINKS
const logoIMG = "./pics/logo.jpg";
const linkedinIcon = "./pics/linkedin.jpg";
const githubIcon = "./pics/github.jpg";
const facebookIcon = "./pics/facebook.jpg";
const instagramIcon = "./pics/instagram.jpg";
const twitterIcon = "./pics/twitter.jpg";
const profilePic = "./pics/profilepic.jpg";

// SIZES, WIDTHS AND HEIGHTS
const headerHeigth = "80px";
const fullSiteWidth = "100vw";
const halfSite = 40;
const halfSiteWidth = halfSite + "vw";
const picHeigth = halfSite / 1.8 + "vw";
const itemMarginTop = "5vw";

// BODY ELEMENT
let body = document.body;
body.style.margin = "0";
body.style.padding = "0";

// MAIN DIV
let main = document.getElementById("main");
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.alignItems = "center";

// HEADER CONTENT - LOGO
function logo() {
  let logoContainer = document.createElement("div");
  let logo = document.createElement("img");
  logo.src = logoIMG;
  logo.alt = "logo for christian riis - web designer";
  logo.style.height = "81px";
  logoContainer.className = "logocontainer";
  logoContainer.style.width = "100px";
  logoContainer.style.paddingLeft = "5vw";
  logoContainer.appendChild(logo);
  return logoContainer;
}

// HEADER CONTENT - NAV LINKS
function nav() {
  let navContainer = document.createElement("div");
  navContainer.className = "navcontainer";
  navContainer.style.display = "flex";
  navContainer.style.flexDirection = "row";
  navContainer.style.justifyContent = "center";
  navContainer.style.alignItems = "center";
  navContainer.style.heigth = "70px";

  let about = document.createElement("div");
  let projects = document.createElement("div");
  let contact = document.createElement("div");
  const navItemsArray = [about, projects, contact];
  const navItemsArrayStrings = ["om meg", "prosjekter", "kontakt"];
  for (let i = 0; i < navItemsArray.length; i++) {
    let item = navItemsArray[i];
    item.textContent = navItemsArrayStrings[i];
    item.style.color = white;
    item.style.fontFamily = cutive;
    item.style.fontSize = "1.5rem";
    item.style.marginLeft = "3vw";
    navContainer.appendChild(item);
  }
  return navContainer;
}

// HEADER CONTENT - SOCIAL MEDIA ICONS
function socMed() {
  let socMedContainer = document.createElement("div");
  let linkedin = document.createElement("img");
  let github = document.createElement("img");
  let facebook = document.createElement("img");
  let twitter = document.createElement("img");
  let instagram = document.createElement("img");

  const socMedArray = [linkedin, github, twitter, facebook, instagram];
  const socMedStrings = ["linkedin", "github", "twitter", "facebook", "instagram"];
  for (let i = 0; i < socMedArray.length; i++) {
    let pic = socMedArray[i];
    let string = socMedStrings[i];
    pic.src = `./pics/${string}.jpg`;
    pic.alt = `${string} icon`;
    pic.style.width = "45px";
    pic.style.marginLeft = "0.5vw";
    pic.style.border = "1px solid black";
    pic.style.borderRadius = "10px";
  }
  socMedContainer.className = "socmedcontainer";
  socMedContainer.style.display = "flex";
  socMedContainer.style.flexDirection = "row";
  socMedContainer.style.justifyContent = "center";
  socMedContainer.style.alignItems = "center";
  socMedContainer.style.paddingRight = "5vw";
  socMedContainer.appendChild(linkedin);
  socMedContainer.appendChild(github);
  socMedContainer.appendChild(twitter);
  socMedContainer.appendChild(facebook);
  socMedContainer.appendChild(instagram);
  return socMedContainer;
}

// BUILD HEADER
function header() {
  let header = document.createElement("div");
  main.appendChild(header);
  header.className = "header";
  header.style.display = "flex";
  header.style.flexDirection = "row";
  header.style.justifyContent = "space-between";
  header.style.width = fullSiteWidth;
  header.style.height = headerHeigth;
  header.style.borderBottom = "1px solid black";
  header.style.backgroundColor = blue;
  header.appendChild(logo());
  header.appendChild(nav());
  header.appendChild(socMed());
}

// ABOUT CONTENT - PERSONAL PICTURE
function pic() {
  let pic = document.createElement("div");
  pic.className = "profilepic";
  pic.style.width = halfSiteWidth;
  pic.style.height = picHeigth;
  pic.style.backgroundImage = `url(${profilePic})`;
  pic.style.backgroundSize = "cover";
  pic.style.border = "1px solid black";
  pic.style.borderRadius = "20px";
  return pic;
}

// ABOUT CONTENT - PITCH
function pitch() {
  let pitch = document.createElement("div");
  pitch.className = "pitch";
  pitch.style.display = "flex";
  pitch.style.flexDirection = "column";
  pitch.style.alignItems = "center";
  pitch.style.width = halfSiteWidth;
  pitch.style.minHeight = picHeigth;
  pitch.style.border = "1px solid black";

  let name = document.createElement("h1");
  name.textContent = "Christian Tørre Riis";
  name.style.margin = "0";
  name.style.color = darkblue;
  name.style.fontFamily = fjalla;
  name.style.fontSize = "2.5rem";

  let title = document.createElement("h2");
  title.textContent = "Junior frontend-utvikler";
  title.style.margin = "5px 0 25px 0";
  title.style.color = blue;
  title.style.fontFamily = cabin;
  title.style.fontSize = "1.5rem";
  pitch.appendChild(name);
  pitch.appendChild(title);

  const pitchArray = [
    "Jeg er 35 år gammel, født og oppvokst i Bamble, og bor nå i Porsgrunn.",
    "I øyeblikket gjennomfører jeg kurs i frontend-utvikling på Kodehode i Larvik. Det er veldig moro og lærerikt, og jeg ser frem til å lære mer hver uke.",
    "Jeg liker spesielt å bruke Javascript til å lage enkle og effektive løsninger på komplekse problemer.",
    "På fritiden ser jeg mye på fotball og annen sport, og jeg liker å reise og å lage mat.",
  ];

  for (let i = 0; i < 4; i++) {
    let text = document.createElement("p");
    text.textContent = pitchArray[i];
    pitch.appendChild(text);
    text.style.fontFamily = cabin;
    text.style.fontSize = "0.875rem";
    text.style.margin = "5px 0";
    text.style.padding = "0";
    text.style.width = "90%";
  }
  return pitch;
}

// BUILD ABOUT
function about() {
  let about = document.createElement("div");
  main.appendChild(about);
  about.className = "about";
  about.style.display = "flex";
  about.style.flexDirection = "row";
  about.style.justifyContent = "space-evenly";
  about.style.alignItems = "center";
  about.style.height = "auto";
  about.style.width = fullSiteWidth;
  about.style.marginTop = itemMarginTop;
  about.appendChild(pic());
  about.appendChild(pitch());
}

// EXPERIENCE CONTENT LEFT - WORK
function work() {
  let work = document.createElement("div");
  work.className = "work";
  work.style.height = "300px";
  work.style.width = halfSiteWidth;
  work.style.border = "2px solid red";
  return work;
}

// EXPERIENCE CONTENT LEFT - EDUCATION
function education() {
  let education = document.createElement("div");
  return education;
}

// BUILD EXP LEFT
function expLeft() {
  let expLeft = document.createElement("div");
  expLeft.style.minHeight = "300px";
  expLeft.appendChild(work());
  expLeft.appendChild(education());
  return expLeft;
}

// EXPERIENCE CONTENT RIGHT - SKILLS
function skills() {
  let skills = document.createElement("div");
  skills.className = "skills";
  skills.style.width = halfSiteWidth;
  skills.style.minHeight = "300px";
  skills.style.border = "2px solid darkgreen";
  return skills;
}

// BUILD EXPERIENCE
function experience() {
  let exp = document.createElement("div");
  main.appendChild(exp);
  exp.className = "experience";
  exp.style.width = fullSiteWidth;
  exp.style.display = "flex";
  exp.flexDirection = "row";
  exp.style.justifyContent = "space-evenly";
  exp.style.marginTop = itemMarginTop;
  exp.appendChild(expLeft());
  exp.appendChild(skills());
  return exp;
}

// PROJECTS CONTAINER

// PROJECTS BUTTON

// BUILD PROJECTS
function projects() {
  let projects = document.createElement("div)");
  main.appendChild(projects);
  projects.className = "projects";
  projects.style.width = fullSiteWidth;
  projects.style.minHeight = "300px";
  projects.style.marginTop = marginTop;
  projects.style.display = "flex";
  projects.style.flexDirection = "column";
  projects.style.border = "2px solid blue";
  return projects;
}

// BUILD SITE
function buildSite() {
  header();
  about();
  experience();
  projects();
}
buildSite();
