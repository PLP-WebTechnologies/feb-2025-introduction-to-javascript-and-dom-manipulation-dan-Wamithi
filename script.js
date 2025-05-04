// Wait for the DOM to be fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Text content manipulation
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicText = document.getElementById('dynamic-text');
    
    const textOptions = [
        "JavaScript has changed this text!",
        "Dynamic content is cool!",
        "DOM manipulation is powerful!",
        "You can change page content on the fly!",
        "Interactive web pages engage users!",
        "JavaScript is a versatile language!",
        "Web development is fun!",
        "Explore the possibilities with JS!",
        "Dynamic web applications are the future!",

    ];
    
    let textIndex = 0;
    
    changeTextBtn.addEventListener('click', function() {
        textIndex = (textIndex + 1) % textOptions.length;
        dynamicText.textContent = textOptions[textIndex];
        
        // Add a brief animation to highlight the change
        dynamicText.style.color = '#e74c3c';
        setTimeout(function() {
            dynamicText.style.color = '';
        }, 500);
    });
    
    // Style manipulation
    const changeStyleBtn = document.getElementById('change-style-btn');
    const styleBox = document.getElementById('style-box');
    
    const colorOptions = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6' ];
    const shapeOptions = ['0%', '10%', '25%', '50%'];
    
    let colorIndex = 0;
    let shapeIndex = 0;
    
    changeStyleBtn.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colorOptions.length;
        shapeIndex = (shapeIndex + 1) % shapeOptions.length;
        
        styleBox.style.backgroundColor = colorOptions[colorIndex];
        styleBox.style.borderRadius = shapeOptions[shapeIndex];
        
        if (shapeIndex === shapeOptions.length - 1) {
            styleBox.textContent = "I'm a circle now!";
        } else {
            styleBox.textContent = "Shape: " + shapeOptions[shapeIndex];
        }
    });
    
    // Add hover effect
    styleBox.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    styleBox.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Element manipulation
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    const elementsContainer = document.getElementById('elements-container');
    
    let elementCount = 0;
    
    addElementBtn.addEventListener('click', function() {
        elementCount++;
        
        // Create new element
        const newElement = document.createElement('div');
        newElement.className = 'dynamic-element';
        newElement.innerHTML = `
            <p>Element #${elementCount}</p>
            <span>This element was dynamically added!</span>
        `;
        
        // Style the new element
        newElement.style.padding = '10px';
        newElement.style.margin = '10px 0';
        newElement.style.backgroundColor = '#f1f1f1';
        newElement.style.borderLeft = '4px solid #4CAF50';
        
        // Add it to the container
        elementsContainer.appendChild(newElement);
        
        // Update remove button state
        removeElementBtn.disabled = false;
    });
    
    removeElementBtn.addEventListener('click', function() {
        const dynamicElements = document.getElementsByClassName('dynamic-element');
        
        if (dynamicElements.length > 0) {
            // Remove the last added element
            elementsContainer.removeChild(dynamicElements[dynamicElements.length - 1]);
            elementCount--;
            
            // Disable remove button if no elements left
            if (dynamicElements.length === 0) {
                removeElementBtn.disabled = true;
            }
        }
    });
    
    // Theme toggling
    const toggleThemeBtn = document.getElementById('toggle-theme-btn');
    let darkMode = false;
    
    toggleThemeBtn.addEventListener('click', function() {
        darkMode = !darkMode;
        
        if (darkMode) {
            document.body.style.backgroundColor = '#222';
            document.body.style.color = '#fff';
            toggleThemeBtn.textContent = 'Switch to Light Mode';
        } else {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            toggleThemeBtn.textContent = 'Switch to Dark Mode';
        }
    });
});
