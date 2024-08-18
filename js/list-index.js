
var app = angular.module("shoeapp", []);
app.controller("mainController", function ($scope) {
  $scope.activeTab = "giaynhantao"; // Set default active tab
  $scope.setActiveTab = function (tabName) {
    $scope.activeTab = tabName;
  };
});
app.controller("phukienController", function ($scope) {
  $scope.phukien = [
    {
      img_ao: "img/list-ao-8.JPG",
      name_ao: "ĐỒ ĐÁ BÓNG CLB PARIS SAINT-GERMAIN",
      price_ao: "150,000đ",
    },
    {
      img_ao: "img/list-ao-1.webp",
      name_ao: "ĐỒ ĐÁ BÓNG QUỐC GIA ARGENTINA",
      price_ao: "150,000đ",
    },
    {
      img_ao: "img/list-ao-6.JPG",
      name_ao: "ĐỒ ĐÁ BÓNG CLB MANCHESTER UNITED",
      price_ao: "150,000đ",
    },
    {
      img_ao: "img/list-ao-5.JPG",
      name_ao: "ĐỒ ĐÁ BÓNG CÂU LẠC BỘ AFC AJAX",
      price_ao: "150,000đ",
    },
    {
      img_ao: "img/list-ao-4.JPG",
      name_ao: "ĐỒ ĐÁ BÓNG/ĐỒ THỂ THAO ADIDAS",
      price_ao: "150,000đ",
    },
    {
      img_ao: "img/list-ao-2.WEBP",
      name_ao: "ĐỒ ĐÁ BÓNG QUỐC GIA BRAZIL XỨ SỞ SAMBOO",
      price_ao: "150,000đ",
    },
    {
      img_ao: "img/list-ao-1.WEBP",
      name_ao: "ĐỒ ĐÁ BÓNG QUỐC GIA ARGENTINA",
      price_ao: "150,000đ",
    },
    {
      img_ao: "img/list-ao-3.JPG",
      name_ao: "ĐỒ ĐÁ BÓNG QUỐC CLB REAL MADRID",
      price_ao: "150,000đ",
    },
  ];
});

app.controller("giaynhantaoController", function ($scope) {
  $scope.nhantao = [
    {
      link: "chitietsp.html",
      img_shoe: "img/mizuno-sala-do.jpg",
      name_shoe: "GIÀY SÂN CỎ NHÂN TẠO MIZUNO MORELIA SALA CLUB - ĐỎ",
      price_shoe: "650,000đ",
    },
    {
      link: "#",
      img_shoe: "img/wika-futsal.webp",
      name_shoe: "GIÀY SÂN CỎ NHÂN TẠO BITI'S HUNTER - ĐỎ",
      price_shoe: "612,000đ",
    },
    {
      link: "#",
      img_shoe: "img/nikevapor3-tf.jpg",
      name_shoe: "GIÀY SÂN CỎ NHÂN TẠO NIKE MERCURIAL VICTORY VI",
      price_shoe: "350,000đ",
    },
    {
      link: "#",
      img_shoe: "img/puma-tf.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO PUMA FUTURE",
      price_shoe: "720,000đ",
    },
    {
      link: "#",
      img_shoe: "img/adidasNemi-tf.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO ADIDAS NEMEZIZ",
      price_shoe: "450,000đ",
    },
    {
      link: "#",
      img_shoe: "img/mizuno-neo3-bac.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO MIZUNO MORELIA NEO 3 - ĐỎ",
      price_shoe: "750,000đ",
    },
    {
      link: "#",
      img_shoe: "img/adidasX2-tf.webp",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO ADIDAS X - HỒNG",
      price_shoe: "350,000đ",
    },
    {
      link: "#",
      img_shoe: "img/adidasX-tf.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO ADIDAS X - TRẮNG",
      price_shoe: "350,000đ",
    },
    {
      link: "#",
      img_shoe: "img/adidasNemi2-tf.webp",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO ADIDAS NEMEZIZ - XANH",
      price_shoe: "350,000đ",
    },
    {
      link: "#",
      img_shoe: "img/wika-tf.webp",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO WIKA - VÀNG",
      price_shoe: "250,000đ",
    },
    {
      link: "#",
      img_shoe: "img/mizuno-neo2-trang.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO MIZUNO MORELIA NEO 2 - TRẮNG",
      price_shoe: "550,000đ",
    },
    {
      link: "#",
      img_shoe: "img/nikevapor2-tf.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO NIKE MERCURIAL VAPOR VII - TRẮNG ĐỎ",
      price_shoe: "450,000đ",
    },
    {
      link: "#",
      img_shoe: "img/mizuno-neo3-xanh.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO MIZUNO MORELIA NEO 3 - XANH",
      price_shoe: "550,000đ",
    },
    {
      link: "#",
      img_shoe: "img/puma2-tf.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO PUMA FUTURE - XANH CHUỐI",
      price_shoe: "620,000đ",
    },
    {
      link: "#",
      img_shoe: "img/nikevapor-tf.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO NIKE MERCURIAL VAPOR VII - TRẮNG ĐEN",
      price_shoe: "450,000đ",
    },
  ];
});

app.controller("giaycothatController", function ($scope) {
  $scope.cothat = [
    {
      link: "#",
      img_shoe: "img/nikephantom-fg.webp",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ TỰ NHIÊN NIKE PHANTOM GX ELITE FG",
      price_shoe: "950,000đ",
    },
    {
      link: "#",
      img_shoe: "img/wika-fg.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ TỰ NHIÊN WIKA FG",
      price_shoe: "780,000đ",
    },
    {
      link: "#",
      img_shoe: "img/puma-fg.webp",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ TỰ NHIÊN PUMA FUTURE SPEED FG",
      price_shoe: "1,320,000đ",
    },
    {
      link: "#",
      img_shoe: "img/nikephantom2-fg.webp",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ TỰ NHIÊN NIKE PHANTOM GT II ELITE FG",
      price_shoe: "650,000đ",
    },
    {
      link: "#",
      img_shoe: "img/nikevapor-fg.JPG",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ TỰ NHIÊN NIKE MERCURIAL VAPOR VI FG",
      price_shoe: "950,000đ",
    },
    {
      link: "#",
      img_shoe: "img/puma2-fg.webp",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ TỰ NHIÊN PUMA FUTURE ELITE FG",
      price_shoe: "950,000đ",
    },
    {
      link: "#",
      img_shoe: "img/adidaspre-fg.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ TỰ NHIÊN ADIDAS PREDATOR ELITE FG",
      price_shoe: "950,000đ",
    },
    {
      link: "#",
      img_shoe: "img/adidasX-fg.JPG",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN CỎ TỰ NHIÊN ADIDAS X SPEED ELITE FG",
      price_shoe: "950,000đ",
    },
  ];
});

app.controller("giayfutsalController", function ($scope) {
  $scope.futsal = [
    {
      link:"#",
      img_shoe: "img/nikelunar-futsal.webp",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN FUTSAL NIKE LUNAR GATO II - XANH",
      price_shoe: "550,000đ",
    },
    {
      link:"#",
      img_shoe: "img/nikeair-futsal.webp",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN FUTSAL NIKE ARIZOOM - HỒNG",
      price_shoe: "780,000đ",
    },
    {
      link:"#",
      img_shoe: "img/nikesuper-futsal.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN FUTSAL NIKE MERCURIAL SUPERFLY V - XANH RÊU",
      price_shoe: "550,000đ",
    },
    {
      link:"#",
      img_shoe: "img/nikelunar2-futsal.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN FUTSAL NIKE LUNAR GATO 2 - XANH RÊU",
      price_shoe: "650,000đ",
    },
    {
      link:"#",
      img_shoe: "img/niketempo-futsal.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN FUTSAL NIKE TEMPO",
      price_shoe: "650,000đ",
    },
    {
      link:"#",
      img_shoe: "img/wika-futsal.webp",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN FUTSAL BITT'S HUNTER - ĐỎ",
      price_shoe: "650,000đ",
    },
    {
      link:"#",
      img_shoe: "img/wika2-futsal.webp",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN FUTSAL WIKA CHÍNH HÃNG - XANH",
      price_shoe: "650,000đ",
    },
    {
      link:"#",
      img_shoe: "img/wika3-futsal.jpg",
      name_shoe: "GIÀY ĐÁ BÓNG SÂN FUTSAL WIKA CHÍNH HÃNG - TRẮNG",
      price_shoe: "650,000đ",
    },
  ];
});
