window.addEventListener("DOMContentLoaded", function(event){
    let roditelSlider = document.querySelector(".carousel"),
        slides = document.getElementsByClassName("slide"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dots = document.querySelectorAll(".dot"),
        podSlide = document.querySelector(".podSlide"),
        podslide = document.querySelectorAll(".podslide");
        indexCurrent = 0;
    //скрытие слайдов
    function closeSlide(){
        [...slides].forEach((item, i) => {
            item.classList.add("nonActive");
            item.classList.remove("active");
            podslide[i].classList.remove("currentSlide");
        })
    }
    closeSlide();
    //открыть текущий слайд
    function openCurrentSlide(){
        if(indexCurrent < 0){
            indexCurrent = slides.length-1;
            podslide[indexCurrent].classList.add("currentSlide");
        }        
        if(indexCurrent > slides.length-1){
            indexCurrent = 0;
            podslide[indexCurrent].classList.add("currentSlide");
        }
        [...slides].forEach((item, n) => {
               if(n == indexCurrent){
                    item.classList.add("active");
                    item.classList.remove("nonActive");
                    podslide[indexCurrent].classList.add("currentSlide");
               };
        })
    }
    openCurrentSlide(0)
    function drivePlus(){
        closeSlide(indexCurrent);
        indexCurrent += 1;
        openCurrentSlide(indexCurrent);
    }
    function driveMinus(){
        closeSlide(indexCurrent);
        indexCurrent -= 1;
        openCurrentSlide(indexCurrent);
    }
    //обработчик события для клика на .next and .prev
    prev.addEventListener('click', function(event){
        driveMinus();
    })
    next.addEventListener('click', function(event){
        drivePlus()
    })
    setInterval(drivePlus, 3000);
    //эффект наведения на нижние слайды

})