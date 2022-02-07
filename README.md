# EPAI Website
This repo contains the code for EPAI's React based website in the "main" branch.
When compiled the code is deployed to the "gh-pages" branch as that is where the code is hosted from.

## Usage
In order to run this site locally for editing or testing purposes you can do the following:

1. Pull the GitHub Repository to your local machine
2. Open your local instance of this repo and Run `npm install` in your terminal to install the necessary npm packages for the site
3. You can now run `npm start` to run the site on your localhost. A window should automatically open for this.
4. You're now free to edit the website and view live changes on your local instance. 
##### Important:
Before making edits ensure you have pulled the current version of the website to avoid conflicts if someone else has made changes.
After making edits ensure that you push to the repo. Either in a separate branch to be merged with the main or directly to main if you only made small tweaks.

5. When you are happy with your changes you can run `npm run deploy` to deploy the site to the GitHub Pages deployment.


## Creating a New Page
1. Start by duplicating the `src/template.jsx` file and renaming it to a descriptive name. Its contents are approximately as follows:
```javascript
import React from "react";
import panel from "../../images/ethics_panel_page.png" // Image Import

export default function template() {
  return (
    <div className="about">
      <div class="container">
        <div class="my-5">
            <div class="container">
                <h1>Template</h1> // Example Title
            </div>
            <hr/>
            <p style={{'textAlign': 'center'}}>Centered Body Text</p>
            <img alt="" class="rounded" style={{'width':'100%'}} src={panel}/> // Image Usage
        </div>
      </div>
    </div>
  );
}
```

2. Change `template` in line 4 to an equally descriptive name for this page. This will also need to be added to two other files. For this example whenever you see "template" replace that with the name you put here.
3. Edit `src/index.js` to add a line that says:
`export { default as template } from "./template";`
4. Edit `./index,js` as follows:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Joinus,
  Projects,
  Events,
  RaiSoden,
  Dullerud,
  Fair2021,
  Info2021,
  Info2022,
  Panel2021,
  News,
  ReadingGroup,
  ScrollToTop,
+ template,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <p style={{"padding-top": "50px"}}></p>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/joinus" element={<Joinus />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/events" element={<Events />} />
      <Route path="/raisoden" element={<RaiSoden />} />
      <Route path="/dullerud" element={<Dullerud />} />
      <Route path="/fair2021" element={<Fair2021 />} />
      <Route path="/info2021" element={<Info2021 />} />
      <Route path="/info2022" element={<Info2022 />} />
      <Route path="/panel2021" element={<Panel2021 />} />
      <Route path="/news" element={<News />} />
      <Route path="/ReadingGroup" element={<ReadingGroup />} />
      // Where the path represents the routing for how to access the page.
+     <Route path="/template" element={<template />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();

```
Now the file is created and will be accessible via the chosen path after deployment.

This can be linked to from another page or the NavBar using NavLink.

## Layout / Fun Facts
- The bulk of the site's content can be found within `src/components` with `src/template.jsx` being a great starting point for building out new pages
- When you run `npm run deploy` the deployment will be compiled into the `gh-pages` branch which is where the site is being hosted from. This allows us to continue using the main branch for our primary codebase
- While React is typically used for creating single page websites, you can make use of `react-router-dom` to allow pseudo multi-page websites as we have done here. This can result in some complications with GitHub trying to load from alternative repositories when using paths to access these pages. This can be fixed by creating a 404.html file to redirect these 404 errors back to your main repository.