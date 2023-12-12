import assignEventListeners from "./assignEventListeners";
import carouselControl from "./carousel";


assignEventListeners(
    ".menu-icon", 
    ".menu-element",
    ".dropdown-content", 
    "dropdown-content-display", 
    "dropdown-content-hidden" 
    );

carouselControl();