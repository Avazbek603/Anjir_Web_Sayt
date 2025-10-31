// Mobil menyu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Mahsulotlar
const products = [
  {
    name: "Coca-Cola 1L",
    price: "12,000 so'm",
    image: "https://static.sello.uz/unsafe/x1600/https://static.sello.uz//fm/20220524/72dd1ab0-f362-4adb-bbc2-bc043b9f2094.jpg",
    category: "Ichimliklar"
  },
  {
    name: "Pepsi 1L",
    price: "11,500 so'm",
    image: "https://files.glotr.uz/company/000/012/826/products/2025/02/02/2025-02-02-15-36-06-983532-188f7ac5989b288328f3195345bd4e2e.webp?_=ozb9y",
    category: "Ichimliklar"
  },
  {
    name: "Fanta 1L",
    price: "11,000 so'm",
    image: "https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_limit,dpr_3.0,f_auto,q_auto:low,w_400/d_ecommerce:backend-fallback.png/MAT_1360544_PCE_EE",
    category: "Ichimliklar"
  },
  {
    name: "Sprite 1L",
    price: "11,000 so'm",
    image: "https://i5.walmartimages.com/asr/e67856af-8ff3-4d3e-94da-5d2ab4181909.08106f9c7782fea23696a7a91b7f2183.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    category: "Ichimliklar"
  },
  {
    name: "Lipton Ice Tea",
    price: "13,000 so'm",
    image: "https://images.uzum.uz/d2eqm4niub3brtuamnc0/t_product_low.jpg",
    category: "Ichimliklar"
  },
  {
    name: "Bonaqua suv 1L",
    price: "6,000 so'm",
    image: "https://www.coca-cola.com/content/dam/onexp/uz/uz/brands/bonaqua/bon%20aqua%200,5l%20carbonated_750x750.jpg",
    category: "Ichimliklar"
  },
  {
    name: "Red Bull 250ml",
    price: "18,000 so'm",
    image: "https://olcha.uz/image/700x700/products/2023-01-16/energeticheskiy-napitok-red-bull-250-ml-190554-0.jpg",
    category: "Ichimliklar"
  },
  {
    name: "Burn Energy Drink",
    price: "17,500 so'm",
    image: "https://img.esanitex.net/image/ffc90a50-2bce-4b29-bf42-818b76745e32.jpg",
    category: "Ichimliklar"
  },
  {
    name: "Adrenaline Rush 250ml",
    price: "17,000 so'm",
    image: "https://images.uzum.uz/cq76dghbjcvc78ism6gg/original.jpg",
    category: "Ichimliklar"
  },
  {
    name: "Nestle Pure Life 1L",
    price: "7,000 so'm",
    image: "https://shop.tegen.uz/wp-content/uploads/2021/05/imgonline-com-ua-Resize-a1Qdrw1NxWN9Cp.jpg",
    category: "Ichimliklar"
  },
  {
    name: "Nescafe Classic 100g",
    price: "24,000 so'm",
    image: "https://www.prom.uz/_ipx/f_webp/https://devel.prom.uz/upload/reduced/product_logos/f7/7e/f77e8753b613a301ff1eedc618a128ac.jpeg",
    category: "Qahva"
  },
  {
    name: "Jacobs Monarch 95g",
    price: "26,000 so'm",
    image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC84MDYyM1wvODA2MjMtamFjb2JzLTk1Zy1qeGN6b20uanBlZyIsImVkaXRzIjpbXX0=",
    category: "Qahva"
  },
  {
    name: "Greenfield Earl Grey Tea",
    price: "19,000 so'm",
    image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/1476/00081476/norm/00081476.n_3.png?s=1000x1000",
    category: "Choy"
  },
  {
    name: "Ahmad Tea 100g",
    price: "17,000 so'm",
    image: "https://images.uzum.uz/cf0i5lqvtie1lhbgoe10/original.jpg",
    category: "Choy"
  },
  {
    name: "Lipton Yellow Label 100g",
    price: "15,500 so'm",
    image: "https://baqala.qa/wp-content/uploads/2022/04/Lipton-Yellow-Label-Tea-Bag-Fresh-100-X-2gm-.jpg",
    category: "Choy"
  },
  {
    name: "Tess Pleasure Tea 100g",
    price: "16,000 so'm",
    image: "https://shop.garant21.ru/image/cache/catalog/wares/037155_b1110a42-1760-41ce-9127-0853f769fef8-1200x800.jpeg",
    category: "Choy"
  },


  {
    name: "KitKat shokolad 45g",
    price: "9,000 so'm",
    image: "https://babymarket.uz/wp-content/uploads/2020/05/24212.png",
    category: "Shirinliklar"
  },
  {
    name: "Snickers 50g",
    price: "8,500 so'm",
    image: "https://dostavo4ka.uz/upload-file/2021/05/05/4408/497fdcd5-cfee-4bad-ac3e-635473660ec5.jpg",
    category: "Shirinliklar"
  },
  {
    name: "Twix 50g",
    price: "8,000 so'm",
    image: "https://files.ox-sys.com/cache/original/image/cb/73/44/cb734478ec025dac2dddf2bd2b52ef21a544aeba390aadf6d355978915a90d12.jpg",
    category: "Shirinliklar"
  },
  {
    name: "Mars 50g",
    price: "8,000 so'm",
    image: "https://dostavo4ka.uz/upload-file/2021/05/05/4765/4f5cb547-37ff-4191-ba50-9b0917072930.jpg",
    category: "Shirinliklar"
  },
  {
    name: "Oreo 95g",
    price: "10,000 so'm",
    image: "https://ir.ozone.ru/s3/multimedia-x/c400/6400567785.jpg",
    category: "Shirinliklar"
  },
  {
    name: "Lay’s Classic 150g",
    price: "14,000 so'm",
    image: "https://turkishplaza.com/cdn/shop/products/05082032-2ace6c-1650x1650.jpg?v=1597662771",
    category: "Gazaklar"
  },
  {
    name: "Pringles Original 165g",
    price: "22,000 so'm",
    image: "https://i0.wp.com/delicatessen.uz/wp-content/uploads/2023/08/chipsy-pringles-original-originalnye-165-g.jpg?fit=1000%2C1000&ssl=1",
    category: "Gazaklar"
  },
  {
    name: "Cheetos Cheese 120g",
    price: "13,500 so'm",
    image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/98/MTA-182190840/cheetos_cheetos-cheese-120g_full01-562d98aa.jpg",
    category: "Gazaklar"
  },
  {
    name: "Doritos Nacho Cheese 150g",
    price: "15,000 so'm",
    image: "https://i0.wp.com/onlinekade.lk/wp-content/uploads/2021/09/89686727050-1.jpg",
    category: "Gazaklar"
  },
  {
    name: "KitKat Mini 10 dona",
    price: "25,000 so'm",
    image: "https://s7d1.scene7.com/is/image/hersheyprodcloud/0_34000_22670_2_701_22670_004_Item_Front?fmt=webp-alpha&hei=908&qlt=75",
    category: "Shirinliklar"
  },


  {
    name: "Oq non (butun)",
    price: "5,000 so'm",
    image: "https://yukber.uz/image/cache/catalog/product/YK0381/YK038l-700x700.jpg",
    category: "Non mahsulotlari"
  },
  {
    name: "Baget non 1 dona",
    price: "7,000 so'm",
    image: "https://yastatic.net/avatars/get-grocery-goods/2783132/aff3e6b6-3bcd-4188-9ffb-39e2227ba301/464x464-origin",
    category: "Non mahsulotlari"
  },
  {
    name: "Makaron 1kg",
    price: "10,000 so'm",
    image: "https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/filer_public/75/65/75653e1b-9fc8-4b01-be40-2fe20b4b0166/spagetti.jpg",
    category: "Non mahsulotlari"
  },
  {
    name: "Un 1kg",
    price: "7,500 so'm",
    image: "https://bazarstore.az/cdn/shop/products/30002692_27d2164a-5677-4aaf-b863-4a2a6912b659.jpg?v=1693381235",
    category: "Non mahsulotlari"
  },
  {
    name: "Guruch 1kg",
    price: "14,000 so'm",
    image: "https://yukber.uz/image/cache/catalog/product/YK0021/YK0021-600x600.jpg",
    category: "Don mahsulotlari"
  },
  {
    name: "Sut 1L",
    price: "9,000 so'm",
    image: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2024-04-18/CgClVjFW8bu2jf43QIaG2Y0DHsLjVWuJzAIkvNL2LwiSNeAGdlhzBFaaPBlx.jpg",
    category: "Sut mahsulotlari"
  },
  {
    name: "Qaymoq 200ml",
    price: "11,000 so'm",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6maIbmImP8tDceC7Zbdl5XtFuD7iUhWAHw&s",
    category: "Sut mahsulotlari"
  },
  {
    name: "Tvorog 200g",
    price: "12,000 so'm",
    image: "https://dostavo4ka.uz/upload-file/2022/05/22/6259/750x750-e0998398-ec12-418d-8337-4acd2c872c85.jpg",
    category: "Sut mahsulotlari"
  },
  {
    name: "Smetana 200g",
    price: "10,500 so'm",
    image: "https://yastatic.net/avatars/get-grocery-goods/2750890/77d98401-a3bb-4c8a-a56d-e9142455dc15/464x464-origin",
    category: "Sut mahsulotlari"
  },
  {
    name: "Yog‘urt 250ml",
    price: "8,500 so'm",
    image: "https://ir.ozone.ru/s3/multimedia-1-c/c1000/7578764832.jpg",
    category: "Sut mahsulotlari"
  },


  {
    name: "Olma 1kg",
    price: "10,000 so'm",
    image: "https://yukber.uz/image/cache/catalog/92dc230c321aa3574a5fd135269b378b-700x700.jpg",
    category: "Mevalar"
  },
  {
    name: "Banan 1kg",
    price: "14,000 so'm",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
    category: "Mevalar"
  },
  {
    name: "Apelsin 1kg",
    price: "15,000 so'm",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
    category: "Mevalar"
  },
  {
    name: "Uzum 1kg",
    price: "18,000 so'm",
    image: "https://yukber.uz/image/cache/catalog/product/YK8031/8031-700x700.jpg",
    category: "Mevalar"
  },
  {
    name: "Pomidor 1kg",
    price: "9,000 so'm",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",
    category: "Sabzavotlar"
  },
  {
    name: "Bodring 1kg",
    price: "8,000 so'm",
    image: "https://dostavo4ka.uz/upload-file/2021/05/05/1985/39a9cf0f-408d-47dd-9681-9f5823a24043.jpg",
    category: "Sabzavotlar"
  },
  {
    name: "Kartoshka 1kg",
    price: "7,500 so'm",
    image: "https://dostavo4ka.uz/upload-file/2021/05/05/5807/750x750-267fb092-d671-4e80-9ccc-6df0484b3825.jpg",
    category: "Sabzavotlar"
  },
  {
    name: "Piyoz 1kg",
    price: "6,000 so'm",
    image: "https://yukber.uz/image/cache/catalog/product/YK4387/4387-700x700.jpg",
    category: "Sabzavotlar"
  },
  {
    name: "Mol go‘shti 1kg",
    price: "65,000 so'm",
    image: "https://yukber.uz/image/cache/catalog/photo_2023-12-11_12-13-54-700x700.jpg",
    category: "Go‘sht mahsulotlari"
  },
  {
    name: "Tovuq go‘shti 1kg",
    price: "40,000 so'm",
    image: "https://yukber.uz/image/cache/catalog/product/YK0349/YK0349-600x600.jpg",
    category: "Go‘sht mahsulotlari"
  },


  {
    name: "Qo‘y go‘shti 1kg",
    price: "70,000 so'm",
    image: "https://yukber.uz/image/cache/catalog/korejka2-700x700.jpeg",
    category: "Go‘sht mahsulotlari"
  },
  {
    name: "Mol qiyma 1kg",
    price: "68,000 so'm",
    image: "https://dev.optom.app/6627-large_default/mol-qiyma.jpg",
    category: "Go‘sht mahsulotlari"
  },
  {
    name: "Tovuq oyoq (baraban) 1kg",
    price: "35,000 so'm",
    image: "https://files.glotr.uz/company/000/037/638/products/2024/11/04/2024-11-04-16-54-13-037572-d1e56353a814128f13f560749f265cf6.webp?_=ozauc",
    category: "Go‘sht mahsulotlari"
  },
  {
    name: "Kolbasa Servelat 500g",
    price: "32,000 so'm",
    image: "https://optom.app/4620-large_default/lazzat-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D0%BB%D0%B0%D1%82-500%D0%B3.jpg",
    category: "Go‘sht mahsulotlari"
  },
  {
    name: "Sosiska 1kg",
    price: "30,000 so'm",
    image: "https://api.lochin.uz/media/file/image/2020-08/8e9132ec-de7f-46ba-870b-7d9a4da440ed.jpg.500x500_q85_crop-scale.jpg",
    category: "Go‘sht mahsulotlari"
  },
  {
    name: "Baliq filet (losos) 1kg",
    price: "85,000 so'm",
    image: "https://srcyrl.xsdfoods.com/uploads/202318522/iqf-fish-salmon-1kg4eb3cf2c-01f4-4535-a792-447a85f60fce.jpg",
    category: "Dengiz mahsulotlari"
  },
  {
    name: "Qalmar halqasi 500g",
    price: "40,000 so'm",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgxBWR2z1RGsqobjTVILfBlCmtAutlrL_vg&s",
    category: "Dengiz mahsulotlari"
  },
  {
    name: "Krevetka 500g",
    price: "55,000 so'm",
    image: "https://static.insales-cdn.com/r/ohYM6PrRlFY/rs:fit:1200:1200:1/plain/images/products/1/6759/962304615/krevetka-grebenchataya-botan-500g.jpg@jpg",
    category: "Dengiz mahsulotlari"
  },
  {
    name: "Muzqaymoq vanil 100g",
    price: "8,000 so'm",
    image: "https://m.media-amazon.com/images/I/81owx5lGh9L._SL1500_.jpg",
    category: "Muzlatilgan mahsulotlar"
  },
  {
    name: "Muzlatilgan pitsa 400g",
    price: "28,000 so'm",
    image: "https://bizkim.uz/foto_product/521_3_A6bjncDTiht7_1.jpg",
    category: "Muzlatilgan mahsulotlar"
  },




  {
    name: "Kir yuvish kukuni (Tide) 3kg",
    price: "48,000 so'm",
    image: "https://100k.website.yandexcloud.net/resized/1000x1000/products/images/Lt76OY0bPE9u8qvbSVhbJqYUmncm6DhuxCE2w0wO.jpg.webp",
    category: "Uy-ro‘zg‘or va tozalovchi vositalar"
  },
  {
    name: "Idish yuvish suyuqligi (Fairy) 1L",
    price: "22,000 so'm",
    image: "https://cdn.flymart.uz/file/hub/file/2024/4/24/2fXwZ0kqSVFcUjOVNozrykc2hoI.jpg",
    category: "Uy-ro‘zg‘or va tozalovchi vositalar"
  },
  {
    name: "Pol tozalovchi suyuqlik (Mr. Proper) 1L",
    price: "26,000 so'm",
    image: "https://olcha.uz/image/700x700/products/9NyePwNLTEsSvP4IHdqyeJpta8MrFEDzkKf4Pze8nyhUPIrXa1cAa63vqunv.jpg",
    category: "Uy-ro‘zg‘or va tozalovchi vositalar"
  },
  {
    name: "Oshxona salfetkalari (Zewa) 2 dona",
    price: "15,000 so'm",
    image: "https://dixy.ru/upload/iblock/4de/yk9wgcklle2swrhkmssldhwlcv2f3jfd.webp",
    category: "Uy-ro‘zg‘or va tozalovchi vositalar"
  },
  {
    name: "Tualet qog‘ozi (Zewa Deluxe) 4 dona",
    price: "18,000 so'm",
    image: "https://images.uzum.uz/cesot98v1htd23akf7dg/original.jpg",
    category: "Uy-ro‘zg‘or va tozalovchi vositalar"
  },
  {
    name: "Dezinfeksiya spreyi (Dettol) 500ml",
    price: "30,000 so'm",
    image: "https://cdn.mafrservices.com/pim-content/UAE/media/product/1027901/1759928404/1027901_main.jpg",
    category: "Uy-ro‘zg‘or va tozalovchi vositalar"
  },
  {
    name: "Oyna tozalovchi (Clin) 750ml",
    price: "19,000 so'm",
    image: "https://cdn.flymart.uz/file/hub/file/2024/4/16/2fBK7LSh7KhD7mxKIOkCulbrZ4Y.jpg",
    category: "Uy-ro‘zg‘or va tozalovchi vositalar"
  },
  {
    name: "Oshxona gubkasi (5 dona)",
    price: "10,000 so'm",
    image: "https://images.uzum.uz/cumq4ik5j42bjc4e1tr0/t_product_low.jpg",
    category: "Uy-ro‘zg‘or va tozalovchi vositalar"
  },
  {
    name: "Axlat paketi (30 dona)",
    price: "8,000 so'm",
    image: "https://frankfurt.apollo.olxcdn.com/v1/files/6f2b63gnzbbp2-UZ/image;s=1080x1440",
    category: "Uy-ro‘zg‘or va tozalovchi vositalar"
  },
  {
    name: "Havo tozalovchi (AirWick) 250ml",
    price: "25,000 so'm",
    image: "https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/filer_public/9f/c2/9fc26631-c6ec-403e-b857-df1312fb3dae/air_wick_havo_tozalagich_250_ml_rayiskiye_cveti.jpg",
    category: "Uy-ro‘zg‘or va tozalovchi vositalar"
  },



  {
    name: "Tish pastasi (Colgate) 100ml",
    price: "15,000 so'm",
    image: "https://100k.website.yandexcloud.net/resized/1000x1000/products/images/U8ZP94BpALTZvPJgiTKtFSvKg3pCIDnFIYUDS0Ow.jpg.webp",
    category: "Kosmetika va gigiyena"
  },
  {
    name: "Tish cho‘tkasi (Oral-B)",
    price: "18,000 so'm",
    image: "https://images.uzum.uz/cte078tht56hik5kkdqg/original.jpg",
    category: "Kosmetika va gigiyena"
  },
  {
    name: "Yuz kremi (Nivea) 100ml",
    price: "35,000 so'm",
    image: "https://cdn.flymart.uz/file/hub/file/2024/4/8/2eoYdVGLILpzIl9cJ95Naz1UIHh.jpg",
    category: "Kosmetika va gigiyena"
  },
  {
    name: "Soch shampuni (Head & Shoulders) 400ml",
    price: "40,000 so'm",
    image: "https://ir.ozone.ru/s3/multimedia-8/6226255868.jpg",
    category: "Kosmetika va gigiyena"
  },
  {
    name: "Soch balzami (Pantene) 400ml",
    price: "38,000 so'm",
    image: "https://pharmaclick.uz/upload/Sh/imageCache/161/133/1335021658592829.webp",
    category: "Kosmetika va gigiyena"
  },
  {
    name: "Dezodorant (Rexona) 150ml",
    price: "27,000 so'm",
    image: "https://pharmaclick.uz/upload/Sh/imageCache/289/684/6848522031537030.webp",
    category: "Kosmetika va gigiyena"
  },
  {
    name: "Lab balzami (Vaseline)",
    price: "22,000 so'm",
    image: "https://i.makeupstore.uz/f/fl/fl5lyut36zy1.jpg",
    category: "Kosmetika va gigiyena"
  },
  {
    name: "Qo‘l kremi (Garnier) 100ml",
    price: "28,000 so'm",
    image: "https://cdnp.cody.mn/spree/images/2485785/large/cdm7scov1htd23ahtmv0.jpg?1719492325",
    category: "Kosmetika va gigiyena"
  },
  {
    name: "Parfyum (Dior Sauvage) 100ml",
    price: "550,000 so'm",
    image: "https://parfumstock.uz/thumb/2/eBNXkH1T3xY0SHSSoiCEYg/r/d/3348901520065.jpg",
    category: "Kosmetika va gigiyena"
  },
  {
    name: "Soch uchun moy (L’Oreal Elseve) 100ml",
    price: "45,000 so'm",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbn6iG8dhsub_gg6pXiSnJg5YN5n_vOAgPOw&s",
    category: "Kosmetika va gigiyena"
  },



  {
    name: "Pampers (№3, 60 dona)",
    price: "120,000 so'm",
    image: "https://i.makeupstore.uz/g/gg/gg5ngsbaidf5.jpg",
    category: "Bolalar mahsulotlari"
  },
  {
    name: "Bolalar nam salfetkasi (Huggies) 64 dona",
    price: "25,000 so'm",
    image: "https://www.huggies.uz/-/media/feature/huggies/emea/uz/product/plp-images/plp-product-images/plp_ww_huc_56-min.jpg?rev=-1",
    category: "Bolalar mahsulotlari"
  },
  {
    name: "Bolalar shampuni (Johnson’s Baby) 500ml",
    price: "38,000 so'm",
    image: "https://pharmaclick.uz/upload/Sh/imageCache/123/658/658762352171996.webp",
    category: "Bolalar mahsulotlari"
  },
  {
    name: "Bolalar kukuni (Baby Powder) 200g",
    price: "22,000 so'm",
    image: "https://a5apteka.uz/_next/image?url=https%3A%2F%2Fapi.a5apteka.uz%2Fuploads%2F2025-06-20%2F53dd0a18-a934-4a4d-9dd3-ea598cfa478e.webp&w=1080&q=75",
    category: "Bolalar mahsulotlari"
  },
  {
    name: "Bolalar o‘yinchog‘i (LEGO Classic)",
    price: "250,000 so'm",
    image: "https://m.media-amazon.com/images/I/81nZVW8OXQL._AC_SL1500_.jpg",
    category: "Bolalar mahsulotlari"
  },
  {
    name: "Bolalar so‘rish butilkasi (Philips Avent)",
    price: "65,000 so'm",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYeV6LCgXXTpBSNSwrdBogGS0MbHaAJ7lG8g&s",
    category: "Bolalar mahsulotlari"
  },
  {
    name: "Bolalar kiyimi (Bodik, 2 dona)",
    price: "80,000 so'm",
    image: "https://castore.uz/upload/iblock/56a/n8c60eyn3f0jv6tfmmhlqplefirvf5gq/komplekt-kid-kid-belyy-print-vse-mogu-bodi-polzun-kombinizony-raspash-slyun-chepchik-dlya-malchika-4.jpg",
    category: "Bolalar mahsulotlari"
  },
  {
    name: "Bolalar poyafzali (Nike Kids)",
    price: "190,000 so'm",
    image: "https://m.media-amazon.com/images/I/61ikI6RZ+cL._AC_SL1500_.jpg",
    category: "Bolalar mahsulotlari"
  },
  {
    name: "Bolalar kitobi (Rangli ertaklar)",
    price: "30,000 so'm",
    image: "https://images.uzum.uz/cukpm7ui4n324lr99dpg/original.jpg",
    category: "Bolalar mahsulotlari"
  },
  {
    name: "Bolalar velosipedi (3 g‘ildirakli)",
    price: "450,000 so'm",
    image: "https://olcha.uz/image/700x700/products/2022-07-03/detskiy-velosiped-3-kolesnyy-dv-001-62926-0.jpeg",
    category: "Bolalar mahsulotlari"
  },
  // === 11-QISM: Anjir Supermarket yangi mahsulotlari (takrorlanmagan) ===



  // 🧃 Qo‘shimcha ichimliklar
  {
    name: "Nescafe Classic 100 g",
    price: "29,000 so'm",
    image: "https://i5.walmartimages.com/seo/Nescafe-Classic-Coffee-Glass-Jar-100G_9f5bbdc1-7e2b-4db2-90db-d3fe940404a8.0c0a6db0ec2818d66af9db39298128b9.jpeg",
    category: "Ichimliklar"
  },
  {
    name: "Jacobs Monarch 95 g",
    price: "33,000 so'm",
    image: "https://dostavo4ka.uz/upload-file/2021/05/05/682/e4134a9c-23be-4f98-9dd9-1394b28a1712.jpg",
    category: "Ichimliklar"
  },
  {
    name: "Mirinda 1.5 L",
    price: "12,000 so'm",
    image: "https://images.uzum.uz/cq73f635qt1qbnojrv3g/original.jpg",
    category: "Ichimliklar"
  },
  {
    name: "Fuse Tea 0.5 L",
    price: "10,000 so'm",
    image: "https://images.uzum.uz/d1du6pal822nnungvev0/original.jpg",
    category: "Ichimliklar"
  },

  // 🍪 Pechenye va shirinliklar
  {
    name: "Oreo 95 g",
    price: "11,000 so'm",
    image: "https://backend.magnit.tj/uploads/images/178230b2efcc70d1f38e7bfb9c6a2cfa-1024x1024.jpg",
    category: "Shirinliklar"
  },
  {
    name: "Barni pishiriq 30 g",
    price: "5,500 so'm",
    image: "https://olcha.uz/image/700x700/products/2023-01-11/biskvit-barni-molochnyy-30g-189255-0.jpg",
    category: "Shirinliklar"
  },
  {
    name: "Choco Pie 6 dona",
    price: "22,000 so'm",
    image: "https://yukber.uz/image/cache/catalog/YK9120/76185ad8831ffbdb20957d67e8e03929%20(1)-700x700.png",
    category: "Shirinliklar"
  },
  {
    name: "Raffaello 150 g",
    price: "39,000 so'm",
    image: "https://m.media-amazon.com/images/I/61JFjthe1HL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
    category: "Shirinliklar"
  },

  // 🧴 Gigiyena vositalari
  {
    name: "Dove sovun 90 g",
    price: "9,000 so'm",
    image: "https://images.uzum.uz/co4o4d6pom4ma10rqksg/original.jpg",
    category: "Gigiyena"
  },
  {
    name: "Gillette ustara",
    price: "18,000 so'm",
    image: "https://cdn.flymart.uz/file/hub/file/2024/4/25/2fabrKX0fDJduGkqe8piBhijvza.jpg",
    category: "Gigiyena"
  },
  {
    name: "Nivea krem 100 ml",
    price: "19,000 so'm",
    image: "https://i.makeupstore.uz/b/bw/bw8lbp3j6gvi.jpg",
    category: "Gigiyena"
  },
  {
    name: "Always Ultra Night",
    price: "23,000 so'm",
    image: "https://i.makeupstore.uz/y/yu/yukqqu6oloh8.jpg",
    category: "Gigiyena"
  },

  // 🍚 Oziq-ovqat mahsulotlari
  {
    name: "Mistral guruch 1 kg",
    price: "17,000 so'm",
    image: "https://dostavo4ka.uz/upload-file/2021/05/05/3835/4645f6bf-db73-4e1f-a26f-f54a4671bf4c.jpg",
    category: "Don mahsulotlari"
  },
  {
    name: "Makfa vermishel 500 g",
    price: "13,000 so'm",
    image: "https://ir.ozone.ru/s3/multimedia-6/c1000/6730246554.jpg",
    category: "Makaron mahsulotlari"
  },
  {
    name: "Heinz mayonez 350 g",
    price: "15,000 so'm",
    image: "https://api.lochin.uz/media/file/image/2020-08/287e01da-f87d-4fc1-bedb-049a072dfd17.jpg.500x500_q85_crop-scale.jpg",
    category: "Ziravorlar"
  },
  {
    name: "Kikkoman soya sousi 150 ml",
    price: "22,000 so'm",
    image: "https://basket-12.wbbasket.ru/vol1768/part176809/176809642/images/big/1.webp",
    category: "Ziravorlar"
  },

  // 🧹 Uy-ro‘zg‘or buyumlari
  {
    name: "Bref unitaz tozalagich",
    price: "14,000 so'm",
    image: "https://dostavo4ka.uz/upload-file/2021/05/05/317/7209aaed-c863-4edd-b4c8-ed254d606702.jpg",
    category: "Uy-ro‘zg‘or buyumlari"
  },
  {
    name: "Lenor mato yumshatgich 1 L",
    price: "25,000 so'm",
    image: "https://images-cdn.ubuy.co.in/656824d9cd5be168d02e8726-lenor-fabric-conditioner-spring.jpg",
    category: "Uy-ro‘zg‘or buyumlari"
  },
  {
    name: "Vanish dog‘ ketkazuvchi 1 kg",
    price: "42,000 so'm",
    image: "https://dostavo4ka.uz/upload-file/2021/05/05/1530/750x750-1b16275a-5409-4aa9-9e8d-8e5713368b8a.jpg",
    category: "Uy-ro‘zg‘or buyumlari"
  },
  {
    name: "Cif yuzaki tozalagich 500 ml",
    price: "18,000 so'm",
    image: "https://cdn.bigmart.uz/file/hub/file/2025/3/19/2uWjD0mo8c4tQRY0XrHOLNGWGKg.jpg",
    category: "Uy-ro‘zg‘or buyumlari"
  },

  // 📱 Texnika
  {
    name: "Philips blender",
    price: "499,000 so'm",
    image: "https://castore.uz/upload/iblock/27b/06sgf0eialb0l21btd2u4r9dfnm8zxvz/blender-philips-hr-2041-00-6.webp",
    category: "Texnika"
  },
  {
    name: "Samsung mikroto‘lqinli pech",
    price: "1,250,000 so'm",
    image: "https://castore.uz/upload/iblock/ce8/7dirthrg25udqpgnb79ugg1bbnqvrns8/mikrovolnovaya-pech-samsung-me83arw-k-bw.png",
    category: "Texnika"
  },
  {
    name: "LG changyutkich",
    price: "1,050,000 so'm",
    image: "https://www.lg.com/uz/images/vacuum-cleaners/md07543801/gallery/medium02.jpg",
    category: "Texnika"
  },
  {
    name: "Xiaomi Powerbank 10000mAh",
    price: "185,000 so'm",
    image: "https://images.uzum.uz/cn4h49ps99ouqbfu3qsg/original.jpg",
    category: "Texnika"
  }
 
];

const container = document.getElementById("productContainer");

products.forEach((p) => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}" />
    <div class="product-info">
      <div class="product-name">${p.name}</div>
      <div class="product-price">${p.price}</div>
    </div>
  `;

  container.appendChild(card);
});




