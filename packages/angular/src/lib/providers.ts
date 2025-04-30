import { provideAppInitializer } from "@angular/core";
import { defineCustomElements } from "jebamo/loader";

export const provideJebamo = (icons = true) => provideAppInitializer(() => {
  if (icons) {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
    document.head.appendChild(linkElement);
  }
  defineCustomElements();
})
