// Function to validate src parameter
function validateSrc() {
    if (!unr) {
        unr = "Herox";
        return
    }
    let spl = unr.split("/");
    if (spl.length < 2 || spl[1] == "") {
        return throwError();
    }
}

// Function to setup fork button
function setupForkButton() {
    if (unr == "Herox") {
        document.getElementById("fork").innerHTML = `<a class="github-button" href="https://github.com/sjmxaditi" data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;" data-size='large' aria-label="Herox">Herox</a>`;
    } else {
        document.getElementById("fork").innerHTML = `<a class='github-button' href='https://github.com/${unr}' data-color-scheme='no-preference: dark_high_contrast; light: dark_dimmed; dark: dark_dimmed;' data-icon='octicon-repo-forked' data-size='large' data-show-count='true' aria-label='Fork ${unr} on GitHub'>Fork it!</a>`;
    }
}


// Function to redirect to heroku
function redirectToHeroku() {
    let input = document.getElementById("repo-link").value;
    if (!input || input == "") {
        return throwError("Enter Your Forked Repo Link !");
    }

    if (input.includes(unr)) {
        return throwError("You have entered the original repo link which is blacklisted by Heroku, Please enter the forked repo link or Fu*k Off !");
    }

    const regex = /https?:\/\/github\.com\/(?:[^\/\s]+\/)+/g
    if (!regex.test(input)) {
        return throwError("Enter Only GitHub Repo Url!");
    }

    window.open(`https://dashboard.heroku.com/new?template=${input}`, "_blank");
}

// Function to throw errors
function throwError(alTxt = null) {
    if (alTxt) {
        alert(alTxt);
    } else {
        window.location = "oops.html";
    }
}


// Get the url parameters
var unr = new URL(window.location.href).searchParams.get("src");

validateSrc();
setupForkButton();
