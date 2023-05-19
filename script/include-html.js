// Extend the HTMLElement class to create the web component <include-html>
class IncludeHTML extends HTMLElement {
    /**
    * Get and render external HTML
    * @param  {String} path The path to the external HTML
    */
    async #getHTML(path) {
        // Get the page
        let request = await fetch(path);
        if (!request.ok) return;

        // Get the HTML
        this.innerHTML = await request.text();
    }

    constructor() {
        // Always call super first in constructor
        super();

        // Get the source HTML to load
        let path = this.getAttribute('path');
        console.log(path);
        if (!path) return;
        console.log(`Content of ${path} is loading...`);

        // Render HTML
        this.#getHTML(path);
        console.log(`Content of ${path} is ${this.innerHTML}`);
    }
}

// Define the new web component
if ('customElements' in window) {
    customElements.define('include-html', IncludeHTML);
}