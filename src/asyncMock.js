// export const productos =[
    
//     {
//         "imagen": "https://http2.mlstatic.com/D_Q_NP_606749-MLA46365746591_062021-O.webp",
//         "marca": "Fender",
//         "modelo": "Telecaster",
//         "color": "Cream",
//         "precio": 470000,
//         "stock": 10,
//         "initial": 1,
//         "tipo": "Electrica",
//         "Cuerdas": 6,
//         "Origen": "Americana",
//     },
//     {
//         "imagen": "https://www.tubesoundbcn.com/img/p/3/4/3/5/8/34358.jpg",
//         "marca": "Gibson",
//         "modelo": "Les Paul",
//         "color": "Sunburst",
//         "precio": 1500000,
//         "stock": 8,
//         "initial": 1,
//         "tipo": "Electrica",
//         "Cuerdas": 6,
//         "Origen": "Americana",
//     },
//     {
//         "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiCqNX4-CBjqOga-Zy7tVw5uzkTpZrvf1lw&usqp=CAU",
//         "marca": "Gibson",
//         "modelo": "SG",
//         "color": "Cherry",
//         "precio": 800000,
//         "stock": 4,
//         "initial": 1,
//         "tipo": "Electrica",
//         "Cuerdas": 6,
//         "Origen": "Americana",
//     },
//     {
//         "imagen": "https://therockstore.com.ar/wp-content/uploads/2021/10/1620875093287.jpg",
//         "marca": "Gibson",
//         "modelo": "335",
//         "color": "Rojo",
//         "precio": 1200000,
//         "stock": 6,
//         "initial": 1,
//         "tipo": "Electrica",
//         "Cuerdas": 6,
//         "Origen": "Americana",
//     },
//     {
//         "imagen": "https://s.ek.ua/jpg_zoom1/1551165.jpg",
//         "marca": "Washburn",
//         "modelo": "Wr-154",
//         "color": "Negro",
//         "precio": 90000,
//         "stock": 12,
//         "initial": 1,
//         "tipo": "Electrica",
//         "Cuerdas": 6,
//         "Origen": "Americana",
//     },
//     {
//         "imagen": "https://bairesrocks.vteximg.com.br/arquivos/ids/201863-900-900/783657-MLA40544635648_012020-F.jpg?v=637313060668470000",
//         "marca": "Texas",
//         "modelo": "Stratocaster",
//         "color": "Sunburst",
//         "precio": 25000,
//         "stock": 20,
//         "initial": 1,
//         "tipo": "Electrica",
//         "Cuerdas": 6,
//         "Origen": "Americana",
//     },
//     {
//         "imagen": "https://bairesrocks.vteximg.com.br/arquivos/ids/201930-900-900/833259-MLA31112937284_062019-F.jpg?v=637313060855770000",
//         "marca": "Krammer",
//         "modelo": "Grobvater",
//         "color": "Psycho",
//         "precio": 150000,
//         "stock": 15,
//         "initial": 1,
//         "tipo": "Electrica",
//         "Cuerdas": 6,
//         "Origen": "Americana",
//     },
//     {
//         "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiCqNX4-CBjqOga-Zy7tVw5uzkTpZrvf1lw&usqp=CAU",
//         "marca": "Epiphone",
//         "modelo": "SG",
//         "color": "Cherry",
//         "precio": 110000,
//         "stock": 13,
//         "initial": 1,
//         "tipo": "Electrica",
//         "Cuerdas": 6,
//         "Origen": "Americana",
//     },
//     {
//         "imagen": "https://www.melodyhousemi.com/assets/library/Ibanez/V50NJP-VS-2.jpg",
//         "marca": "Ibanez",
//         "modelo": "V",
//         "color": "Wood",
//         "precio": 180000,
//         "stock": 8,
//         "initial": 1,
//         "tipo": "Electrica",
//         "Cuerdas": 6,
//         "Origen": "Americana",
//     },
//     {
//         "imagen": "https://as1.ftcdn.net/v2/jpg/02/83/60/00/1000_F_283600005_QkbtTFmdYCWiz18PNtKMdSPa8si1qbN7.jpg",
//         "marca": "Fender",
//         "modelo": "Jaguar",
//         "color": "Sunburst",
//         "precio": 180000,
//         "stock": 7,
//         "initial": 1,
//         "tipo": "Electrica",
//         "Cuerdas": 6,
//         "Origen": "Americana",
//     },
//     {
//         "imagen": "https://images.musicstore.de/images/1280/gibson-flying-v-antique-natural_1_GIT0049469-000.jpg",
//         "marca": "Gibson",
//         "modelo": "Flying V",
//         "color": "Wood",
//         "precio": 230000,
//         "stock": 4,
//         "initial": 1,
//         "tipo": "Electrica",
//         "Cuerdas": 6,
//         "Origen": "Americana",
//     }
// ]

// export const getProducts =()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(productos)
//         })
//     },500)
// }

// export const productoDetalleId = (productoId) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(productos.find(productos => productos.id === parseInt(productoId)));
//       }, 500);
//     });
//   };



//   export const getProductsByCategory = (category) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const filteredProducts = productos.filter(
//           (producto) => producto.marca === category
//         );
//         resolve(filteredProducts);
//       }, 500);
//     });
//   };



