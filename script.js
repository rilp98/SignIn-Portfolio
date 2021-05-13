const container=document.querySelector('.login_label');
const input=document.querySelector('#password');
const iconEye=document.querySelector('.iconEye');
const iconEyeSlash=document.querySelector('.eyeSlash');


iconEye.addEventListener('click',function(){

    /*The .visible class is being placed in the container*/
    container.classList.toggle('.visible');

    /*It is checked if the class .visible exists*/
    if(container.classList.contains('.visible')){

        /*If the class .visible exists, the text is displayed*/
        input.type='text';
        iconEye.src='./assets/icons/eye.svg';
    }else{
        input.type='password';
        iconEye.src='./assets/icons/eye-off.svg';
    }

});


