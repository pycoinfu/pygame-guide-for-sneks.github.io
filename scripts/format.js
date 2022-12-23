let new_tabs = document.getElementsByClassName("new-tab");
let linked_buttons = document.getElementsByClassName("button-link");
let table_of_contents = document.getElementById('toc');
let linenos = document.getElementsByClassName('lineno');

// Table of contents
function toc() {
    let headers = document.getElementsByClassName('js');
    let html = '';

    for (let h of headers) {
        title = h.parentNode.textContent;
        cls = h.getAttribute("id");
        html += '<li><a href="#' + cls + '">' + title + '</a></li>';
    }

    table_of_contents.innerHTML = html;
}

if (table_of_contents) {toc(); }

// Links that open new tabs
for (let link of new_tabs) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
}


// Buttons that open links
for (let linked_button of linked_buttons) {
    switch (linked_button.dataset.type) {
        case "prev":
            linked_button.innerHTML = "Previous page:<br>" + linked_button.innerHTML;
            break;
        case "next":
            linked_button.innerHTML = "Next page:<br>" + linked_button.innerHTML;
            break;
    }

    linked_button.onclick = () => {
        location.href = linked_button.dataset.url;
    }
}

// code blocks with line numbers
// This edits CSS so if your CSS isn't working this is probably overriding
for (let elem of linenos) {
    elem.style = "width: 16px;";
    let p = elem.parentElement;
    p.style = "width: 16px;";
}