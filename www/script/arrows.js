document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        document.querySelector('a.next')?.click();
    }
    if (e.key === 'ArrowLeft') {
        document.querySelector('a.prev')?.click();
    }
});
