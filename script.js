const inputField = document.getElementById('inputField');
const submitBtn = document.getElementById('submitBtn');
const errorHandle = document.getElementById('error');

let count = 0;
let count2 = 1;

submitBtn.addEventListener('click', ()=>{
    let inputVal = inputField.value;
    if(inputVal){
        count += 1;
        errorHandle.innerHTML = '';
        inputField.focus();
        const items = document.createElement('div');
        const close = document.createElement('div');
        const itemsHolder = document.createElement('div');

        items.innerHTML = '=> ' + inputVal;
        close.innerHTML = 'x'; 

        items.classList.add('list-item');
        close.classList.add('list-btn');
        count % 2 == 1 ? itemsHolder.classList.add('items-holder', 'odd') : itemsHolder.classList.add('items-holder'); 
       
        itemsHolder.appendChild(items);
        itemsHolder.appendChild(close);

        document.getElementById('toDo').appendChild(itemsHolder);

        inputField.value = '';

        const elmArr = document.querySelectorAll(".list-btn");

        
        elmArr.forEach((elm, ind) => {
            if((ind + 1) == count2){
                count2 += 1;
                elm.addEventListener("click", function (e) {
                    count2 -= 1;
                    let elem = e.target.parentNode;
                    elem.remove();
                });
            }
        });


    }else{
        errorHandle.innerHTML = 'Please type somethings...'
        inputField.focus();
    }
    

})


function myFunc(e){
    console.log(e.target.value);
}



