import BookDetailClient from "./BookDetailClient";

// Örnek kitap verisi
const books = [
  {
    id: "1",
    title: "Aklına Gelen Her Şeye İnanma",
    author: "Joseph Nguyen",
    narrator: "Ahmet Yılmaz",
    cover: "/book-cover.jpg",
    rating: 4.8,
    ratingCount: 2456,
    description: "Zihnimiz sürekli düşünceler üretiyor, peki hepsi doğru mu? Bu kitap, düşünce tuzaklarından kurtulmanın ve daha net düşünmenin yollarını sunuyor. Günlük hayatımızda karşılaştığımız bilişsel önyargıları tanımlayarak, daha iyi kararlar almanın ipuçlarını veriyor.",
    duration: "5 saat 12 dakika",
    releaseDate: "15 Ocak 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Kişisel Gelişim",
    price: "149,90 TL",
  },
  {
    id: "2",
    title: "Anna Karenina",
    author: "Lev Tolstoy",
    narrator: "Zeynep Koşar",
    cover: "/book-cover.jpg",
    rating: 4.9,
    ratingCount: 3256,
    description: "Rus edebiyatının en güçlü aşk ve toplum romanlarından biri.",
    duration: "8 saat 45 dakika",
    releaseDate: "10 Şubat 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Roman",
    price: "179,90 TL",
  },
  {
    id: "3",
    title: "Don Kişot",
    author: "Miguel de Cervantes",
    narrator: "Mert Fırat",
    cover: "/book-cover.jpg",
    rating: 4.7,
    ratingCount: 1890,
    description: "Dünya edebiyatının en önemli eserlerinden biri olan Don Kişot, hayali düşmanlarla savaşan bir şövalyenin trajikomik hikayesini anlatır.",
    duration: "7 saat 30 dakika",
    releaseDate: "5 Mart 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Klasik",
    price: "159,90 TL",
  },
  {
    id: "4",
    title: "Moby Dick",
    author: "Herman Melville",
    narrator: "Can Baydar",
    cover: "/book-cover.jpg",
    rating: 4.6,
    ratingCount: 1450,
    description: "Kaptan Ahab'ın beyaz balina Moby Dick'e karşı amansız mücadelesini anlatan efsanevi deniz romanı.",
    duration: "6 saat 20 dakika",
    releaseDate: "20 Nisan 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Macera",
    price: "169,90 TL",
  },
  {
    id: "5",
    title: "Savaş ve Barış",
    author: "Lev Tolstoy",
    narrator: "Deniz Şahin",
    cover: "/book-cover.jpg",
    rating: 4.9,
    ratingCount: 2750,
    description: "Napolyon'un Rusya seferini arka plan olarak alan ve Rus toplumunu derinlemesine inceleyen başyapıt.",
    duration: "10 saat 15 dakika",
    releaseDate: "12 Mayıs 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Klasik",
    price: "199,90 TL",
  },
  {
    id: "6",
    title: "Ulysses",
    author: "James Joyce",
    narrator: "Kerem Alışık",
    cover: "/book-cover.jpg",
    rating: 4.5,
    ratingCount: 980,
    description: "Modern edebiyatın başyapıtlarından biri olarak kabul edilen, Dublin'de bir günü anlatan deneysel roman.",
    duration: "9 saat 40 dakika",
    releaseDate: "16 Haziran 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Modern",
    price: "189,90 TL",
  },
  {
    id: "7",
    title: "Bülbülü Öldürmek",
    author: "Harper Lee",
    narrator: "Ece Dizdar",
    cover: "/book-cover.jpg",
    rating: 4.8,
    ratingCount: 3120,
    description: "Amerika'nın güneyinde ırkçılığa karşı mücadele eden bir avukatın hikayesi.",
    duration: "5 saat 50 dakika",
    releaseDate: "8 Temmuz 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Roman",
    price: "159,90 TL",
  },
  {
    id: "8",
    title: "Gurur ve Önyargı",
    author: "Jane Austen",
    narrator: "Hande Doğandemir",
    cover: "/book-cover.jpg",
    rating: 4.7,
    ratingCount: 2890,
    description: "Elizabeth Bennet ve Bay Darcy arasındaki gerilimli ilişkiyi anlatan romantik klasik.",
    duration: "6 saat 10 dakika",
    releaseDate: "5 Ağustos 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Romantik",
    price: "149,90 TL",
  },
  {
    id: "17",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    narrator: "Mert Fırat",
    cover: "/book-cover.jpg",
    rating: 4.9,
    ratingCount: 3450,
    description: "İnsan türünün yolculuğunu keşfedin. Bilişsel devrimden yapay zekaya, insanlığın hikayesi.",
    duration: "8 saat 30 dakika",
    releaseDate: "20 Mart 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Tarih",
    price: "189,90 TL",
  },
  {
    id: "101",
    title: "Suç ve Ceza",
    author: "Fyodor Dostoyevski",
    narrator: "Can Yılmaz",
    cover: "/book-cover.jpg",
    rating: 4.7,
    ratingCount: 2850,
    description: "Psikolojik derinliği ile dünya edebiyatının başyapıtlarından biri.",
    duration: "9 saat 15 dakika",
    releaseDate: "5 Şubat 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Klasik",
    price: "179,90 TL",
  },
  {
    id: "117",
    title: "Monte Kristo Kontu",
    author: "Alexandre Dumas",
    narrator: "Halit Ergenç",
    cover: "/book-cover.jpg",
    rating: 4.8,
    ratingCount: 3120,
    description: "Haksız yere hapsedilen bir adamın intikam hikayesi.",
    duration: "7 saat 40 dakika",
    releaseDate: "10 Nisan 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Macera",
    price: "169,90 TL",
  },
  {
    id: "13",
    title: "1984",
    author: "George Orwell",
    narrator: "Ozan Güven",
    cover: "/book-cover.jpg",
    rating: 4.9,
    ratingCount: 3450,
    description: "Distopik bir gelecekte, gözetim toplumunun karanlık yüzüyle yüzleşin.",
    duration: "6 saat 20 dakika",
    releaseDate: "15 Mart 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Bilim Kurgu",
    price: "159,90 TL",
  },
  {
    id: "14",
    title: "Küçük Prens",
    author: "Antoine de Saint-Exupéry",
    narrator: "Özge Özpirinçci",
    cover: "/book-cover.jpg",
    rating: 4.8,
    ratingCount: 4200,
    description: "Çocuklar için yazılmış yetişkinler için bir masal. Sevgi, dostluk ve yaşamın anlamı üzerine.",
    duration: "3 saat 45 dakika",
    releaseDate: "20 Şubat 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Çocuk",
    price: "129,90 TL",
  },
  {
    id: "15",
    title: "Simyacı",
    author: "Paulo Coelho",
    narrator: "Mehmet Günsür",
    cover: "/book-cover.jpg",
    rating: 4.7,
    ratingCount: 3850,
    description: "Kişisel efsanenizi keşfetme yolculuğuna çıkın. İlham verici bir kendini bulma hikayesi.",
    duration: "4 saat 30 dakika",
    releaseDate: "8 Ocak 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Kişisel Gelişim",
    price: "149,90 TL",
  },
  {
    id: "16",
    title: "Dune",
    author: "Frank Herbert",
    narrator: "Kıvanç Tatlıtuğ",
    cover: "/book-cover.jpg",
    rating: 4.9,
    ratingCount: 2920,
    description: "Bilim kurgunun başyapıtı. Arrakis gezegeninde geçen epik bir güç ve hayatta kalma mücadelesi.",
    duration: "9 saat 50 dakika",
    releaseDate: "25 Mart 2024",
    publisher: "Storya Sesli Yayınları",
    language: "Türkçe",
    category: "Bilim Kurgu",
    price: "189,90 TL",
  }
];

// Kitap ID'lerine göre adlar - Sistemde henüz olmayan kitaplar için
const bookTitles: {[key: string]: string} = {
  "104": "Aşk ve Gurur",
  "105": "Dracula",
  "106": "Sherlock Holmes'un Maceraları",
  "107": "Frankenstein",
  "109": "Faust",
  "111": "Oliver Twist", 
  "112": "Madame Bovary",
  "114": "Robinson Crusoe",
  "115": "Gulliver'in Gezileri",
  "116": "Candide",
  "118": "Alice Harikalar Diyarında",
  "119": "Dorian Gray'in Portresi",
  "120": "Tom Sawyer'ın Maceraları"
};

export async function generateStaticParams() {
  // Yorum satırını kaldırıp, alternatif yöntemi kullanıyoruz
  // Tüm kitap ID'lerini döndür yerine, tüm olası ID'leri kapsayan bir dizi oluşturuyoruz
  const allPossibleIds: { id: string }[] = [];
  
  // Normal ID'ler (1-20)
  for (let i = 1; i <= 20; i++) {
    allPossibleIds.push({ id: i.toString() });
  }
  
  // Özel ID'ler (100-150 arası)
  for (let i = 100; i <= 150; i++) {
    allPossibleIds.push({ id: i.toString() });
  }
  
  // Özel olarak belirtilmiş ID'ler
  const specialIds = ["17", "101", "104", "105", "106", "107", "109", "111", "112", "114", "115", "116", "117", "118", "119", "120"];
  specialIds.forEach(id => {
    if (!allPossibleIds.some(item => item.id === id)) {
      allPossibleIds.push({ id });
    }
  });
  
  return allPossibleIds;
}

export default function BookDetail({ params }: { params: { id: string } }) {
  // Books dizisinde zaten tanımlı olan kitapları bul
  let book = books.find((b) => b.id === params.id);
  
  // Eğer kitap bulunamazsa ve ID "15" (Simyacı) ise, Simyacı'yı göster
  if (!book && params.id === "15") {
    book = {
      id: "15",
      title: "Simyacı",
      author: "Paulo Coelho",
      narrator: "Mehmet Günsür",
      cover: "/book-cover.jpg",
      rating: 4.7,
      ratingCount: 3850,
      description: "Kişisel efsanenizi keşfetme yolculuğuna çıkın. İlham verici bir kendini bulma hikayesi.",
      duration: "4 saat 30 dakika",
      releaseDate: "8 Ocak 2024",
      publisher: "Storya Sesli Yayınları",
      language: "Türkçe",
      category: "Kişisel Gelişim",
      price: "149,90 TL",
    };
  }
  
  // Eğer kitap hala bulunamadıysa
  if (!book) {
    // Kitap adı sözlüğümüzden adı bul, yoksa "Kitap #ID" formatında göster
    const bookTitle = bookTitles[params.id] || `Kitap ${params.id}`;
    
    // Kitabı oluştur
    book = {
      id: params.id,
      title: bookTitle,
      author: "Klasik Yazar",
      narrator: "Profesyonel Seslendirmen",
      cover: "/book-cover.jpg",
      rating: 4.5,
      ratingCount: 1000,
      description: "Bu kitabın sesli versiyonu yakında Storya'da olacak! Koleksiyonumuza eklediğimiz yeni içerikler için bizi takip etmeye devam edin.",
      duration: "Yaklaşık 5-6 saat",
      releaseDate: "Çok Yakında",
      publisher: "Storya Sesli Yayınları",
      language: "Türkçe",
      category: "Yeni Eklenecek",
      price: "149,90 TL",
    };
    
    // Kullanıcıyı uyarmak için konsola bilgi bas
    console.log(`ID: ${params.id} olan "${bookTitle}" kitabı henüz mevcut değil.`);
  }
  
  return <BookDetailClient book={book} />;
} 