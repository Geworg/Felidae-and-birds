function drop(){
    let inp = document.getElementById('inp').value;
    if (inp == 'Felidae'){
        document.getElementById('leopard').style.boxShadow= '10px 10px 10px green';
        document.getElementById('lion').style.boxShadow= '10px 10px 10px green';
        document.getElementById('tiger').style.boxShadow= '10px 10px 10px green';
        document.getElementById('puma').style.boxShadow= '10px 10px 10px green';
        document.getElementById('hidden').style.display= 'block';
    }else{
        document.getElementById('leopard').style.boxShadow= '10px 10px 10px red';
        document.getElementById('lion').style.boxShadow= '10px 10px 10px red';
        document.getElementById('tiger').style.boxShadow= '10px 10px 10px red';
        document.getElementById('puma').style.boxShadow= '10px 10px 10px red';
    }
    if(inp == 'birds'){
        document.getElementById('eagle').style.boxShadow= '10px 10px 10px green';
        document.getElementById('raven').style.boxShadow= '10px 10px 10px green';
        document.getElementById('hidden').style.display= 'block';
    }else{
        document.getElementById('eagle').style.boxShadow= '10px 10px 10px red';
        document.getElementById('raven').style.boxShadow= '10px 10px 10px red';
    }
}

function drop1(){
    let inp = document.getElementById('inp').value;
    if(inp == 'birds'){
        document.getElementById('eagle').style.display= 'none';
        document.getElementById('raven').style.display= 'none';
        document.getElementById('eagle1').style.display= 'block';
        document.getElementById('raven1').style.display= 'block';
    }
    if(inp == 'Felidae'){
        document.getElementById('leopard').style.display= 'none';
        document.getElementById('lion').style.display= 'none';
        document.getElementById('tiger').style.display= 'none';
        document.getElementById('puma').style.display= 'none';
        document.getElementById('leopard1').style.display= 'block';
        document.getElementById('lion1').style.display= 'block';
        document.getElementById('tiger1').style.display= 'block';
        document.getElementById('puma1').style.display= 'block';
    }
}