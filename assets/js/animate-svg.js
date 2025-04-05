function drawSVG() {
    const pathElements = document.querySelectorAll("path");
    const rectangles = document.querySelectorAll("rect");
    
    // Handle rectangles
    rectangles.forEach((rectangle) => {
        // Store the original fill color
        const originalFill = rectangle.getAttribute("fill");
        
        // Start with no fill
        rectangle.setAttribute("fill-opacity", "0");
        
        setTimeout(() => {
            // Add stroke
            rectangle.style.stroke = "white";
            rectangle.style.strokeWidth = "3";
            
            // Animate fill
            rectangle.style.transition = "fill-opacity 0.8s ease-in";
            rectangle.style.fillOpacity = "1";
        }, 1000);
    });
    
    // Handle paths
    pathElements.forEach((path, index) => {
        const pathLength = path.getTotalLength();
        const originalFill = path.getAttribute("fill");
        
        // Create a duplicate path for the fill effect
        const fillPath = path.cloneNode(true);
        fillPath.setAttribute("fill", originalFill);
        fillPath.setAttribute("fill-opacity", "0");
        fillPath.style.stroke = "none";
        path.parentNode.insertBefore(fillPath, path);
        
        // Setup the original path for stroke animation only
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;
        path.style.fill = "none";
        path.style.stroke = "none";
        
        const drawingTime = pathLength * 0.003;
        
        setTimeout(() => {
            // Animate the stroke
            path.style.stroke = "white";
            path.style.strokeWidth = "3";
            path.style.animation = `draw${index} ${drawingTime}s ease-in forwards`;
            
            // Gradually reveal the fill as the stroke progresses
            fillPath.style.animation = `fillReveal${index} ${drawingTime * 1.2}s ease-in forwards`;
            
            // Add the keyframe animations
            const style = document.createElement("style");
            style.innerHTML = `
                @keyframes draw${index} {
                    from {
                        stroke-dashoffset: ${pathLength};
                    }
                    to {
                        stroke-dashoffset: 0;
                    }
                }
                
                @keyframes fillReveal${index} {
                    0% {
                        fill-opacity: 0;
                    }
                    50% {
                        fill-opacity: 0;
                    }
                    100% {
                        fill-opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }, drawingTime * index);
    });
}

drawSVG();