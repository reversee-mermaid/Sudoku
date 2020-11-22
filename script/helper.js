const Helper = {
    id(id) {
        return document.getElementById(id);
    },
    qs(selector) {
        return document.querySelector(selector);
    },
    qsa(selector) {
        return document.querySelectorAll(selector);
    },
    addClass(element, className) {
        element.classList.add(className);
    },
    removeClass(element, className) {
        element.classList.remove(className);
    },
    toggleClass(element, className) {
        element.classList.toggle(className)
    }
}