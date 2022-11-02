//
//
//

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
     .sendForm (
        'service_j20cfqj',
         'template_x5e96k8',
        event.target,
        'o_9zoysaPT6Exh-a2'
   ).then (() => {
    loading.classList.remove ("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
   }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
        "The email service is currently unavailable."
         );
   })

}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}