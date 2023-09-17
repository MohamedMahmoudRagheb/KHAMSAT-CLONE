

function openside(){
    const sidebar=document.querySelector('aside');
    const SecOne=document.querySelector('#main');
    const Body=document.querySelector('body');

    if(sidebar.style.display === "none"){
        sidebar.style.display ='block';
        SecOne.style.marginRight='17%';
    }else{
        sidebar.style.display ='none';
        SecOne.style.marginRight='0%'
    }
}