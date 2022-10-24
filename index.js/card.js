const $ = document.querySelector.bind(document);
const $$  = document.querySelectorAll.bind(document);

export class setBuying{
    buyingTours(){
        const buyingButtons = $$('.buying-button');
        const buyingForm = $('.buying-tickets') ;
        const closeButton = $('#close-button');
        const closeHeader = $('#close');
        console.log(closeHeader);
        buyingButtons.forEach((button)=>{
            button.onclick = (e) =>{
                buyingForm.style.animation="moving 0.5s ease-out forwards";
                closeButton.onclick = (e) =>{
                    e.preventDefault();
                    buyingForm.style.animation = "revereMoving 0.5s ease-out forwards";
                };
                closeHeader.onclick = (e) =>{
                    e.preventDefault();
                    buyingForm.style.animation = "revereMoving 0.5s ease-out forwards";
                }
            }
        });
    }
}