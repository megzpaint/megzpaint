document.addEventListener('DOMContentLoaded', () => {
    const imageBaseNames = ['image1', 'image2', 'image3', 'image4'];
    const container = document.getElementById('image-container');

    imageBaseNames.forEach(baseName => {
        const comparisonContainer = document.createElement('div');
        comparisonContainer.className = 'comparison-container';

        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'image-wrapper';

        ['before', 'after'].forEach(type => {
            const item = document.createElement('div');
            item.className = `image-item ${type}`;

            const img = document.createElement('img');
            img.src = `assets/images/blog/${baseName}-${type}.jpg`;
            img.alt = `${baseName} - ${type}`;
            img.setAttribute('data-modal', '');
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', function () {
                if (window.openImgModal) window.openImgModal(this.src, this.alt);
            });

            const caption = document.createElement('p');
            caption.textContent = type.charAt(0).toUpperCase() + type.slice(1);

            item.appendChild(img);
            item.appendChild(caption);
            imageWrapper.appendChild(item);
        });

        comparisonContainer.appendChild(imageWrapper);
        container.appendChild(comparisonContainer);
    });
});
