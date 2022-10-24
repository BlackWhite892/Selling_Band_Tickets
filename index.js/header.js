const $ = document.querySelector.bind(document);
const $$  = document.querySelectorAll.bind(document);

export class setSlider{
    changeImage(){
        const sliderItems = $$(".slider-item");
        let i=1;
        const length = sliderItems.length;
        function setImage(){
            if(i>0 && i<=length-1){
                sliderItems[i-1].classList.remove("selected");
                sliderItems[i].classList.add("selected");
                i++;
            }
            else{
                sliderItems[i-1].classList.remove("selected");
                i=0;
                sliderItems[i].classList.add("selected");
                i++;
            }
        } 
        setInterval(() => {
            setImage();
        }, 3000);
    }
}

