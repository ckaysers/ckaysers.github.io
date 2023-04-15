document.getElementById("twitter-share").addEventListener("click", function (event) {
    event.preventDefault();
    const text = "Check out this amazing food blog for allergen-free food worldwide!";
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
});

document.getElementById("email-share").addEventListener("click", function (event) {
    event.preventDefault();
    const subject = "Check out this amazing food blog!";
    const body = `Hi,\n\nI found this amazing food blog and thought you might like it:\n\n${window.location.href}\n\nEnjoy!`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
function shareOnInstagram() {
    const instagramURL = 'instagram://camera';
    window.location.href = instagramURL;
}

const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("expanded");
});

function loadSidebar() {
    const sidebarContainer = document.getElementById("sidebar-container");

    fetch("sidebar.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error loading sidebar");
            }
            return response.text();
        })
        .then((html) => {
            sidebarContainer.innerHTML = html;
            initializeSidebarToggle();
        })
        .catch((error) => {
            console.error("Failed to load sidebar:", error);
        });
}

function initializeSidebarToggle() {
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");

    sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("expanded");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadSidebar();
});

