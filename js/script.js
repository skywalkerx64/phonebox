var dropdown_link=document.getElementsByClassName('account');
var dropdown_content=document.getElementsByClassName('account_dropdown');
var dropdown_state='close';
console.log(dropdown_link[0]);

dropdown_link[0].addEventListener('click', e =>
{
    if(dropdown_state=='close')
    {
        dropdown_content[0].style.transform='scale(1)';
        dropdown_state='open';
    }
    else
    {
        dropdown_content[0].style.transform='scale(0)';
        dropdown_state='close';
    }
    
});
