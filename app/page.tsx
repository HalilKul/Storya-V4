"use client";

import { Play, Volume2, BookOpen, Headphones, Mic2, Zap, Smartphone, Globe2, Link as LinkIcon, Phone, Building2, Twitter, Instagram, Facebook, MapPin, Mail, CloudDownload, Sparkles, User } from "lucide-react";
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
        id: "1",
        title: "Sefiller",
        author: "Victor Hugo",
        cover: "",
        description: "19. yüzyıl Fransa'sında adalet, merhamet ve sevginin güçlü hikayesi.",
      },
      {
        id: "2",
        title: "Anna Karenina",
        author: "Lev Tolstoy",
        cover: "",
        description: "Rus edebiyatının en güçlü aşk ve toplum romanlarından biri.",
      },
      {
        id: "3",
        title: "Don Kişot",
        author: "Miguel de Cervantes",
        cover: "",
        description: "Şövalye romanlarının parodisi, modern romanın ilk örneği sayılan başyapıt.",
      },
      {
        id: "4",
        title: "Moby Dick",
        author: "Herman Melville",
        cover: "",
        description: "Beyaz balinayı avlayan Kaptan Ahab'ın takıntı ve intikam hikayesi.",
      },
      {
        id: "5",
        title: "Savaş ve Barış",
        author: "Lev Tolstoy",
        cover: "",
        description: "Napolyon'un Rusya seferini konu alan, tarih ve insan ruhunu işleyen başyapıt.",
      },
      {
        id: "6",
        title: "Ulysses",
        author: "James Joyce",
        cover: "",
        description: "Modern edebiyatın dönüm noktası, bilinç akışı tekniğinin en önemli örneği.",
      },
      {
        id: "7",
        title: "Bülbülü Öldürmek",
        author: "Harper Lee",
        cover: "",
        description: "Amerikan Güneyi'nde ırkçılık ve adalet temalı, Pulitzer ödüllü roman.",
      },
      {
        id: "101",
        title: "Suç ve Ceza",
        author: "Fyodor Dostoyevski",
        cover: "",
        description: "Psikolojik derinliği ile dünya edebiyatının başyapıtlarından biri.",
      },
      {
        id: "104",
        title: "Aşk ve Gurur",
        author: "Jane Austen",
        cover: "",
        description: "19. yüzyıl İngiltere'sinde sınıf ve cinsiyet rollerini işleyen romantik başyapıt.",
      },
      {
        id: "105",
        title: "Dracula",
        author: "Bram Stoker",
        cover: "",
        description: "Modern vampir hikayelerinin atası olan gotik korku romanı.",
      },
      {
        id: "106",
        title: "Sherlock Holmes'un Maceraları",
        author: "Arthur Conan Doyle",
        cover: "",
        description: "Ünlü dedektifin çözdüğü gizemli vakaların hikayesi.",
      },
    ],
  },
  {
    id: "trending",
    title: "Yeni ve Trend E-Kitaplar",
    books: [
      {
        id: "8",
        title: "Gurur ve Önyargı",
        author: "Jane Austen",
        cover: "",
        description: "19. yüzyıl İngiltere'sinde sınıf ve cinsiyet rollerini işleyen romantik başyapıt.",
      },
      {
        id: "9",
        title: "Madam Bovary",
        author: "Gustave Flaubert",
        cover: "",
        description: "Taşra hayatından sıkılan Emma Bovary'nin hüzünlü ve karanlık hikayesi.",
      },
      {
        id: "10",
        title: "Büyük Gatsby",
        author: "F. Scott Fitzgerald",
        cover: "",
        description: "1920'ler Amerika'sında Amerikan rüyasının ve dekadansın sembolü olan Jay Gatsby'nin hikayesi.",
      },
      {
        id: "11",
        title: "Suç ve Ceza",
        author: "Fyodor Dostoyevski",
        cover: "",
        description: "Psikolojik derinliği ile dünya edebiyatının başyapıtlarından biri.",
      },
      {
        id: "12",
        title: "Yüzüklerin Efendisi",
        author: "J.R.R. Tolkien",
        cover: "",
        description: "Orta Dünya'nın destansı hikayesi. Fantastik edebiyatın başyapıtı.",
      },
      {
        id: "107",
        title: "Frankenstein",
        author: "Mary Shelley",
        cover: "",
        description: "Modern bilim kurgunun öncüsü, yaratıcı ve yaratılan arasındaki ilişkiyi sorgulayan eser.",
      },
      {
        id: "109",
        title: "Faust",
        author: "Johann Wolfgang von Goethe",
        cover: "",
        description: "Bilgi uğruna ruhunu şeytana satan bir bilim adamının trajedisi.",
      },
      {
        id: "111",
        title: "Oliver Twist",
        author: "Charles Dickens",
        cover: "",
        description: "Yetimhaneden kaçan ve Londra'nın karanlık sokaklarında yaşam mücadelesi veren bir çocuğun hikayesi.",
      },
      {
        id: "112",
        title: "Madame Bovary",
        author: "Gustave Flaubert",
        cover: "",
        description: "Taşra hayatından sıkılan Emma Bovary'nin hüzünlü ve karanlık hikayesi.",
      },
      {
        id: "114",
        title: "Robinson Crusoe",
        author: "Daniel Defoe",
        cover: "",
        description: "Issız bir adada hayatta kalma mücadelesi veren bir denizcinin hikayesi.",
      },
    ],
  },
  {
    id: "favorites",
    title: "Hayranların Favori Sesli Kitapları",
    books: [
      {
        id: "13",
        title: "1984",
        author: "George Orwell",
        cover: "",
        description: "Distopik bir gelecekte, gözetim toplumunun karanlık yüzüyle yüzleşin.",
      },
      {
        id: "14",
        title: "Küçük Prens",
        author: "Antoine de Saint-Exupéry",
        cover: "",
        description: "Çocuklar için yazılmış yetişkinler için bir masal. Sevgi, dostluk ve yaşamın anlamı üzerine.",
      },
      {
        id: "15",
        title: "Simyacı",
        author: "Paulo Coelho",
        cover: "",
        description: "Kişisel efsanenizi keşfetme yolculuğuna çıkın. İlham verici bir kendini bulma hikayesi.",
      },
      {
        id: "16",
        title: "Dune",
        author: "Frank Herbert",
        cover: "",
        description: "Bilim kurgunun başyapıtı. Arrakis gezegeninde geçen epik bir güç ve hayatta kalma mücadelesi.",
      },
      {
        id: "17",
        title: "Sapiens",
        author: "Yuval Noah Harari",
        cover: "",
        description: "İnsan türünün yolculuğunu keşfedin. Bilişsel devrimden yapay zekaya, insanlığın hikayesi.",
      },
      {
        id: "115",
        title: "Gulliver'in Gezileri",
        author: "Jonathan Swift",
        cover: "",
        description: "Fantastik diyarlara yolculuk eden bir gemicinin gözünden insanlığın ve toplumun eleştirisi.",
      },
      {
        id: "116",
        title: "Candide",
        author: "Voltaire",
        cover: "",
        description: "İyimserlik felsefesini alaycı bir dille eleştiren felsefi hikaye.",
      },
      {
        id: "117",
        title: "Monte Kristo Kontu",
        author: "Alexandre Dumas",
        cover: "",
        description: "Haksız yere hapsedilen bir adamın intikam hikayesi.",
      },
      {
        id: "118",
        title: "Alice Harikalar Diyarında",
        author: "Lewis Carroll",
        cover: "",
        description: "Tuhaf yaratıklar ve mantıksız olaylarla dolu fantastik bir dünyaya düşen küçük bir kızın maceraları.",
      },
      {
        id: "119",
        title: "Dorian Gray'in Portresi",
        author: "Oscar Wilde",
        cover: "",
        description: "Gençliğini korumak için ruhunu satan bir adamın çöküş hikayesi.",
      },
      {
        id: "120",
        title: "Tom Sawyer'ın Maceraları",
        author: "Mark Twain",
        cover: "",
        description: "Mississippi Nehri kıyısında büyüyen yaramaz bir çocuğun maceraları.",
      },
    ],
  },
];

// Authors data
const authors = [
  {
    id: 1,
    name: "Fyodor Dostoyevski",
    photo: "",
    description: "Rus edebiyatının dev ismi, psikolojik romanın öncüsü",
    books: 15,
  },
  {
    id: 2,
    name: "Victor Hugo",
    photo: "",
    description: "Fransız edebiyatının ünlü yazarı, Sefiller ve Notre Dame'ın Kamburu'nun yaratıcısı",
    books: 12,
  },
  {
    id: 3,
    name: "Lev Tolstoy",
    photo: "",
    description: "Rus gerçekçi edebiyatının ustası, Savaş ve Barış ile Anna Karenina'nın yazarı",
    books: 14,
  },
  {
    id: 4,
    name: "Jane Austen",
    photo: "",
    description: "İngiliz edebiyatının önemli kadın yazarlarından, romantik kurgu ustası",
    books: 7,
  },
  {
    id: 5,
    name: "Bram Stoker",
    photo: "",
    description: "Gotik korku edebiyatının öncüsü, Dracula'nın yazarı",
    books: 5,
  },
  {
    id: 6,
    name: "Arthur Conan Doyle",
    photo: "",
    description: "Sherlock Holmes'un yaratıcısı, dedektif ve macera öykülerinin ustası",
    books: 20,
  },
  {
    id: 7,
    name: "Mary Shelley",
    photo: "",
    description: "Modern bilim kurgunun öncüsü, Frankenstein'ın yazarı",
    books: 6,
  },
  {
    id: 8,
    name: "Herman Melville",
    photo: "",
    description: "Amerikan edebiyatının sembol isimlerinden, Moby Dick'in yazarı",
    books: 9,
  },
  {
    id: 9,
    name: "Johann Wolfgang von Goethe",
    photo: "",
    description: "Alman edebiyatının dehası, şair, romancı ve düşünür",
    books: 12,
  },
  {
    id: 10,
    name: "Charles Dickens",
    photo: "",
    description: "Viktorya dönemi İngiliz edebiyatının ünlü yazarı, toplumsal gerçekçiliğin ustası",
    books: 25,
  },
  {
    id: 11,
    name: "Gustave Flaubert",
    photo: "",
    description: "Fransız gerçekçi edebiyatının temsilcisi, Madam Bovary'nin yazarı",
    books: 8,
  },
  {
    id: 12,
    name: "Miguel de Cervantes",
    photo: "",
    description: "İspanyol edebiyatının babası, Don Kişot'un yazarı",
    books: 10,
  },
  {
    id: 13,
    name: "Daniel Defoe",
    photo: "",
    description: "İngiliz roman türünün öncülerinden, Robinson Crusoe'nun yazarı",
    books: 7,
  },
  {
    id: 14,
    name: "Jonathan Swift",
    photo: "",
    description: "İrlandalı yazar ve hiciv ustası, Gulliver'in Gezileri'nin yazarı",
    books: 6,
  },
  {
    id: 15,
    name: "Voltaire",
    photo: "",
    description: "Fransız Aydınlanma çağının düşünürü ve yazarı, Candide'in yaratıcısı",
    books: 9,
  },
  {
    id: 16,
    name: "Alexandre Dumas",
    photo: "",
    description: "Fransız romantik edebiyatının macera ustası, Monte Kristo Kontu'nun yazarı",
    books: 18,
  },
  {
    id: 17,
    name: "Lewis Carroll",
    photo: "",
    description: "İngiliz çocuk edebiyatının ustası, Alice Harikalar Diyarında'nın yazarı",
    books: 5,
  },
  {
    id: 18,
    name: "Oscar Wilde",
    photo: "",
    description: "İrlandalı şair, oyun yazarı ve romancı, Dorian Gray'in Portresi'nin yazarı",
    books: 11,
  },
  {
    id: 19,
    name: "Mark Twain",
    photo: "",
    description: "Amerikan edebiyatının babası, Tom Sawyer ve Huckleberry Finn'in yaratıcısı",
    books: 14,
  },
  {
    id: 20,
    name: "Nathaniel Hawthorne",
    photo: "",
    description: "Amerikan romantik edebiyatının temsilcisi, Kızıl Damga'nın yazarı",
    books: 8,
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
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);
  const [hoveredAuthor, setHoveredAuthor] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("favorites"); // Başlangıçta favori kitaplar kategorisini aktif et
  const booksScrollRef = useRef<HTMLDivElement>(null);
  const authorsScrollRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left
  const [isScrollPaused, setIsScrollPaused] = useState(false);
  const scrollPositionRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  
  // Scroll reveal animation
  const [isVisible, setIsVisible] = useState({
    hero: false,
    books: false,
    authors: false,
    time: false,
    info: false,
    features: false,
    quote: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [
      "hero",
      "books",
      "authors",
      "time",
      "info",
      "features",
      "quote"
    ];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);
  
  // Sayfa yükleme durumunu takip et
  useEffect(() => {
    // Sayfa yüklendiğinde tamamen yüklenmiş durumuna geç
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => setIsFullyLoaded(true));
      
      // Sayfa zaten yüklendiyse durumu güncelle
      if (document.readyState === 'complete') {
        setIsFullyLoaded(true);
      }
    }
    
    // 1 saniye sonra yüklendi olarak işaretle (yedek yöntem)
    const timer = setTimeout(() => setIsFullyLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Kategori değiştiğinde kaydırma pozisyonunu sıfırla
  useEffect(() => {
    if (booksScrollRef.current) {
      booksScrollRef.current.scrollLeft = 0;
      scrollPositionRef.current = 0;
    }
  }, [activeCategory]);
  
  // Otomatik kitap kaydırma animasyonu
  useEffect(() => {
    const scrollContainer = booksScrollRef.current;
    if (!scrollContainer) return;
    
    // Başlangıç pozisyonunu mevcut scroll pozisyonundan al
    scrollPositionRef.current = scrollContainer.scrollLeft;
    const scrollSpeed = 0.3; // daha yavaş kaydırma
    
    const scroll = () => {
      if (scrollContainer && !isScrollPaused) {
        // Sadece sağdan sola hareket ettir
        scrollPositionRef.current += scrollSpeed;
        
        // Kenara ulaşıldığında başa dön, ama bunu kullanıcı görmeden yap
        if (scrollPositionRef.current >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 10) {
          // Pozisyonu direkt sıfırla, animasyonu durdurmadan
          scrollPositionRef.current = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          // Scroll pozisyonunu uygula
          scrollContainer.scrollLeft = scrollPositionRef.current;
        }
      }
      animationFrameIdRef.current = requestAnimationFrame(scroll);
    };
    
    animationFrameIdRef.current = requestAnimationFrame(scroll);
    
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [isScrollPaused]);

  // Yazarlar için otomatik kaydırma animasyonu
  const authorScrollPositionRef = useRef(0);
  const authorAnimationFrameIdRef = useRef<number | null>(null);
  const [isAuthorScrollPaused, setIsAuthorScrollPaused] = useState(false);
  
  useEffect(() => {
    const scrollContainer = authorsScrollRef.current;
    if (!scrollContainer) return;
    
    // Başlangıç pozisyonunu mevcut scroll pozisyonundan al
    authorScrollPositionRef.current = scrollContainer.scrollLeft;
    const scrollSpeed = 0.3; // daha yavaş kaydırma
    
    const scroll = () => {
      if (scrollContainer && !isAuthorScrollPaused) {
        // Sadece sağdan sola hareket ettir
        authorScrollPositionRef.current += scrollSpeed;
        
        // Kenara ulaşıldığında başa dön, ama bunu kullanıcı görmeden yap
        if (authorScrollPositionRef.current >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 10) {
          // Pozisyonu direkt sıfırla, animasyonu durdurmadan
          authorScrollPositionRef.current = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          // Scroll pozisyonunu uygula
          scrollContainer.scrollLeft = authorScrollPositionRef.current;
        }
      }
      authorAnimationFrameIdRef.current = requestAnimationFrame(scroll);
    };
    
    authorAnimationFrameIdRef.current = requestAnimationFrame(scroll);
    
    return () => {
      if (authorAnimationFrameIdRef.current) {
        cancelAnimationFrame(authorAnimationFrameIdRef.current);
      }
    };
  }, [isAuthorScrollPaused]);

  // Mouse işlevleri - kitaplar için
  const handleMouseEnter = () => {
    setIsScrollPaused(true);
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsScrollPaused(false);
    if (!animationFrameIdRef.current) {
      const scroll = () => {
        const scrollContainer = booksScrollRef.current;
        if (scrollContainer && !isScrollPaused) {
          // Sağdan sola hareket
          scrollPositionRef.current += 0.3;
          
          // Kenara ulaşıldığında başa dön, ama bunu kullanıcı görmeden yap
          if (scrollPositionRef.current >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 10) {
            // Pozisyonu direkt sıfırla, animasyonu durdurmadan
            scrollPositionRef.current = 0;
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft = scrollPositionRef.current;
          }
        }
        animationFrameIdRef.current = requestAnimationFrame(scroll);
      };
      
      animationFrameIdRef.current = requestAnimationFrame(scroll);
    }
  };

  // Mouse işlevleri - yazarlar için
  const handleAuthorMouseEnter = () => {
    setIsAuthorScrollPaused(true);
    if (authorAnimationFrameIdRef.current) {
      cancelAnimationFrame(authorAnimationFrameIdRef.current);
      authorAnimationFrameIdRef.current = null;
    }
  };

  const handleAuthorMouseLeave = () => {
    setIsAuthorScrollPaused(false);
    if (!authorAnimationFrameIdRef.current) {
      const scroll = () => {
        const scrollContainer = authorsScrollRef.current;
        if (scrollContainer && !isAuthorScrollPaused) {
          // Sağdan sola hareket
          authorScrollPositionRef.current += 0.3;
          
          // Kenara ulaşıldığında başa dön, ama bunu kullanıcı görmeden yap
          if (authorScrollPositionRef.current >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 10) {
            // Pozisyonu direkt sıfırla, animasyonu durdurmadan
            authorScrollPositionRef.current = 0;
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft = authorScrollPositionRef.current;
          }
        }
        authorAnimationFrameIdRef.current = requestAnimationFrame(scroll);
      };
      
      authorAnimationFrameIdRef.current = requestAnimationFrame(scroll);
    }
  };

  // Mobilde kaydırma sorunlarını çözen touch event iyileştirmeleri
  useEffect(() => {
    // Tüm kaydırılabilir konteynırlar için touch olaylarını iyileştir
    const scrollableContainers = [booksScrollRef.current, authorsScrollRef.current];
    
    const handleTouchStart = (e: TouchEvent) => {
      // Dokunma başladığında kaydırmayı durdur
      setIsScrollPaused(true);
      setIsAuthorScrollPaused(true);
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      // Dokunma bittiğinde, bir süre sonra kaydırmayı tekrar başlat
      setTimeout(() => {
        setIsScrollPaused(false);
        setIsAuthorScrollPaused(false);
      }, 1500); // 1.5 saniye bekle
    };
    
    // Touch olaylarını ekle
    scrollableContainers.forEach(container => {
      if (container) {
        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchend', handleTouchEnd, { passive: true });
      }
    });
    
    // Temizleme
    return () => {
      scrollableContainers.forEach(container => {
        if (container) {
          container.removeEventListener('touchstart', handleTouchStart);
          container.removeEventListener('touchend', handleTouchEnd);
        }
      });
    };
  }, []);
  
  // Double tap to zoom önleme
  useEffect(() => {
    // Mobil cihazlarda çift dokunma zoom'unu önle
    const disableDoubleTapZoom = (el: HTMLElement, handler: () => void) => {
      let lastTap = 0;
      el.addEventListener('touchend', function(e) {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0) {
          e.preventDefault();
          handler();
        }
        lastTap = currentTime;
      });
    };
    
    const handleBodyDoubleTap = () => {
      // Çift dokunmada hiçbir şey yapma, sadece engelle
    };
    
    if (typeof document !== 'undefined') {
      disableDoubleTapZoom(document.body, handleBodyDoubleTap);
    }
  }, []);

  return (
    <main className={`min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-purple-50 overflow-x-hidden ${isFullyLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Sayfa yükleniyor animasyonu */}
      {!isFullyLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg shadow-lg animate-pulse">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <p className="mt-4 text-gray-600">Yükleniyor...</p>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <div id="hero" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-20 pb-8 sm:pb-12 md:pb-16 transition-all duration-1000 transform ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
              </div>
              <span className="text-base sm:text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Storya</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-3 sm:mb-4 md:mb-6 animate-gradient leading-tight">
              Kitapları Dinlemenin Yeni Yolu
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 text-gray-700 mb-4 sm:mb-6 md:mb-8 animate-fadeIn">
              Satın aldığın kitapların sesli versiyonuna tek tıkla eriş. Her yerde, her zaman, seninle.
            </p>
            <div className="flex items-center gap-x-3 sm:gap-x-4 md:gap-x-6 animate-fadeIn" style={{animationDelay: "0.2s"}}>
              <Button size="lg" className="text-xs sm:text-sm md:text-base py-2 h-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 transform hover:scale-105" asChild>
                <Link href="https://lab.lunaarvision.com/m/paulo-coelho">
                  <Headphones className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  Hemen Deneyimle
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-4 sm:mt-6 md:mt-0 animate-fadeIn" style={{animationDelay: "0.4s"}}>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.03] transition-all duration-700">
              <div className="w-full h-[220px] sm:h-[300px] md:h-[450px] lg:h-[600px] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
                <div className="text-center p-4 sm:p-6 md:p-8">
                  <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 text-white/90 mx-auto mb-2 sm:mb-3 md:mb-4 animate-float" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">Sesli Kitap Dünyası</h2>
                  <p className="text-sm sm:text-base md:text-lg text-white/80">Binlerce kitap, tek platform</p>
                </div>
              </div>
              {/* Floating UI Demo */}
              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-lg transform hover:scale-105 transition-all duration-300 animate-float">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3">
                    <Play className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base text-gray-900">Şu An Çalıyor</h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">Sapiens - Yuval Noah Harari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Books Section with Categories */}
      <div id="books" className={`bg-gradient-to-b from-white to-blue-50 py-10 sm:py-16 md:py-24 transition-all duration-1000 transform ${isVisible.books ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-full lg:max-w-[1920px] mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4 sm:mb-6 md:mb-8 px-4">Keşfet</h2>
          
          {/* Category Tabs - Enhanced scrollable for mobile */}
          <div className="relative px-4">
            <div className="flex justify-start overflow-x-auto snap-x snap-mandatory sm:justify-center sm:flex-wrap sm:overflow-visible scrollbar-hide py-2 gap-2 sm:gap-3 mb-4 sm:mb-6 md:gap-8 animate-fadeIn">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-500 whitespace-nowrap flex-none snap-start ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                      : "bg-white text-gray-800 hover:bg-gray-100 shadow-sm hover:scale-105"
                  }`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {category.title}
                </button>
              ))}
            </div>
            
            {/* Mobile scroll hint gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none sm:hidden"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden"></div>
          </div>

          {/* Category Title - Mobile visibility enhancement */}
          <div className="px-4 mb-4 sm:hidden">
            <h3 className="text-sm font-medium text-gray-700 bg-blue-50/50 rounded-lg py-2 px-3 inline-block">
              {categories.find(cat => cat.id === activeCategory)?.title}
            </h3>
          </div>

          {/* Books Grid with Horizontal Scroll - Enhanced for touch devices */}
          <div className="relative animate-fadeIn" style={{animationDelay: "0.3s"}}>
            <div 
              ref={booksScrollRef}
              className="overflow-x-auto touch-pan-x scrollbar-hide pb-2" 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex gap-2 sm:gap-3 md:gap-4 px-4 md:px-8 pb-4 sm:pb-6 md:pb-8 min-w-max">
                {categories
                  .find((cat) => cat.id === activeCategory)
                  ?.books.map((book, i) => (
                    <div
                      key={book.id}
                      className="relative flex-none w-[120px] sm:w-[130px] md:w-[176px] transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-xl animate-fadeIn snap-start"
                      style={{animationDelay: `${0.05 * i}s`}}
                      onMouseEnter={() => setHoveredBook(book.id)}
                      onMouseLeave={() => setHoveredBook(null)}
                      onTouchStart={() => setHoveredBook(book.id)}
                      onTouchEnd={() => setTimeout(() => setHoveredBook(null), 1000)}
                    >
                      <Link href={`/book/${book.id}`} className="block">
                        <div className="relative aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 to-purple-100 transition-all duration-500">
                          <div className="w-full h-full flex items-center justify-center">
                            <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-blue-400 transition-all duration-300 transform group-hover:scale-110" />
                          </div>
                          {hoveredBook === book.id && (
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 p-2 sm:p-3 md:p-4 flex flex-col justify-between text-white transition-all duration-500 animate-fadeIn">
                              <div>
                                <h3 className="text-xs sm:text-sm md:text-base font-semibold mb-0.5 sm:mb-1">{book.title}</h3>
                                <p className="text-[10px] sm:text-xs md:text-sm opacity-80 mb-0.5 sm:mb-1">{book.author}</p>
                              </div>
                              <div>
                                <p className="text-[9px] sm:text-xs leading-tight mb-2 sm:mb-3 md:mb-4 line-clamp-3 md:line-clamp-none">{book.description}</p>
                                <Button
                                  size="sm"
                                  className="w-full h-7 sm:h-8 text-[10px] sm:text-xs md:text-sm bg-white text-blue-600 hover:bg-gray-100 flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                                >
                                  <Play className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 mr-1" />
                                  Dinle
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="mt-1.5 sm:mt-2 md:mt-3">
                          <h3 className="font-semibold text-[10px] sm:text-xs md:text-sm text-gray-900 truncate">{book.title}</h3>
                          <p className="text-[9px] sm:text-xs text-gray-600 truncate">{book.author}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
            {/* Gradient overlays for scroll indication */}
            <div className="absolute left-0 top-0 bottom-8 w-10 sm:w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-8 w-10 sm:w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
          
          {/* Category Navigation - Mobile only */}
          <div className="flex justify-center mt-4 sm:hidden px-4">
            <div className="flex space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm">
              {categories.map((category, index) => (
                <button
                  key={`dot-${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300"
                  }`}
                  aria-label={category.title}
                />
              ))}
            </div>
          </div>
          
          {/* Mobile Kategori Seçimi - Alternatif Yöntem */}
          <div className="mt-6 px-4 sm:hidden">
            <select 
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm font-medium text-gray-700 shadow-sm"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Authors Section - Better optimized for mobile and touch */}
      <div id="authors" className={`bg-gradient-to-b from-blue-50 to-purple-50 pb-10 sm:pb-16 md:pb-24 transition-all duration-1000 transform ${isVisible.authors ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-full lg:max-w-[1920px] mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4 sm:mb-6 md:mb-8 px-4">Sevilen Yazarlar</h2>
          
          {/* Authors Grid with Horizontal Scroll - Enhanced for touch devices */}
          <div className="relative animate-fadeIn" style={{animationDelay: "0.2s"}}>
            <div 
              ref={authorsScrollRef}
              className="overflow-x-auto touch-pan-x scrollbar-hide pb-2"
              onMouseEnter={handleAuthorMouseEnter}
              onMouseLeave={handleAuthorMouseLeave}
            >
              <div className="flex gap-2 sm:gap-3 md:gap-4 px-4 md:px-8 pb-4 sm:pb-6 md:pb-8 min-w-max">
                {authors.map((author, i) => (
                  <div
                    key={author.id}
                    className="relative flex-none w-[120px] sm:w-[130px] md:w-[176px] transition-all duration-500 ease-in-out transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-xl animate-fadeIn snap-start"
                    style={{animationDelay: `${0.05 * i}s`}}
                    onMouseEnter={() => setHoveredAuthor(author.id)}
                    onMouseLeave={() => setHoveredAuthor(null)}
                    onTouchStart={() => setHoveredAuthor(author.id)}
                    onTouchEnd={() => setTimeout(() => setHoveredAuthor(null), 1000)}
                  >
                    <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-100 to-blue-100 transition-all duration-500">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3 sm:p-4">
                          <User className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                        </div>
                      </div>
                      {hoveredAuthor === author.id && (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 p-2 sm:p-3 md:p-4 flex flex-col justify-end text-white transition-all duration-500 animate-fadeIn">
                          <h3 className="text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1">{author.name}</h3>
                          <p className="text-[9px] sm:text-xs leading-tight mb-1 sm:mb-2 md:mb-3 line-clamp-2 sm:line-clamp-3 md:line-clamp-none">{author.description}</p>
                          <div className="flex items-center justify-between mb-1 sm:mb-2">
                            <span className="text-[9px] sm:text-xs text-gray-300">{author.books} Sesli Kitap</span>
                          </div>
                          <Button
                            size="sm"
                            className="w-full h-7 sm:h-8 text-[10px] sm:text-xs md:text-sm bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                          >
                            <Play className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 mr-1" />
                            Keşfet
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="mt-1.5 sm:mt-2 md:mt-3">
                      <h3 className="font-semibold text-[10px] sm:text-xs md:text-sm text-gray-900 truncate">{author.name}</h3>
                      <p className="text-[9px] sm:text-xs text-gray-600 truncate">{author.books} Sesli Kitap</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Gradient overlays for scroll indication */}
            <div className="absolute left-0 top-0 bottom-8 w-10 sm:w-16 md:w-32 bg-gradient-to-r from-purple-50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-8 w-10 sm:w-16 md:w-32 bg-gradient-to-l from-purple-50 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Mobile scroll instruction - only on small screens */}
          <div className="mt-3 text-center text-xs text-gray-500 sm:hidden px-4">
            <p className="flex items-center justify-center gap-1">
              <span>←</span> Daha fazla yazar görmek için kaydırın <span>→</span>
            </p>
          </div>
        </div>
      </div>

      {/* Time Section - Improved for mobile */}
      <div id="time" className={`bg-white py-6 sm:py-8 md:py-16 lg:py-24 transition-all duration-1000 transform ${isVisible.time ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl w-full max-w-[820px] mx-auto overflow-hidden transform transition-all duration-700 hover:shadow-2xl hover:scale-[1.02]">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-0">
              {/* Content Side */}
              <div className="p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-white to-blue-50/30">
                <div>
                  <h2 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 animate-pulse">
                    Zaman Yok Diyenlere Storya Var
                  </h2>
                  <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                    Kitap okumaya zaman bulamıyor musun?
                  </h3>
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <p className="text-xs sm:text-sm md:text-lg text-gray-600 flex items-center gap-1.5 sm:gap-2 hover:-translate-x-1 transition-transform duration-300">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      Türkiye'de kitap okuma oranı %0.5
                    </p>
                    <p className="text-xs sm:text-sm md:text-lg text-gray-600 flex items-center gap-1.5 sm:gap-2 hover:-translate-x-1 transition-transform duration-300">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      Sesli kitaplara olan ilgi hızla artıyor
                    </p>
                    <p className="text-xs sm:text-sm md:text-lg text-gray-600 flex items-center gap-1.5 sm:gap-2 hover:-translate-x-1 transition-transform duration-300">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      Her yerde, her an kitaplarını dinle
                    </p>
                  </div>
                </div>
                <Button className="w-full mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-9 sm:h-10 md:h-auto">
                  <Play className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  Hemen Dinlemeye Başla
                </Button>
              </div>
              {/* Image Side */}
              <div className="relative h-[220px] sm:h-[280px] md:h-full bg-gradient-to-tr from-blue-50 to-indigo-50/30">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-8">
                  <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md sm:shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <Volume2 className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-500 mb-1 sm:mb-2 animate-pulse" />
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-700">Yolda Dinle</span>
                    <span className="text-[8px] sm:text-[10px] md:text-xs text-gray-500">Trafik stresini unut</span>
                  </div>
                  <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md sm:shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <Headphones className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-500 mb-1 sm:mb-2 animate-pulse" />
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-700">Evde Dinle</span>
                    <span className="text-[8px] sm:text-[10px] md:text-xs text-gray-500">İşlerini yaparken öğren</span>
                  </div>
                  <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md sm:shadow-lg col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <Smartphone className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-500 mb-1 sm:mb-2 animate-pulse" />
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-700">Her Cihazda Dinle</span>
                    <span className="text-[8px] sm:text-[10px] md:text-xs text-gray-500">Tüm cihazlarında kesintisiz deneyim</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards Container - Mobile optimized */}
      <div id="info" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24 transition-all duration-1000 transform ${isVisible.info ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 justify-center items-stretch">
          {/* Meet Storya Section */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl w-full md:w-[480px] overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white z-0"></div>
            <div className="p-5 sm:p-8 md:p-12 flex flex-col h-full relative z-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 sm:mb-6 md:mb-10">
                Storya'yla Tanış!
              </h2>
              <div className="space-y-4 sm:space-y-6 md:space-y-8 mb-4 sm:mb-6 md:mb-8">
                <div className="flex items-start gap-3 sm:gap-4 transform transition-all duration-300 hover:-translate-x-1 hover:shadow-sm p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/50 backdrop-blur">
                  <div className="flex-shrink-0 h-6 w-6 sm:h-8 sm:w-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 transition-colors duration-300">
                    <div className="text-xs sm:text-sm font-bold">1</div>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700">
                    Kitabı al, dinlemeye başla.
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 transform transition-all duration-300 hover:-translate-x-1 hover:shadow-sm p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/50 backdrop-blur">
                  <div className="flex-shrink-0 h-6 w-6 sm:h-8 sm:w-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 transition-colors duration-300">
                    <div className="text-xs sm:text-sm font-bold">2</div>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700">
                    Tek tıkla sesli versiyona ulaş. Beklemeden, ayrı uygulama olmadan.
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 transform transition-all duration-300 hover:-translate-x-1 hover:shadow-sm p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/50 backdrop-blur">
                  <div className="flex-shrink-0 h-6 w-6 sm:h-8 sm:w-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 transition-colors duration-300">
                    <div className="text-xs sm:text-sm font-bold">3</div>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700">
                    AI destekli doğal ses kalitesi. Cihaz fark etmeksizin dinleme.
                  </p>
                </div>
              </div>
              {/* Demo QR Section */}
              <div className="mt-auto bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-inner transform transition-all duration-300 hover:shadow-lg">
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-indigo-600 mb-3 sm:mb-4 text-center">Mini Demo - Simyacı</h3>
                <div className="bg-white w-full max-w-[200px] sm:max-w-[240px] h-[160px] sm:h-[200px] mx-auto rounded-lg sm:rounded-xl overflow-hidden shadow-md">
                  <div className="w-full h-full flex flex-col items-center justify-center p-3 sm:p-4">
                    <BookOpen className="h-8 w-8 sm:h-12 sm:w-12 text-indigo-600 mb-2 sm:mb-3 animate-pulse" />
                    <span className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-1">Simyacı</span>
                    <span className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Paulo Coelho</span>
                    <Button size="sm" className="h-7 sm:h-auto text-xs bg-indigo-600 text-white hover:bg-indigo-700 px-4 sm:px-6 py-1 sm:py-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <Play className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4" />
                      Demo Dinle
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Where is Storya Section */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl w-full md:w-[480px] overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white z-0"></div>
            <div className="p-5 sm:p-8 md:p-12 flex flex-col h-full relative z-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 sm:mb-6 md:mb-10">
                Sen Neredeysen Storya Orada!
              </h2>
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="flex items-start gap-3 sm:gap-4 transform transition-all duration-300 hover:-translate-x-1 hover:shadow-sm p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/50 backdrop-blur">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-indigo-100 rounded-lg sm:rounded-xl flex items-center justify-center text-indigo-600 transition-colors duration-300 hover:bg-indigo-600 hover:text-white">
                    <Mic2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">Yolda</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      Trafikte podcast gibi dinle
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 transform transition-all duration-300 hover:-translate-x-1 hover:shadow-sm p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/50 backdrop-blur">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-indigo-100 rounded-lg sm:rounded-xl flex items-center justify-center text-indigo-600 transition-colors duration-300 hover:bg-indigo-600 hover:text-white">
                    <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">Evde</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      Ev işi yaparken bilgiye kulak ver
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 transform transition-all duration-300 hover:-translate-x-1 hover:shadow-sm p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/50 backdrop-blur">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-indigo-100 rounded-lg sm:rounded-xl flex items-center justify-center text-indigo-600 transition-colors duration-300 hover:bg-indigo-600 hover:text-white">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">Kütüphanede</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      Görme engelliler için erişilebilirlik
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 transform transition-all duration-300 hover:-translate-x-1 hover:shadow-sm p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/50 backdrop-blur">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-indigo-100 rounded-lg sm:rounded-xl flex items-center justify-center text-indigo-600 transition-colors duration-300 hover:bg-indigo-600 hover:text-white">
                    <Globe2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">E-ticaret sitesinde</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      Kitap alırken sesli versiyona tek tık
                    </p>
                  </div>
                </div>
              </div>
              {/* Image Section */}
              <div className="mt-auto bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden shadow-inner">
                <div className="h-[120px] sm:h-[160px] flex items-center justify-center">
                  <div className="text-center bg-white/80 backdrop-blur p-3 sm:p-6 rounded-lg sm:rounded-xl shadow-sm w-full transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                    <Headphones className="mx-auto h-6 w-6 sm:h-10 sm:w-10 text-indigo-600 mb-2 sm:mb-3 animate-pulse" />
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-0.5 sm:mb-1">Storya Her Yerde</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Kesintisiz dinleme keyfi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section - Better Responsive Design */}
      <div id="quote" className={`bg-white py-10 sm:py-16 border-y border-gray-100 transition-all duration-1000 transform ${isVisible.quote ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed mb-4 sm:mb-6 italic">
            "Her hikaye bir yolculuktur; dinlediğinizde, bu yolculuğa başka bir boyut katarsınız."
          </blockquote>
          <cite className={`${dancingScript.className} text-lg sm:text-xl md:text-2xl text-gray-600 inline-block animate-float`}>— Neil Gaiman</cite>
        </div>
      </div>

      {/* Modern Footer Section */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 pt-10 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full h-12 w-12 sm:h-16 sm:w-16 mb-2 sm:mb-3">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Storya
            </h2>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-8 sm:mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Kitaplarını şimdi dinlemeye başla.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
              Storya'yı deneyimle ve kitaplarınla yeni bir bağ kur.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4 p-1 bg-gray-800/50 backdrop-blur-sm rounded-full">
              <Button size="lg" className="h-10 sm:h-12 py-2 text-xs sm:text-sm md:text-base bg-white text-gray-900 hover:bg-gray-100 rounded-full">
                <Volume2 className="mr-1.5 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" />
                Demo Dinle
              </Button>
              <Button size="lg" variant="ghost" className="h-10 sm:h-12 py-2 text-xs sm:text-sm md:text-base text-white hover:bg-gray-800 rounded-full">
                <Phone className="mr-1.5 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" />
                Bize Ulaşın
              </Button>
            </div>
          </div>

          {/* Footer Content - Improved for Mobile */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 pb-6 sm:pb-8 md:pb-12 border-b border-gray-800">
            <div className="space-y-3">
              <h3 className="font-semibold text-white mb-2 sm:mb-4">Ürün</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Özellikler</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Fiyatlandırma</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-white mb-2 sm:mb-4">Şirket</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Kariyer</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-white mb-2 sm:mb-4">Kaynaklar</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Dokümantasyon</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Yardım Merkezi</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Topluluk</a></li>
              </ul>
            </div>
            <div className="col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 space-y-3">
              <h3 className="font-semibold text-white mb-2 sm:mb-4">İletişim</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="https://www.instagram.com/grouptaiga/" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"><Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/taiga-group/posts/?feedView=all" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"><LinkIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> LinkedIn</a></li>
                <li><a href="https://www.facebook.com/grouptaiga" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"><Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Facebook</a></li>
                <li><a href="mailto:hello@grouptaiga.com" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"><Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> E-posta</a></li>
              </ul>
            </div>
            <div className="col-span-1 sm:col-span-3 md:col-span-2 lg:col-span-1 space-y-3">
              <h3 className="font-semibold text-white mb-2 sm:mb-4">Yasal</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Gizlilik Politikası</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Kullanım Şartları</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">KVKK</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Çerez Politikası</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex justify-center pt-4 sm:pt-6 md:pt-8">
            <p className="text-xs sm:text-sm text-gray-400">
              © {new Date().getFullYear()} Storya. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>

      {/* Responsive Helper Styles */}
      <style jsx global>{`
        /* Responsive classes for extra small screens */
        @media (min-width: 475px) {
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          
          .xs\\:col-span-1 {
            grid-column: span 1 / span 1;
          }
        }
        
        /* Better readability on small screens */
        @media (max-width: 640px) {
          html {
            font-size: 14px;
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 8s ease infinite;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        @keyframes slideInLeft {
          0% {
            transform: translateX(-30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        @keyframes slideInRight {
          0% {
            transform: translateX(30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        
        /* Hide scrollbars but keep functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        
        /* Smooth scrolling for the whole page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Better touch behavior for mobile */
        @media (max-width: 768px) {
          html, body {
            touch-action: manipulation;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Improve tap target sizes on mobile */
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        @media (min-width: 768px) {
          ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366f1, #a855f7);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #4f46e5, #9333ea);
        }
      `}</style>
    </main>
  );
}