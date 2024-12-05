function scrollToElement(id) {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" }); // Animasi slide down
  }
}

let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  textp.style.marginTop = value * 2.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill4.style.left = value * -1.5 + "px";
  hill1.style.top = value * 1 + "px";
});

// Animate numbers
const stats = document.querySelectorAll(".stat-number");

stats.forEach((stat) => {
  const target = parseInt(stat.getAttribute("data-count"));
  let count = 0;
  const duration = 2000;
  const increment = target / (duration / 16);

  const updateCount = () => {
    if (count < target) {
      count += increment;
      stat.textContent = Math.round(count);
      requestAnimationFrame(updateCount);
    } else {
      stat.textContent = target;
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateCount();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(stat);
});

const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");

mobileMenuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Navbar scroll effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    !navLinks.contains(event.target) &&
    !mobileMenuToggle.contains(event.target)
  ) {
    navLinks.classList.remove("active");
  }
});

const slideContainer = document.querySelector(".slide-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentSlide = 0;
const slides = document.querySelectorAll(".product-slide");

function slide(direction) {
  currentSlide += direction;

  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;

  slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextBtn.addEventListener("click", () => slide(1));
prevBtn.addEventListener("click", () => slide(-1));

// Auto slide every 3 seconds
setInterval(() => slide(1), 3000);

const topicContent = {
  all: {
    featured: {
      image:
        "https://asset.kompas.com/crops/Vd5KzKQ_Fvf3jYIQ6G9G2Jv6OIE=/613x0:4123x2340/1200x800/data/photo/2024/11/26/6744ce0bc6635.jpg",
      category: "NIAGA",
      title: "DAMRI Siap Operasikan 90 Unit Bus Listrik Akhir Tahun Ini",
      author: "Dio Dananjaya, Agung Kurniawan",
      date: "26/11/2024, 10:42 WIB",
      excerpt:
        "Bus listrik yang sedang dalam persiapan ini akan diluncurkan dan beroperasi di koridor busway...",
      url: "http://otomotif.kompas.com/read/2024/11/26/104200715/damri-siap-operasikan-90-unit-bus-listrik-akhir-tahun-ini",
    },
    related: [
      {
        image:
          "https://asset.kompas.com/crops/d46fxkLsNoRPRa8C33uTSnjNo-s=/600x400:5400x3600/1200x800/data/photo/2024/10/25/671bb9804a88b.jpg",
        title:
          "Tities Saputra Tampilkan Kreasi Denim dan Busana Feminin di JFW 2025",
        date: "27/10/2024, 07:17 WIB",
        url: "https://lifestyle.kompas.com/read/2024/10/27/071740820/tities-saputra-tampilkan-kreasi-denim-dan-busana-feminin-di-jfw-2025",
      },
      {
        image:
          "https://asset.kompas.com/crops/jFbB00A6WZ2pPsHandnoAY67Mws=/129x85:1151x767/1200x800/data/photo/2024/11/26/6745273a35bb7.jpg",
        title:
          "HAEI Dorong Keselamatan Listrik dan Teknologi Ramah Lingkungan di Bangunan Gedung",
        date: "26/11/2024, 08:44 WIB",
        url: "https://money.kompas.com/read/2024/11/26/084427026/haei-dorong-keselamatan-listrik-dan-teknologi-ramah-lingkungan-di-bangunan",
      },
      {
        image:
          "https://asset.kompas.com/crops/-UJKUj-Eu0OmKcZAdKD4hM-Tib0=/0x0:1280x853/1200x800/data/photo/2024/03/18/65f7b86d3d65b.jpeg",
        title:
          "Wisata Mangrove Jambi Diapresiasi, Serap Karbon 6 Kali Lipat Tanaman Biasa",
        date: "18/03/2024, 13:21 WIB",
        url: "https://lestari.kompas.com/read/2024/03/18/132156986/wisata-mangrove-jambi-diapresiasi-serap-karbon-6-kali-lipat-tanaman-biasa",
      },
      {
        image:
          "https://storage.googleapis.com/a1aa/image/jJjXgofvwbRcQKdCA2a4NkRIhWGMrBPPvfG04eEeTcXf8FqeE.jpg",
        title:
          "Kos-kosan Rp500 Ribu per Bulan Dipermak Penyewa Pria Jadi Estetis, Hasilnya Picu Pro Kontra Warganet",
        date: "09/08/2024, 06:30 WIB",
        url: "https://www.liputan6.com/lifestyle/read/5663509/kos-kosan-rp500-ribu-per-bulan-dipermak-penyewa-pria-jadi-estetis-hasilnya-picu-pro-kontra-warganet",
      },
    ],
  },
  green_living: {
    featured: {
      image:
        "https://asset.kompas.com/crops/_uuCwzc5Z7R-ZSlTVlaeI_Mb3y0=/0x86:1280x939/490x326/data/photo/2024/08/19/66c2c536eea32.jpeg",
      category: "EDUCATION",
      title:
        'Perkuat "Green Living", UT Gelar Pengabdian kepada Masyarakat di Pamulang Timur',
      author: "Yohanes Enggar Harususilo",
      date: "19/08/2024, 11:16 WIB",
      excerpt:
        "Tim PkM UT melakukan edukasi dan donasi bak sampah khusus plastik sebagai wujud dukungan terhadap Program Lingkungan Hidup PBB.",
      url: "http://www.kompas.com/edu/read/2024/08/19/111600871/perkuat-green-living-ut-gelar-pengabdian-kepada-masyarakat-di-pamulang-timur",
    },
    related: [
      {
        image:
          "https://asset.kompas.com/crops/U9xQzRMPxgfBzWCu0Y6fi9_ANkw=/0x0:5000x3333/1200x800/data/photo/2024/04/30/66306699a7736.jpg",
        title:
          "Kapan Saat Tepat Membeli Rumah Impian? Ini Jawaban dan Rekomendasinya!",
        date: "30/04/2024, 13:40 WIB",
        url: "http://www.kompas.com/properti/read/2024/04/30/134000321/kapan-saat-tepat-membeli-rumah-impian-ini-jawaban-dan-rekomendasinya-",
      },
      {
        image:
          "https://asset.kompas.com/crops/GxhFR1YK84RdHgZUUyHcq1cignU=/0x0:2813x1875/1200x800/data/photo/2024/01/18/65a92c7a7874d.jpg",
        title: "Hunian Vertikal Jadi Incaran, Alam Sutera Hadirkan EleVee...",
        date: "19/01/2024, 09:03 WIB",
        url: "http://www.kompas.com/properti/read/2024/01/19/090300921/hunian-vertikal-jadi-incaran-alam-sutera-hadirkan-elevee-condominium",
      },
      {
        image:
          "https://asset.kompas.com/crops/O2X48Exz15ofBppxYkJVywe_thQ=/0x134:1599x1200/230x153/data/photo/2023/09/18/65086ffbd85c9.jpeg",
        title:
          "Upaya Alam Sutera Ciptakan Hunian Rendah Emisi dan Ramah Lingkungan",
        date: "18/09/2023, 22:48 WIB",
        url: "http://lestari.kompas.com/read/2023/09/18/224826386/upaya-alam-sutera-ciptakan-hunian-rendah-emisi-dan-ramah-lingkungan",
      },
      {
        image:
          "https://asset.kompas.com/crops/eMUcRPCf3mlRO0jB7Ii73BP91p0=/0x0:1620x1080/230x153/data/photo/2022/06/08/62a016652a67f.jpg",
        title: 'Bagaimana Memulai Gaya Hidup "Green Living"?',
        date: "09/06/2022, 10:54 WIB",
        url: "http://lifestyle.kompas.com/read/2022/06/09/105453820/bagaimana-memulai-gaya-hidup-green-living",
      },
    ],
  },
  fashion: {
    featured: {
      image:
        "https://asset.kompas.com/crops/uyXbRYXdDxXdkbFb7kgBFeB6RZM=/160x107:1440x959/490x326/data/photo/2024/11/02/6725a919a28fd.jpg",
      category: "SHOPPING",
      title:
        "Blibli Gelar Fashion Fest Family Edition, Ada Produk 'Preloved' 32 'Influencer'",
      author: "Sakina Rakhma Diah Setiawan",
      date: "02/11/2024, 11:30 WIB",
      excerpt:
        "PT Global Digital Niaga Tbk (BELI) atau Blibli kembali mengajak masyarakat dan keluarga menikmati akhir pekan di ajang Blibli Fashion Fest.",
      url: "http://money.kompas.com/read/2024/11/02/113000126/blibli-gelar-fashion-fest-family-edition-ada-produk-preloved-32-influencer-",
    },
    related: [
      {
        image:
          "https://asset.kompas.com/crops/wz-16Lcfcl_Yu111C765MbYHao4=/600x400:5400x3600/230x153/data/photo/2024/10/25/671bb9804a88b.jpg",
        title:
          "Tities Saputra Tampilkan Kreasi Denim dan Busana Feminin di JFW 2025",
        date: "27/10/2024, 07:17 WIB",
        url: "http://lifestyle.kompas.com/read/2024/10/27/071740820/tities-saputra-tampilkan-kreasi-denim-dan-busana-feminin-di-jfw-2025",
      },
      {
        image:
          "https://asset.kompas.com/crops/EFp7ChKaLaYqEI9LRp_hAXNklDU=/0x0:6000x4000/230x153/data/photo/2024/10/25/671bbb8e81e9a.jpg",
        title:
          "Danjyo Hiyoji Hadirkan Dua Konsep Fesyen Pria dalam 'Runway' JFW 2025",
        date: "26/10/2024, 15:14 WIB",
        url: "http://lifestyle.kompas.com/read/2024/10/26/151453020/danjyo-hiyoji-hadirkan-dua-konsep-fesyen-pria-dalam-runway-jfw-2025",
      },
      {
        image:
          "https://asset.kompas.com/crops/b8nF8sKlIv0H6mR6z9eg8db4_Ug=/0x336:4032x3024/230x153/data/photo/2024/10/25/671b2a4329bcb.jpeg",
        title:
          "Gaya Urban dan Edgy Warnai Koleksi Busana Sustainable Matahari di...",
        date: "25/10/2024, 22:31 WIB",
        url: "http://lifestyle.kompas.com/read/2024/10/25/223130720/gaya-urban-dan-edgy-warnai-koleksi-busana-sustainable-matahari-di-jfw-2025",
      },
      {
        image:
          "https://asset.kompas.com/crops/EkLO066vNmqscBgfyjGMIJ_iHo8=/0x248:1402x1182/230x153/data/photo/2024/08/08/66b4464c2944c.jpg",
        title: "Future Loundry, Mengangkat Budaya Permak dalam Gaya...",
        date: "08/08/2024, 11:26 WIB",
        url: "http://lifestyle.kompas.com/read/2024/08/08/112653020/future-loundry-mengangkat-budaya-permak-dalam-gaya-futuristik",
      },
    ],
  },
  tech: {
    featured: {
      image:
        "https://asset.kompas.com/crops/49uAZWEs_Ija71e7ub8jeClrg8Q=/0x0:780x520/490x326/data/photo/2024/11/26/6745925667a39.jpg",
      category: "INOVATION",
      title:
        "Kolaborasi Intikom dan FPT IS Hadirkan Teknologi Perhitungan Karbon Canggih di Indonesia",
      author: "kompas.com",
      date: "26/11/2024, 16:18 WIB",
      excerpt:
        "ntikom dan FPT IS resmi jalin kemitraan untuk kembangkan solusi penghitung karbon dan teknologi ramah lingkungan pada Kamis (14/11/2024).",
      url: "http://biz.kompas.com/read/2024/11/26/161843728/kolaborasi-intikom-dan-fpt-is-hadirkan-teknologi-perhitungan-karbon-canggih-di",
    },
    related: [
      {
        image:
          "https://asset.kompas.com/crops/pd_O8l8Pp2_7Ce8-zIz0LQVpTz4=/613x0:4123x2340/230x153/data/photo/2024/11/26/6744ce0bc6635.jpg",
        title: "DAMRI Siap Operasikan 90 Unit Bus Listrik Akhir Tahun Ini",
        date: "26/11/2024, 10:42 WIB",
        url: "http://otomotif.kompas.com/read/2024/11/26/104200715/damri-siap-operasikan-90-unit-bus-listrik-akhir-tahun-ini",
      },
      {
        image:
          "https://asset.kompas.com/crops/HXyU45MjZ6sL1hNMHNoN_qiLDUY=/129x85:1151x767/230x153/data/photo/2024/11/26/6745273a35bb7.jpg",
        title:
          "HAEI Dorong Keselamatan Listrik dan Teknologi Ramah Lingkungan di...",
        date: "November 28, 2024",
        url: "http://money.kompas.com/read/2024/11/26/084427026/haei-dorong-keselamatan-listrik-dan-teknologi-ramah-lingkungan-di-bangunan",
      },
      {
        image:
          "https://asset.kompas.com/crops/U5JSLGvcqzMelGNlHV2XkAqHD2c=/38x52:1488x1019/230x153/data/photo/2024/11/08/672dce3b498b9.jpeg",
        title:
          "Konferensi Internasional STIP Jakarta: Integrasi Teknologi Ramah...",
        date: "08/11/2024, 15:46 WIB",
        url: "http://www.kompas.com/edu/read/2024/11/08/154648571/konferensi-internasional-stip-jakarta-integrasi-teknologi-ramah-lingkungan",
      },
      {
        image:
          "https://asset.kompas.com/crops/0X6M4GY3AF7KsJQn-IbjBRc-V7s=/0x0:780x520/230x153/data/photo/2024/09/13/66e3e78866ed2.jpg",
        title:
          "GIFA-METEC Indonesia 2024 Hadirkan Inovasi Teknologi Pengecoran dan...",
        date: "13/09/2024, 14:21 WIB",
        url: "http://biz.kompas.com/read/2024/09/13/142132428/gifa-metec-indonesia-2024-hadirkan-inovasi-teknologi-pengecoran-dan-metalurgi",
      },
    ],
  },
  garden: {
    featured: {
      image:
        "https://cdn1-production-images-kly.akamaized.net/8t7NQH4zY883izaYYsO6CKEwxwI=/200x112/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4908937/original/051530600_1722752992-WhatsApp_Image_2024-08-04_at_11.47.09.jpeg",
      category: "Lifestyle",
      title:
        "Kos-kosan Rp500 Ribu per Bulan Dipermak Penyewa Pria Jadi Estetis, Hasilnya Picu Pro",
      author: "Dyah Ayu Pamela",
      date: "09/08/2024, 06:30 WIB",
      excerpt:
        "Kos-kosan seharga Rp500 ribu tersebut didekorasi dengan tata lampu serta dinding baru, lantainya pun diberi karpet dengan bujet...",
      url: "https://www.liputan6.com/lifestyle/read/5663509/kos-kosan-rp500-ribu-per-bulan-dipermak-penyewa-pria-jadi-estetis-hasilnya-picu-pro-kontra-warganet",
    },
    related: [
      {
        image:
          "https://cdn0-production-images-kly.akamaized.net/PvJVYvxfeYvcTqm7aflaRLo9sZM=/200x112/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4865158/original/064549200_1718526968-20240604_110732.jpg",
        title:
          "Jangan Ikut-ikutan Tren, Berikut Rekomendasi Jenis Tanaman untuk Dicoba Petani Urban Pemul...",
        date: "16/06/2024, 16:01 WIB",
        url: "https://www.liputan6.com/lifestyle/read/5621229/jangan-ikut-ikutan-tren-berikut-rekomendasi-jenis-tanaman-untuk-dicoba-petani-urban-pemula",
      },
      {
        image:
          "https://cdn1-production-images-kly.akamaized.net/AYzsl-O5gm8WExblPvXpA-Qgj8M=/200x112/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4748985/original/005533400_1708503880-IU.jpg",
        title:
          "Deretan Rumah Penyanyi IU di Kawasan Elit Gangnam hingga Gyeonggi-do Korea Selatan",
        date: "14/05/2024, 20:30 WIB",
        url: "https://www.liputan6.com/lifestyle/read/5595932/deretan-rumah-penyanyi-iu-di-kawasan-elit-gangnam-hingga-gyeonggi-do-korea-selatan",
      },
      {
        image:
          "https://cdn1-production-images-kly.akamaized.net/LW103JU4jriw8e0Xxn6Zn057Lqo=/0x0:0x0/200x112/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4728845/original/018977500_1706498460-WhatsApp_Image_2024-01-29_at_09.46.09.jpeg",
        title:
          "Kolaborasi MYCL X Pita Buat Inovasi Furnitur Ramah Lingkungan Berbahan Jamur",
        date: "30/01/2024, 04:00 WIB",
        url: "https://www.liputan6.com/lifestyle/read/5516067/kolaborasi-mycl-x-pita-buat-inovasi-furnitur-ramah-lingkungan-berbahan-jamur",
      },
      {
        image:
          "https://cdn0-production-images-kly.akamaized.net/L6pvi3RFudDz_gsrISq0A1XJ7Pc=/200x112/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4721291/original/067627500_1705720240-dul_2__1_.jpg",
        title:
          "Inspirasi Cat Warna Kalem yang Bisa Buat Suasana Rumah Makin Nyaman di 2024",
        date: "20/01/2024, 10:19 WIB",
        url: "https://www.liputan6.com/lifestyle/read/5509605/inspirasi-cat-warna-kalem-yang-bisa-buat-suasana-rumah-makin-nyaman-di-2024",
      },
    ],
  },
  travel: {
    featured: {
      image:
        "https://asset.kompas.com/crops/-4GTFoU-GGzlbCFSobMYTY6Gc50=/0x0:1000x667/490x326/data/photo/2024/10/29/6720c416af63f.jpg",
      category: "SWASTA",
      title:
        "Eco-Tourism, Tren Kunci yang Mengubah Lanskap Pariwisata Indonesia",
      author: "Anissa Dea Widiarini, Aditya Mulyawan",
      date: "29/10/2024, 18:47 WIB",
      excerpt:
        "Ecotourism sebagai pariwisata berkelanjutan direncanakan dengan tiga tujuan, yakni keuntungan, kelestarian lingkungan, dan kesejahteraan masyarakat.",
      url: "http://lestari.kompas.com/read/2024/10/29/184750586/eco-tourism-tren-kunci-yang-mengubah-lanskap-pariwisata-indonesia",
    },
    related: [
      {
        image:
          "https://asset.kompas.com/crops/AY2hBNsIUt5i-S0plit3PgE7vis=/0x0:1280x853/230x153/data/photo/2024/03/18/65f7b86d3d65b.jpeg",
        title:
          "Wisata Mangrove Jambi Diapresiasi, Serap Karbon 6 Kali Lipat Tanaman Biasa",
        date: "18/03/2024, 13:21 WIB",
        url: "http://lestari.kompas.com/read/2024/03/18/132156986/wisata-mangrove-jambi-diapresiasi-serap-karbon-6-kali-lipat-tanaman-biasa",
      },
      {
        image:
          "https://asset.kompas.com/crops/7IQtSFgJji6Q1XV0KNUuLzAbsWE=/0x0:0x0/230x153/data/photo/2023/10/04/651d6daaebbb5.jpeg",
        title: "PHRI Kaltim Dukung Penuh Pengembangan Ecotourism di IKN",
        date: "11/01/2024, 15:00 WIB",
        url: "http://www.kompas.com/properti/read/2024/01/11/150000721/phri-kaltim-dukung-penuh-pengembangan-ecotourism-di-ikn",
      },
      {
        image:
          "https://asset.kompas.com/crops/iWQPV8tXPLO3k40kUXg7aRnBfq4=/0x0:750x500/230x153/data/photo/2023/08/18/64def15305429.jpg",
        title:
          "Menakar Potensi Naik Kelas Ecotourism yang Akan Dikembangkan di IKN",
        date: "11/01/2024, 13:00 WIB",
        url: "http://lestari.kompas.com/read/2024/01/11/130000186/menakar-potensi-naik-kelas-ecotourism-yang-akan-dikembangkan-di-ikn",
      },
      {
        image:
          "https://asset.kompas.com/crops/DKQtCwNYpLoT1eZudJ6CR0AqiZ8=/0x0:1279x853/230x153/data/photo/2023/08/09/64d378dee2349.jpeg",
        title: "Likupang Akan Terapkan Konsep Pariwisata Hijau",
        date: "09/08/2023, 18:50 WIB",
        url: "http://travel.kompas.com/read/2023/08/09/185028827/likupang-akan-terapkan-konsep-pariwisata-hijau",
      },
    ],
  },
};

function renderTopic(topic) {
  const contentArea = document.getElementById("content-area");
  const topicData = topicContent[topic];

  contentArea.innerHTML = `
    <div class="featured-article">
        <a href="${topicData.featured.url}" target="_blank">
        <img src="${topicData.featured.image}" alt="${
    topicData.featured.title
  }" height="400" width="800"/>
        <div class="article-category">${topicData.featured.category}</div>
        <h1>${topicData.featured.title}</h1>
        </a>
        <div>
            <span class="article-author">${topicData.featured.author}</span>
            <span class="article-date">- ${topicData.featured.date}</span>
        </div>
        <p>${topicData.featured.excerpt}</p>
    </div>
    <div class="related-articles">
        ${topicData.related
          .map(
            (item) => `
            <div class="related-item">
            <a href="${item.url}" target="_blank">
                <img src="${item.image}" alt="${item.title}" height="100" width="100"/>
                <div class="related-item-content">
                    <h3>${item.title}</h3>
                    <div class="article-date">${item.date}</div>
                </div>
                </a>
            </div>
        `
          )
          .join("")}
    </div>
`;

  // Update active state
  document.querySelectorAll(".topic-navigation div").forEach((el) => {
    el.classList.remove("active");
    if (el.dataset.topic === topic) {
      el.classList.add("active");
    }
  });
}

// Initial load
renderTopic("all");

// Event listeners
document.querySelectorAll(".topic-navigation div").forEach((item) => {
  item.addEventListener("click", (e) => {
    renderTopic(e.target.dataset.topic);
  });
});

document
  .querySelector(".more-dropdown")
  .addEventListener("click", function (event) {
    // Prevent event from propagating to document
    event.stopPropagation();

    // Toggle active class to show/hide dropdown
    this.classList.toggle("active");
  });

// Close dropdown when clicking outside
document.addEventListener("click", function () {
  const dropdown = document.querySelector(".more-dropdown");
  if (dropdown.classList.contains("active")) {
    dropdown.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const url = card.getAttribute("data-url");
      if (url) {
        window.location.href = url;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-trigger");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((el) => observer.observe(el));
});

const provinceData = {
  "DKI Jakarta": {
      population: 10_700_000,
      status: "Critical",
      color: "#ef4444",
      indicators: {
          economy: "High",
          health: "At Risk",
          education: "Moderate",
      }
  },
  "West Java": {
      population: 49_900_000,
      status: "Critical",
      color: "#ef4444",
      indicators: {
          economy: "Declining",
          health: "At Risk",
          education: "Moderate",
      }
  },
  "North Sumatra": {
      population: 14_300_000,
      status: "Attention",
      color: "#eab308",
      indicators: {
          economy: "Growing",
          health: "Normal",
          education: "Good",
      }
  }
};

// Embedded GeoJSON Data
const indonesiaGeoJSON = {
  "type": "FeatureCollection",
  "features": [
      {
          "type": "Feature",
          "properties": {
              "name": "DKI Jakarta"
          },
          "geometry": {
              "type": "Polygon",
              "coordinates": [[[106.8456, -6.2088], [106.9124, -6.1763], [106.9392, -6.2383], [106.8724, -6.2708], [106.8456, -6.2088]]]
          }
      },
      {
          "type": "Feature",
          "properties": {
              "name": "West Java"
          },
          "geometry": {
              "type": "Polygon",
              "coordinates": [[[107.6191, -6.9175], [108.0792, -7.2477], [108.4267, -7.7002], [107.7539, -7.3249], [107.6191, -6.9175]]]
          }
      },
      {
          "type": "Feature",
          "properties": {
              "name": "North Sumatra"
          },
          "geometry": {
              "type": "Polygon",
              "coordinates": [[[98.6711, 3.5952], [99.0748, 3.9889], [99.4279, 4.5363], [98.7543, 4.1428], [98.6711, 3.5952]]]
          }
      }
  ]
};

const map = L.map("map").setView([-2.8, 120], 5);


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

L.geoJSON(indonesiaGeoJSON, {
  style: (feature) => {
      const provinceName = feature.properties.name;
      const provinceInfo = provinceData[provinceName] || { color: "#22c55e" };
      return {
          fillColor: provinceInfo.color || "#22c55e",
          color: "#000",
          weight: 1,
          fillOpacity: 0.7,
      };
  },
  onEachFeature: (feature, layer) => {
      const provinceName = feature.properties.name;
      const provinceInfo = provinceData[provinceName] || {};

      layer.bindTooltip(`
          <div class="text-sm">
              <strong>${provinceName}</strong>
              <br>Population: ${provinceInfo.population?.toLocaleString() || 'N/A'}
              <br>Status: ${provinceInfo.status || 'Unknown'}
          </div>
      `);

      layer.on("click", () => {
          document.getElementById("provinceInfo").innerHTML = `
              <div class="bg-white p-4 rounded-lg shadow">
                  <h3 class="text-2xl font-bold mb-3 text-gray-800">${provinceName}</h3>
                  <div class="space-y-2">
                      <p class="text-gray-600">
                          Population: ${provinceInfo.population?.toLocaleString() || 'N/A'}
                      </p>
                      <p>Status: 
                          <span style="color:${provinceInfo.color || 'gray'}" class="font-semibold">
                              ${provinceInfo.status || 'Unknown'}
                          </span>
                      </p>
                      ${provinceInfo.indicators ? `
                      <div class="mt-4">
                          <h4 class="font-semibold mb-2">Indicators:</h4>
                          <ul class="space-y-1">
                              <li>Economy: ${provinceInfo.indicators.economy}</li>
                              <li>Health: ${provinceInfo.indicators.health}</li>
                              <li>Education: ${provinceInfo.indicators.education}</li>
                          </ul>
                      </div>` : ''}
                  </div>
              </div>
          `;
      });
  }
}).addTo(map);                          