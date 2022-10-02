window.onload = () => {   
    
    const postButton = document.getElementsByClassName("postButton");
    const spanLike = document.getElementById("spanLike")

    const buttonSpinning = [
        { transform: 'rotate(0) scale(1)' },
        { transform: 'rotate(360deg) scale(0)' }
    ];

    const buttonTiming = {
        duration: 800,
        iterations: 1,
    }

    const scaleTransform = [
        { transform: 'scale(1.2)' },
    ];

    const scaleTiming = {
        duration: 400,
        iterations: 1,
    }

    
    postButton.addEventListener('click', () => {
    console.log("ca marche");
    postButton.animate(buttonSpinning, buttonTiming);
    spanLike.animate(scaleTransform, scaleTiming)
    });
  
    
 }
