export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    newPageTitle = "Chris Carucc's Portfolio";
    document.title = newPageTitle;
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    document.body.children[0].children[0].innerText = "Chris Carucci"
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    document.body.children[1].children[1].innerText = "Vidi Viti Vici?"
    document.body.children[1].children[2].innerText = "No sei Italiano!"
}

export function newPageTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    newPageTitle = "New Page Titleaa";
    document.title = newPageTitle;
}

