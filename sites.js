function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
var shops = [shp1, shp2, shp3, shp4, shp5, shp6, shp7, shp8, shp9, shp10];

var shp1 = {
  shop:"Depop, a great resale app($-$$$)",
  image:"https://amp.businessinsider.com/images/5d0225aa6fc92021cc52bf14-750-563.jpg",
}
var shp2 = {
  shop:"Everlane, classic pieces ($$)",
  image:"https://cdn.vox-cdn.com/thumbor/iPZ_ajND2WXFOe4IjBqkGAnlNCM=/0x0:960x789/1200x800/filters:focal(396x207:548x359)/cdn.vox-cdn.com/uploads/chorus_image/image/55753283/16711540_1290662940971392_907412679285259111_n__1_.0.jpg",
}
var shp3 = {
  shop:"Reformation, best known for their dresses ($$-$$$)",
  image:"https://res.cloudinary.com/reformation/image/upload/q_auto/c_scale,w_auto:breakpoints_100_2560_9_20:425/v1/prod/product_images/wellfleet-dress/toscana/5c79b9b49dd3aa105e9a6aaa/original.jpg",
}
var shp4 = {
  shop:"Stella McCartney, sustainable designer pieces ($$$)",
  image:"https://www.stellamccartney.com/34/34951276rb_12_h.jpg",
}
var shp5 = {
  shop:"Wholesome Culture, cute graphic tees ($$)",
  image:"https://cdn.shopify.com/s/files/1/1540/8879/products/cropped-hoodie-eat-more-plants-do-more-yoga-athletic-crop-hoodie-2_feede3cf-e8c5-4e72-b0be-c195e85dc0fe_2000x2000_crop_center.jpg?v=1533756790",
}
var shp6 = {
  shop:"Kotn, beautiful basics ($$)",
  image:"https://cdn.shopify.com/s/files/1/0072/5024/7739/products/Jun112019_KotnEcomm_14106_900x.progressive.jpg?v=1560871125",
}
var shp7 = {
  shop:"Paloma Wool, vibrant, original pieces ($$$)",
  image:"https://cdn.shopify.com/s/files/1/0531/9781/products/PalomawoolLOOKBOOK__PW_AW18.compressed_dragged_4_a6f431e0-ff11-4da8-ab1e-c44ac7a95ca6_2048x.jpg?v=1537830270",
}
var shp8 = {
  shop:"Re/Done, classic, recycled jeans ($$-$$$)",
  image:"https://assets.vogue.com/photos/5967912856dd6f47bc24e8f5/master/pass/18-re-done-resort18.jpg",
}
var shp9 = {
  shop:"Patagonia, outdoor wear and gear ($$-$$$)",
  image:"https://res.cloudinary.com/reformation/image/upload/q_auto:eco/c_scale,w_auto:breakpoints_100_2560_9_20:1198/v1/prod/product_images/patagonia-micro-puff-jacket/black/5c105db39dd3aa33ae7ec359/original.jpg",
}
var shp10 = {
  shop:"Girlfriend Collective, most comfortable leggings on earth ($$)",
  image:"https://static1.squarespace.com/static/5a004e51f9a61ec49a0330fa/t/5bc0a48a41920285260a0014/1539351716316/Girlfriend+collective?format=1000w",
}

console.log(shops[0]);
var button = document.getElementById("button")
button.addEventListener("click", function(){
var randomNum = Math.random()
  var randomNumBig = randomNum * shops.length
  var randomRound = Math.floor(randomNumBig);
  document.getElementById("shopcont").innerHTML = shops[randomRound].shop;
  document.getElementById("shoppic").src=shops[randomRound].image;
})
