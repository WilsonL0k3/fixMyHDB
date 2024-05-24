

document.addEventListener('DOMContentLoaded', () => {
    const toggleImages = document.querySelectorAll('.logo');
    let currentVisibleContent = null;

    const showContent = (contentId) => {
        const content = document.getElementById(contentId);
        if (content) {
            content.classList.remove('hidden');
        }
    };

    const hideCurrentContent = () => {
        if (currentVisibleContent) {
            currentVisibleContent.classList.add('hidden');
        }
    };


    toggleImages.forEach(image => {
        image.addEventListener('click', (event) => {
            event.stopPropagation(); 
            const targetContentId = image.getAttribute('data-target');
            hideCurrentContent();
            showContent(targetContentId);
            currentVisibleContent = document.getElementById(targetContentId);
        });
    });


    document.addEventListener('click', () => {
        hideCurrentContent();
        currentVisibleContent = null;
    });

    document.querySelectorAll('.hidden-content').forEach(content => {
        content.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('contactUs');

button.addEventListener('click', () => {
    window.location.href = "./contactus.html";
});

});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('reviews');

button.addEventListener('click', () => {
    window.location.href = "./reviews.html";
});

});