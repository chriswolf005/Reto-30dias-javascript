const products=[{ name: "Smartphone", category: "Electronics", price: 800 },
{ name: "Laptop", category: "Electronics", price: 1200 },
{ name: "Shirt", category: "Clothing", price: 50 },
{ name: "Pants", category: "Clothing", price: 100 },]


const products2=[
    {name:"Smartphone",category:"Electronics",price:800},
{name:"Laptop",category:"Electronics",price:1200},
{name:"Shirt",category:"Clothing",price:50},
{name:"Pants",category:"Clothing",price:100},
{name:"Chicken",category:"Food",price:80},
{name:"Beef",category:"Food",price:50},
{name:"PS5",category:"Gaming",price:600},
{name:"Xbox One",category:"Gaming",price:450}
]


function groupProducts(products, category) {
    // Tu código aquí
    let buscar=products.filter(item=>item.category===category)

    let name=  buscar.map(element=>element.name).join(', ')
    let total = buscar.reduce((acc, buscar) => (
        acc + buscar.price
    ), 0)

    return{
        name:name,
        totalPrice:total
    }

}

groupProducts(products,"Electronics")
