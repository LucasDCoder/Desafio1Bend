class ProductManager{
   
    constructor(){
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if(title != "" && description != "" && price != null && thumbnail != "" && code != ""){
            let product = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            };

            if (this.products.length === 0) {
                product['id'] = 1;
                this.products.push(product);
            }else{
                let codeValues = this.products.find(product => product['code'] === code);
                if(!codeValues){
                    product['id'] = this.products[this.products.length - 1]['id'] + 1;
                    this.products.push(product);
                }
                else{
                    console.log("Producto repetido");
                }
            
            }
        }
    };   

    getProducts(){
        return this.products;
    };

    getProductById(id){
        let product = this.products.find(product => product['id'] === id);
        if (product != null){
            return product;
        }else{
            console.log("Not found");
            return null;
        }
    };

};


//Prueba
 

let productos = new ProductManager();
console.log(productos.getProducts());
let titulo = "producto de prueba"
let descripcion = "Este es un producto de prueba"
let precio = 200;
let img = "sin imagen"
let code = "a1"
let stock = 10;
productos.addProduct(titulo, descripcion, precio, img, code, stock);
console.log(productos.getProducts());
productos.addProduct(titulo, descripcion, precio, img, code, stock);
let id = 1;
console.log(productos.getProductById(id));
id = 2;
productos.getProductById(id);
