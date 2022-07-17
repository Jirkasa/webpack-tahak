export default function(headerContainerElement, headerElement, stickyCSSClass) {
    if (!headerContainerElement) throw new Error('no header container element was passed');
    if (!headerElement) throw new Error('no header element was passed');
    if (!stickyCSSClass) throw new Error('no sticky CSS class for header was passed');

    const obsCallback = function([entry]) {
        if (!entry.isIntersecting) {
            headerElement.classList.add(stickyCSSClass);
        } else {
            headerElement.classList.remove(stickyCSSClass);
        }
    }

    const obsOptions = {
        root: null, // intersection will be with viewport
        threshold: 0.99
    };

    const observer = new IntersectionObserver(obsCallback, obsOptions);
    observer.observe(headerContainerElement);
}