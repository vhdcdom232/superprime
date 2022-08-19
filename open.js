const form= document.getElementById('form');
const name= document.getElementById('name');
const email= document.getElementById('email');
const address= document.getElementById('Address');
const city= document.getElementById('Address');
const feedback= document.getElementById('Form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
    const namevalue= Name.value.trim();
    const emailvalue= email.value.trim();
   const phonevalue= phone.value.trim();
   const feedbackvalue=feedback.value.trim();
    if(namevalue=="") {
        setErrorfor(Name,"username can't be blank");
    } else {
        setSuccessfor(Name);
    }

}
function setErrorfor(input,message) {
    const formControl= input.parentElement;
    const small= forControl.querySelector('small');
    small.innertext= message;
    formControl.ClassName="form-control error";
}
function setSuccessfor(input) {
    const formControl = input.parentElement;
    formControl.className="form-control Sucess";
}