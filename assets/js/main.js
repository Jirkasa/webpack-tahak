import makeStickyHeader from "./stickyHeader.js";

const headerContainer = document.getElementById("header-container");
const header = document.getElementById("header");

makeStickyHeader(headerContainer, header, "header--fixed");