@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Fredoka+One&family=Source+Code+Pro&display=swap');

:root {
    --h1-color: #171C25;
    --text-color: #1c212c;
    --url-color: #232936;
}

body {
    background-color: #a2cad4;
}

.details-box {
    padding: 1rem;
    justify-content: center;
    align-items: center;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
    /* width: 25rem; */
    margin: 25px auto 25px;
    background: #eef3f5;
    border-radius: 5px;
}

.oops-avatar {
    width: 250px;
    height: auto;
    position: relative;
    pointer-events: none;
    margin-top: -2.5rem;
    margin-bottom: -2.5rem;
}

h1 {
    font-family: 'Bangers', cursive;
    font-weight: 50;
    font-size: 4rem;
    color: var(--h1-color);
}

li{
    font-size: 1.5rem;
    font-family: 'Fredoka One', cursive;
    text-align: center;
    display: table;
    margin: 1rem 0 auto;
    color: var(--text-color);
}

code {
    font-size: 1.2rem;
    font-family: 'Source Code Pro', monospace;
}

a {
    color: var(--url-color);
}

/* For responsive layout */
@media (min-width: 700px) {
    .details-box {
        width: 30rem;
    }
}
