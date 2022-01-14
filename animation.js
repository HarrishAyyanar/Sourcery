gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false
  });
});

function restrictWidth(){
  if (window.innerWidth < 1000) {
 alert("The website is not compatible for devices other than laptop or for browser sizes below 1000px. Please view this website on laptop or at a browser size of more than 1000px")
} else {
} 
}