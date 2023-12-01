for (let i = 0; i < 100; i++) {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.width = `${Math.random() * 5}px`;
    dot.style.height = dot.style.width;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.animationName = 'float';
    dot.style.animationDuration = `${Math.random() * 3 + 2}s`;
    dot.style.animationDirection = 'alternate';
    dot.style.animationTimingFunction = 'ease-in-out';
    dot.style.animationIterationCount = 'infinite';
    dot.style.animationDelay = `${Math.random() * 2}s`;
    dot.style.animationPlayState = 'running';
    let keyframes = `@keyframes float {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(${Math.random() * 500 - 250}px, ${Math.random() * 500 - 250}px); }
    }`;
    let styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
    document.body.appendChild(dot);
}
