export default function activeNavButtonChange(tab) {
    const bottomNav = document.getElementById("bottom-nav");

    if(bottomNav) {
        const menulinks = bottomNav.querySelectorAll(".menu-link");
        
        for(let i = 0; i < menulinks.length; i++) {
          menulinks[i].classList.remove("active");
        }
    
        if(tab) {
            const activeNavButton = document.getElementById(tab);
            if(activeNavButton) activeNavButton.classList.add("active");
        }
    }
} 