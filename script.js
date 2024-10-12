document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', (e) => {
        // Prevent the event from bubbling up to the document click
        e.stopPropagation();

        // Close other boxes' options
        document.querySelectorAll('.box').forEach(otherBox => {
            if (otherBox !== box) {
                const otherOptions = otherBox.querySelector('.options');
                otherOptions.style.display = 'none'; // Hide other box options
                otherBox.classList.remove('expanded'); // Collapse other boxes
                otherBox.style.height = '100px'; // Reset height of other boxes
            }
        });

        const options = box.querySelector('.options');
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
        box.classList.toggle('expanded');

        // Expand box dynamically
        if (box.classList.contains('expanded')) {
            box.style.height = '300px'; // Expanded height
        } else {
            box.style.height = '100px'; // Collapsed height
        }
    });
});

// Close options when clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(box => {
        const options = box.querySelector('.options');
        options.style.display = 'none'; // Hide options
        box.classList.remove('expanded'); // Collapse the box
        box.style.height = '100px'; // Reset height
    });
});

document.querySelectorAll('.color').forEach(colorBtn => {
    colorBtn.addEventListener('click', (e) => {
        const box = e.target.closest('.box');
        box.style.backgroundColor = e.target.style.backgroundColor;
    });
});

document.querySelectorAll('.size').forEach(sizeBtn => {
    sizeBtn.addEventListener('click', (e) => {
        const size = e.target.dataset.size;
        const box = e.target.closest('.box');

        // Change the box height based on the selected size
        if (size === 'small') {
            box.style.height = '100px';
        } else if (size === 'medium') {
            box.style.height = '200px';
        } else if (size === 'large') {
            box.style.height = '300px';
        }

        // Prevent the click event from bubbling up to the box click event
        e.stopPropagation();
    });
});
