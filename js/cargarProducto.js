let code = "";

document.addEventListener("keydown", async (event) => {
    if (/^\d$/.test(event.key)) {
        code += event.key;
    }
    else if (event.key === "Enter") {
        if(array_prods.find(row => row[0] === code)){
            let img = array_prods[code-1][3];
            $('#image').attr('src',`img/${img}`);
            const detailsProduct = `
                <div class="elements">
                    <h2 class="product-name">Producto: </h2>
                    <h2 class="product-name">Precio: </h2>
                </div>
                <div class="elements">
                    <h2 class="product-name">${array_prods[code-1][1]}</h2>
                    <h2 class="product-name">${array_prods[code-1][2]}</h2>
                </div>
            `;
            $('.details').html(detailsProduct);
            code = "";
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Inexistente',
                text: `No existe un producto con el codigo: ${code}`,
                timer: 2000,
                showConfirmButton: false
            });
            code = "";
        }
        
    }
});