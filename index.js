const contents = document.querySelectorAll(".content");
const buttons = document.querySelectorAll(".title-btn");

buttons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        buttons.forEach((button)=>{
            button.classList.remove('active')
        });
        let info = e.target.innerText.toLowerCase();
        contents.forEach((content)=>{
            content.classList.remove("show");
            if(content.classList.contains(info)){
                content.classList.add("show");
            }
        })
        e.target.classList.add('active');
    })
})