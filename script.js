document.addEventListener('DOMContentLoaded', function () {
    console.log('Zee5 Clone is ready!');

    const bannerWrapper = document.querySelector('.banner-wrapper');

    // Stop animation on mouse enter and resume on mouse leave
    bannerWrapper.addEventListener('mouseenter', () => {
        bannerWrapper.style.animationPlayState = 'paused';
    });

    bannerWrapper.addEventListener('mouseleave', () => {
        bannerWrapper.style.animationPlayState = 'running';
    });
});
function openhtml()
{
    window.open("mypage.html")
    document.getElementById(html).style.display="block";
}