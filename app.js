// const readline = require('readline');
const fs = require('fs');
const http = require('http');
// const events=require('events')
// const url = require('url');
// const replaceHtml = require('./Modules/replaceHtml');
// const user=require('./Modules/user')
// const html = fs.readFileSync('./Files/Template/index.html', 'utf-8');
// let products = JSON.parse(fs.readFileSync('./Files/products.json', 'utf-8'));
// let productListHtml = fs.readFileSync('./Files/Template/product-list.html', 'utf-8');
// let productDetailHtml = fs.readFileSync('./Files/Template/product-details.html', 'utf-8');

// const server = http.createServer((request, response) => {
//     let { query, pathname: path } = url.parse(request.url, true);
    
//     if (path === '/' || path.toLocaleLowerCase() ==='/home') {
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hello, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
//     } else if (path.toLocaleLowerCase() === '/about') {
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hello, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in About page'));
//     } else if (path.toLocaleLowerCase() === '/contact') {
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hello, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'));
//     } else if (path.toLocaleLowerCase() === '/products') {
//         if (!query.id) {
//             let productHtmlArray = products.map((prod) => {
//                 return replaceHtml(productListHtml, prod);
//             })
//             let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
//             response.writeHead(200, {'Content-Type': 'text/html' });
//             response.end(productResponseHtml);
//         } else {
//             let prod = products[query.id]
//             let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
//             response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml));
//         }
//     } else {
//         response.writeHead(404, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hello, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page not found!'));
//     }
// });
// const server=http.createServer();
// server.on('request',(request,response)=>{
//     let { query, pathname: path } = url.parse(request.url, true);
    
//     if (path === '/' || path.toLocaleLowerCase() ==='/home') {
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hello, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
//     } else if (path.toLocaleLowerCase() === '/about') {
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hello, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in About page'));
//     } else if (path.toLocaleLowerCase() === '/contact') {
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hello, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'));
//     } else if (path.toLocaleLowerCase() === '/products') {
//         if (!query.id) {
//             let productHtmlArray = products.map((prod) => {
//                 return replaceHtml(productListHtml, prod);
//             })
//             let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
//             response.writeHead(200, {'Content-Type': 'text/html' });
//             response.end(productResponseHtml);
//         } else {
//             let prod = products[query.id]
//             let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
//             response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml));
//         }
//     } else {
//         response.writeHead(404, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hello, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page not found!'));
//     }
// });  

// server.listen(8000, '127.0.0.1', () => {
//     console.log('Server has started!');
// });
// let myEmitter=new user()
//  new events.EventEmitter

// myEmitter.on('userCreated',(id,name)=>{
//     console.log(`a new user ${name} with ID ${id} is created!`)
// })
// myEmitter.on('userCreated',(id,name)=>{
//     console.log(`a new user ${name} with ID ${id} is added to database!`)
// })
// myEmitter.emit('userCreated',100,'Yura')


//Without writable and readable stream

// server.on('request',(res,req)=>{
// fs.readFile('./Modules/large-file.txt',(err,data)=>{
//     if(err){
//         console.log('This element is error')
//         return;
//     }
// res.end(data)
// })

// })


// server.on('request', (req, res) => {
//   let rs = fs.createReadStream('./Modules/large-file.txt');
//   rs.on('data', (chunk) => {
//     res.write(chunk);
//   });
//   rs.on('end', () => {
//     res.end();
//   });
// });
// server.on('request',(req,res)=>{
//     let rs=fs.createReadStream('./Modules/large-file.txt');
//      rs.on('data',(chunk)=>{
//         res.write(chunk);
//      });
//      rs.on('end',()=>{
//         res.end();
//      })
//      rs.on('error',(error)=>{
//       res.end(error.message)
//    })
// })
// server.on('request',(req,res)=>{
//    let rs=fs.createReadStream('./Modules/large-file.txt');
//  res.pipe (rs)
   //readalbeSource.pipe(writebleDest)
// })
console.log('nodemode has starеd')


fs.readFile('./Files/input.txt',()=>{
   console.log('Files read complete!')
   setTimeout(()=>{
   console.log('Timer callback executed')
},0)
setImmediate(()=>{console.log('setImmediate callback executed')})
process.nextTick(()=>{console.log('processnextTick callback executed')})
})

console.log('nodemode has completed')