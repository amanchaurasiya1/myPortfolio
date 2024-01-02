var typed = new Typed('#element', {
    strings: ['Aman Kumar'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

function changeColor(e){
    let category  = Array.from(document.querySelectorAll('.category h4'));
    for (items in category){
        if(category[items] == e.target){
            category[items].style.color = "#0ef";
        }else{
            category[items].style.color = "white";
        }
    }
}

function changeProjectContainer(e,targetID){
    changeColor(e);
    let parent = document.getElementById('projectContainer');
    for(let i = 0; i < parent.children.length ; i++){
        let child = parent.children[i];
        if(child.id != targetID){
            child.style.display = "none";
        }else{
            child.style.display = "flex";
        }
    }
}

function showDescription(project) {
    var projectDescription = document.querySelector(`#${project} .projectDiscription`);
    var projectImage = document.querySelector(`#${project} img`);

    // Show the project description and hide the image
    projectDescription.style.display = 'block';
    projectImage.style.display = 'none';
}

function hideDescription(project) {
    var projectDescription = document.querySelector(`#${project} .projectDiscription`);
    var projectImage = document.querySelector(`#${project} img`);

    // Hide the project description and show the image
    projectDescription.style.display = 'none';
    projectImage.style.display = 'block';
}

