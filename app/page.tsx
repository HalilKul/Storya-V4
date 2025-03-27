"use client";

import { Play, Volume2, BookOpen, Headphones, Mic2, Zap, Smartphone, Globe2, Link as LinkIcon, Phone, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Dancing_Script } from 'next/font/google';
import Link from "next/link";

const dancingScript = Dancing_Script({ subsets: ['latin'] });

// Book categories data
const categories = [
  {
    id: "bestsellers",
    title: "En Çok Satan Sesli Kitaplar",
    books: [
      {
        id: 1,
        title: "Sefiller",
        author: "Victor Hugo",
        cover: "",
        description: "19. yüzyıl Fransa'sında adalet, merhamet ve sevginin güçlü hikayesi.",
      },
      {
        id: 2,
        title: "Anna Karenina",
        author: "Lev Tolstoy",
        cover: "",
        description: "Rus edebiyatının en güçlü aşk ve toplum romanlarından biri.",
      },
      {
        id: 3,
        title: "Don Kişot",
        author: "Miguel de Cervantes",
        cover: "",
        description: "Şövalye romanlarının parodisi, modern romanın ilk örneği sayılan başyapıt.",
      },
      {
        id: 4,
        title: "Moby Dick",
        author: "Herman Melville",
        cover: "",
        description: "Beyaz balinayı avlayan Kaptan Ahab'ın takıntı ve intikam hikayesi.",
      },
      {
        id: 5,
        title: "Savaş ve Barış",
        author: "Lev Tolstoy",
        cover: "",
        description: "Napolyon'un Rusya seferini konu alan, tarih ve insan ruhunu işleyen başyapıt.",
      },
      {
        id: 6,
        title: "Ulysses",
        author: "James Joyce",
        cover: "",
        description: "Modern edebiyatın dönüm noktası, bilinç akışı tekniğinin en önemli örneği.",
      },
      {
        id: 7,
        title: "Bülbülü Öldürmek",
        author: "Harper Lee",
        cover: "",
        description: "Amerikan Güneyi'nde ırkçılık ve adalet temalı, Pulitzer ödüllü roman.",
      },
    ],
  },
  {
    id: "trending",
    title: "Yeni ve Trend E-Kitaplar",
    books: [
      {
        id: 8,
        title: "Gurur ve Önyargı",
        author: "Jane Austen",
        cover: "",
        description: "19. yüzyıl İngiltere'sinde sınıf ve cinsiyet rollerini işleyen romantik başyapıt.",
      },
      {
        id: 9,
        title: "Madam Bovary",
        author: "Gustave Flaubert",
        cover: "",
        description: "Taşra hayatından sıkılan Emma Bovary'nin hüzünlü ve karanlık hikayesi.",
      },
      {
        id: 10,
        title: "Büyük Gatsby",
        author: "F. Scott Fitzgerald",
        cover: "",
        description: "1920'ler Amerika'sında Amerikan rüyasının ve dekadansın sembolü olan Jay Gatsby'nin hikayesi.",
      },
      {
        id: 11,
        title: "Suç ve Ceza",
        author: "Fyodor Dostoyevski",
        cover: "",
        description: "Psikolojik derinliği ile dünya edebiyatının başyapıtlarından biri.",
      },
      {
        id: 12,
        title: "Yüzüklerin Efendisi",
        author: "J.R.R. Tolkien",
        cover: "",
        description: "Orta Dünya'nın destansı hikayesi. Fantastik edebiyatın başyapıtı.",
      },
    ],
  },
  {
    id: "favorites",
    title: "Hayranların Favori Sesli Kitapları",
    books: [
      {
        id: 13,
        title: "1984",
        author: "George Orwell",
        cover: "",
        description: "Distopik bir gelecekte, gözetim toplumunun karanlık yüzüyle yüzleşin.",
      },
      {
        id: 14,
        title: "Küçük Prens",
        author: "Antoine de Saint-Exupéry",
        cover: "",
        description: "Çocuklar için yazılmış yetişkinler için bir masal. Sevgi, dostluk ve yaşamın anlamı üzerine.",
      },
      {
        id: 15,
        title: "Simyacı",
        author: "Paulo Coelho",
        cover: "",
        description: "Kişisel efsanenizi keşfetme yolculuğuna çıkın. İlham verici bir kendini bulma hikayesi.",
      },
      {
        id: 16,
        title: "Dune",
        author: "Frank Herbert",
        cover: "",
        description: "Bilim kurgunun başyapıtı. Arrakis gezegeninde geçen epik bir güç ve hayatta kalma mücadelesi.",
      },
      {
        id: 17,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        cover: "",
        description: "İnsan türünün yolculuğunu keşfedin. Bilişsel devrimden yapay zekaya, insanlığın hikayesi.",
      },
    ],
  },
];

// Authors data
const authors = [
  {
    id: 1,
    name: "Yuval Noah Harari",
    photo: "",
    description: "Sapiens ve Homo Deus'un yazarı, dünya çapında çok satan tarihçi",
    books: 4,
  },
  {
    id: 2,
    name: "Paulo Coelho",
    photo: "",
    description: "Simyacı'nın yazarı, dünyaca ünlü Brezilyalı yazar",
    books: 12,
  },
  {
    id: 3,
    name: "George Orwell",
    photo: "",
    description: "1984 ve Hayvan Çiftliği'nin yazarı, distopya türünün öncüsü",
    books: 6,
  },
  {
    id: 4,
    name: "Frank Herbert",
    photo: "",
    description: "Dune serisinin yaratıcısı, bilim kurgu edebiyatının ustası",
    books: 8,
  },
  {
    id: 5,
    name: "Fyodor Dostoyevski",
    photo: "",
    description: "Rus edebiyatının dev ismi, psikolojik romanın öncüsü",
    books: 15,
  },
  {
    id: 6,
    name: "J.R.R. Tolkien",
    photo: "",
    description: "Yüzüklerin Efendisi'nin yaratıcısı, fantastik edebiyatın babası",
    books: 10,
  },
];

const features = [
  {
    icon: <Mic2 className="h-6 w-6" />,
    title: "Yapay Zeka Destekli Seslendirme",
    description: "En gelişmiş AI ses teknolojisi ile doğal ve akıcı dinleme deneyimi",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Gerçek Zamanlı Sesli Kitap Üretimi",
    description: "Anında sesli kitap dönüşümü ve erişim imkanı",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Çoklu Cihaz Uyumu",
    description: "Tüm cihazlarınızda kesintisiz dinleme deneyimi",
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: "Farklı Ses & Dil Seçenekleri",
    description: "Çoklu dil desteği ve kişiselleştirilebilir ses seçenekleri",
  },
  {
    icon: <LinkIcon className="h-6 w-6" />,
    title: "E-Ticaret Platformlarına Anında Entegrasyon",
    description: "Tüm büyük e-ticaret platformlarıyla sorunsuz entegrasyon",
  },
];

export default function Home() {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);
  const [hoveredAuthor, setHoveredAuthor] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("bestsellers");
  const booksScrollRef = useRef<HTMLDivElement>(null);
  const authorsScrollRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left
  
  // Otomatik kitap kaydırma animasyonu
  useEffect(() => {
    const scrollContainer = booksScrollRef.current;
    if (!scrollContainer) return;
    
    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.8; // Piksel/kare hızı
    
    const scroll = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed * scrollDirection;
        
        // Kenarlara ulaşıldığında yön değiştir
        if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          setScrollDirection(-1);
        } else if (scrollPosition <= 0) {
          setScrollDirection(1);
        }
        
        scrollContainer.scrollLeft = scrollPosition;
        animationFrameId = requestAnimationFrame(scroll);
      }
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollDirection]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-medium text-blue-600">Storya</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Kitapları Dinlemenin Yeni Yolu: Storya
            </h1>
            <p className="text-xl leading-8 text-gray-600 mb-8">
              Satın aldığın kitapların sesli versiyonuna tek tıkla eriş. Her yerde, her zaman, seninle.
            </p>
            <div className="flex items-center gap-x-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="https://lab.lunaarvision.com/m/paulo-coelho">
                  <Headphones className="mr-2 h-5 w-5" />
                  Hemen Deneyimle
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="w-full h-[600px] bg-gray-200 flex items-center justify-center"
              >
                <span className="text-gray-500 text-lg">Hero Görsel - 1920x800px</span>
              </div>
              {/* Floating UI Demo */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 rounded-lg p-3">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Şu An Çalıyor</h3>
                    <p className="text-sm text-gray-600">Sapiens - Yuval Noah Harari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Books Section with Categories */}
      <div className="bg-white py-24">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 px-4">Keşfet</h2>
          {/* Category Tabs */}
          <div className="flex justify-center gap-3 mb-8 px-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Books Grid with Horizontal Scroll */}
          <div className="relative">
            <div 
              ref={booksScrollRef}
              className="overflow-x-auto scrollbar-hide" 
              onMouseEnter={() => cancelAnimationFrame(0)} // Animasyonu durdur
              onMouseLeave={() => {}} // Geçici olarak yeniden başlat
            >
              <div className="flex gap-4 px-8 pb-8 min-w-max">
                {categories
                  .find((cat) => cat.id === activeCategory)
                  ?.books.map((book) => (
                    <div
                      key={book.id}
                      className="relative flex-none w-[176px] transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
                      onMouseEnter={() => setHoveredBook(book.id)}
                      onMouseLeave={() => setHoveredBook(null)}
                    >
                      <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">Kitap {book.id}<br/>176x235px</span>
                        </div>
                        {hoveredBook === book.id && (
                          <div className="absolute inset-0 bg-black/80 p-4 flex flex-col justify-between text-white transition-opacity duration-200">
                            <div>
                              <h3 className="text-base font-semibold mb-1">{book.title}</h3>
                              <p className="text-sm opacity-80 mb-1">{book.author}</p>
                            </div>
                            <div>
                              <p className="text-xs leading-tight mb-4">{book.description}</p>
                              <Button
                                size="sm"
                                className="w-full bg-white text-black hover:bg-gray-100 flex items-center justify-center"
                              >
                                <Play className="h-4 w-4 mr-1" />
                                Dinle
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mt-3">
                        <h3 className="font-semibold text-sm text-gray-900 truncate">{book.title}</h3>
                        <p className="text-xs text-gray-600 truncate">{book.author}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/* Gradient overlays for scroll indication */}
            <div className="absolute left-0 top-0 bottom-8 w-32 bg-gradient-to-r from-white pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-8 w-32 bg-gradient-to-l from-white pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Authors Section */}
      <div className="bg-white pb-24">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 px-4">Sevilen Yazarlar</h2>
          
          {/* Authors Grid with Horizontal Scroll */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 px-8 pb-8 min-w-max">
                {authors.map((author) => (
                  <div
                    key={author.id}
                    className="relative flex-none w-[176px] transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
                    onMouseEnter={() => setHoveredAuthor(author.id)}
                    onMouseLeave={() => setHoveredAuthor(null)}
                  >
                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg bg-gray-100">
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Yazar {author.id}<br/>176x176px</span>
                      </div>
                      {hoveredAuthor === author.id && (
                        <div className="absolute inset-0 bg-black/70 p-4 flex flex-col justify-end text-white transition-opacity duration-200">
                          <h3 className="text-sm font-semibold mb-1">{author.name}</h3>
                          <p className="text-xs leading-tight mb-3">{author.description}</p>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-gray-300">{author.books} Sesli Kitap</span>
                          </div>
                          <Button
                            size="sm"
                            className="w-full bg-white text-black hover:bg-gray-100"
                          >
                            <Play className="h-4 w-4 mr-1" />
                            Keşfet
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="mt-3">
                      <h3 className="font-semibold text-sm text-gray-900 truncate">{author.name}</h3>
                      <p className="text-xs text-gray-600 truncate">{author.books} Sesli Kitap</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Gradient overlays for scroll indication */}
            <div className="absolute left-0 top-0 bottom-8 w-32 bg-gradient-to-r from-white pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-8 w-32 bg-gradient-to-l from-white pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Time Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl w-[820px] h-[580px] mx-auto overflow-hidden">
            <div className="grid grid-cols-2 h-full">
              {/* Content Side */}
              <div className="p-12 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-12">
                  Zaman Yok Diyenlere Storya Var
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mb-8">
                  Kitap okumaya zaman bulamıyor musun?
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600">
                    Türkiye'de kitap okuma oranı %0.5… Ama sesli kitaplara olan ilgi hızla artıyor.
                  </p>
                  <p className="text-lg text-gray-600">
                    Yolda, spor yaparken, evde… Her yerde dinle.
                  </p>
                </div>
              </div>
              {/* Image Side */}
              <div className="relative">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Yolda Dinleme<br/>360x250px</span>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Mutfakta Dinleme<br/>360x250px</span>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg col-span-2">
                    <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Metroda Dinleme<br/>760x250px</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards Container */}
          <div className="flex gap-10 justify-center mt-10">
            {/* Meet Storya Section */}
            <div className="bg-white rounded-3xl shadow-xl w-[400px] h-[620px] overflow-hidden">
              <div className="p-12 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-12">
                  Storya'yla Tanış!
                </h2>
                <div className="space-y-6 mb-12">
                  <p className="text-lg text-gray-600">
                    Kitabı al, dinlemeye başla.
                  </p>
                  <p className="text-lg text-gray-600">
                    Tek tıkla sesli versiyona ulaş. Beklemeden, ayrı uygulama olmadan.
                  </p>
                  <p className="text-lg text-gray-600">
                    AI destekli doğal ses kalitesi. Cihaz fark etmeksizin dinleme.
                  </p>
                </div>
                {/* Demo QR Section */}
                <div className="mt-auto">
                  <div className="bg-gray-50 rounded-2xl p-6 text-center">
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Mini Demo - Simyacı</h3>
                    <div className="w-32 h-32 mx-auto rounded-xl overflow-hidden shadow-sm bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">Simyacı<br/>128x128px</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Where is Storya Section */}
            <div className="bg-white rounded-3xl shadow-xl w-[400px] h-[620px] overflow-hidden">
              <div className="p-12 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-12">
                  Sen Neredeysen Storya Orada!
                </h2>
                <div className="space-y-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Yolda</h3>
                    <p className="text-lg text-gray-600">
                      Trafikte podcast gibi dinle
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Evde</h3>
                    <p className="text-lg text-gray-600">
                      Ev işi yaparken bilgiye kulak ver
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Kütüphanede</h3>
                    <p className="text-lg text-gray-600">
                      Görme engelliler için erişilebilirlik
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">E-ticaret sitesinde</h3>
                    <p className="text-lg text-gray-600">
                      Kitap alırken sesli versiyona tek tık
                    </p>
                  </div>
                </div>
                {/* Image Section */}
                <div className="mt-auto">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Storya Her Yerde<br/>400x160px</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Storya Features Section */}
          <div className="bg-white rounded-3xl shadow-xl w-[820px] h-[580px] mx-auto mt-10 overflow-hidden">
            <div className="p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-12">
                Storya Özellikleri
              </h2>
              <div className="grid grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-3xl text-gray-700 leading-relaxed mb-6">
            "Her hikaye bir yolculuktur; dinlediğinizde, bu yolculuğa başka bir boyut katarsınız."
          </blockquote>
          <cite className={`${dancingScript.className} text-2xl text-gray-600 inline-block`}>— Neil Gaiman</cite>
        </div>
      </div>

      {/* Modern Footer Section */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Kitaplarını şimdi dinlemeye başla.
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Storya'yı deneyimle ve kitaplarınla yeni bir bağ kur.
            </p>
            <div className="inline-flex gap-4 p-1 bg-gray-800/50 backdrop-blur-sm rounded-full">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full">
                <Volume2 className="mr-2 h-5 w-5" />
                Demo Dinle
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-gray-800 rounded-full">
                <Phone className="mr-2 h-5 w-5" />
                Bize Ulaşın
              </Button>
            </div>
          </div>

          {/* Footer Content */}
          <div className="grid grid-cols-4 gap-8 pb-12 border-b border-gray-800">
            <div>
              <h3 className="font-semibold text-white mb-4">Ürün</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Özellikler</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fiyatlandırma</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Şirket</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kariyer</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">İletişim</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Kaynaklar</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dokümantasyon</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Yardım Merkezi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Topluluk</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SSS</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Yasal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gizlilik Politikası</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kullanım Şartları</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">KVKK</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Çerez Politikası</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex justify-center pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Storya. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}