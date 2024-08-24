document.addEventListener('DOMContentLoaded', () => {
    const imageBaseNames = ['image1', 'image2']; // Base names of your images

    const container = document.getElementById('image-container');

    imageBaseNames.forEach(baseName => {
        // Create the comparison container for each image set
        const comparisonContainer = document.createElement('div');
        comparisonContainer.className = 'comparison-container';

        // Create image wrapper
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'image-wrapper';

        // Create before image
        const beforeItem = document.createElement('div');
        beforeItem.className = 'image-item before';
        const beforeImage = document.createElement('img');
        beforeImage.src = `assets/images/blog/${baseName}-before.jpg`;
        beforeImage.alt = 'Before';
        const beforeCaption = document.createElement('p');
        beforeCaption.textContent = 'Before';
        beforeItem.appendChild(beforeImage);
        beforeItem.appendChild(beforeCaption);

        // Create after image
        const afterItem = document.createElement('div');
        afterItem.className = 'image-item after';
        const afterImage = document.createElement('img');
        afterImage.src = `assets/images/blog/${baseName}-after.jpg`;
        afterImage.alt = 'After';
        const afterCaption = document.createElement('p');
        afterCaption.textContent = 'After';
        afterItem.appendChild(afterImage);
        afterItem.appendChild(afterCaption);

        // Append items to the wrapper
        imageWrapper.appendChild(beforeItem);
        imageWrapper.appendChild(afterItem);

        // Append wrapper to the comparison container
        comparisonContainer.appendChild(imageWrapper);

        // Append comparison container to the main container
        container.appendChild(comparisonContainer);
    });
});
