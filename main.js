let btn = document.querySelector('.btn');
let loderBox = document.querySelector('.loder_box');
let inputBox = document.querySelector('.input_box');
let backBtn = document.querySelector('.back_btn a');
let resultBox = document.querySelector('.result_box');
// let err = document.querySelector('.err1');
let err = document.querySelector('.err_box');
let fname = document.querySelector('.fname');
let sname = document.querySelector('.sname');
let firstName = document.querySelector('.firstname');
let secondName = document.querySelector('.secname');
let number = document.querySelector('.number');
let text = document.querySelector('.text h3');
let percFill = document.querySelector('.perc_fill');

const feelings = [
    {
        img: './img/img1.png'
    },
    {
        img: './img/img2.png'
    },
    {
        img: './img/img3.png'
    },
    {
        img: './img/img4.png'
    }
];


btn.addEventListener('click', () => { 
    if(fname.value === null || fname.value == '' || sname.value == null || sname.value == ''){
    // console.log("hello")
    err.style.display = 'block';
    }
    else{
        loderBox.classList.add('active');
        setTimeout(removeLoader, 4000);
    }
});

const removeLoader = () => {
    inputBox.style.display = 'none';
    resultBox.style.display = 'block';  
    loderBox.classList.remove('active');
    err.style.display = 'none';

    // console.log(fname.value, sname.value);
    fetchData();
}

backBtn.addEventListener('click', () => {
    inputBox.style.display = 'block'; 
    resultBox.style.display = 'none';  
    fname.value = '';
    sname.value = '';
    firstName.innerHTML = "------";
    secondName.innerHTML = "-----";
    number.innerHTML = 0;
    text.innerHTML = "------------";
    percFill.style.width = 0 + "%";

});

const fetchData = async () => {
    await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname.value}&fname=${fname.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "677684cc11mshd0f6d4094e6cbd9p1b8567jsn142711276f3a"
	}
})
.then(response => response.json())
.then((data) => {
    let name1 = data.fname;
    let name2 =data.sname;
    let percentage = data.percentage;
    let result = data.result;

    firstName.innerHTML = name1;
    secondName.innerHTML = name2;
    number.innerHTML = percentage;
    text.innerHTML = result;
    percFill.style.width = percentage + "%";

    console.log(data);
});
}

