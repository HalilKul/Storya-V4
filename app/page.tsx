"use client";

import { Play, Volume2, BookOpen, Headphones, Mic2, Zap, Smartphone, Globe2, Link as LinkIcon, Phone, Building2, Twitter, Instagram, Facebook, MapPin, Mail, CloudDownload, Sparkles, User, Repeat, ArrowRight, Clock, VolumeX, Save } from "lucide-react";
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
        cover: "/placeholder-book.jpg",
        description: "19. yüzyıl Fransa'sında adalet, merhamet ve sevginin güçlü hikayesi.",
      },
      {
        id: "2",
        title: "Anna Karenina",
        author: "Lev Tolstoy",
        cover: "/placeholder-book.jpg",
        description: "Rus edebiyatının en güçlü aşk ve toplum romanlarından biri.",
      },
      {
        id: "3",
        title: "Don Kişot",
        author: "Miguel de Cervantes",
        cover: "/placeholder-book.jpg",
        description: "Şövalye romanlarının parodisi, modern romanın ilk örneği sayılan başyapıt.",
      },
      {
        id: "4",
        title: "Moby Dick",
        author: "Herman Melville",
        cover: "/placeholder-book.jpg",
        description: "Beyaz balinayı avlayan Kaptan Ahab'ın takıntı ve intikam hikayesi.",
      },
      {
        id: "5",
        title: "Savaş ve Barış",
        author: "Lev Tolstoy",
        cover: "/placeholder-book.jpg",
        description: "Napolyon'un Rusya seferini konu alan, tarih ve insan ruhunu işleyen başyapıt.",
      },
      {
        id: "6",
        title: "Ulysses",
        author: "James Joyce",
        cover: "/placeholder-book.jpg",
        description: "Modern edebiyatın dönüm noktası, bilinç akışı tekniğinin en önemli örneği.",
      },
      {
        id: "7",
        title: "Bülbülü Öldürmek",
        author: "Harper Lee",
        cover: "/placeholder-book.jpg",
        description: "Amerikan Güneyi'nde ırkçılık ve adalet temalı, Pulitzer ödüllü roman.",
      },
      {
        id: "101",
        title: "Suç ve Ceza",
        author: "Fyodor Dostoyevski",
        cover: "/placeholder-book.jpg",
        description: "Psikolojik derinliği ile dünya edebiyatının başyapıtlarından biri.",
      },
      {
        id: "104",
        title: "Aşk ve Gurur",
        author: "Jane Austen",
        cover: "/placeholder-book.jpg",
        description: "19. yüzyıl İngiltere'sinde sınıf ve cinsiyet rollerini işleyen romantik başyapıt.",
      },
      {
        id: "105",
        title: "Dracula",
        author: "Bram Stoker",
        cover: "/placeholder-book.jpg",
        description: "Modern vampir hikayelerinin atası olan gotik korku romanı.",
      },
      {
        id: "106",
        title: "Sherlock Holmes'un Maceraları",
        author: "Arthur Conan Doyle",
        cover: "/placeholder-book.jpg",
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
        cover: "/placeholder-book.jpg",
        description: "19. yüzyıl İngiltere'sinde sınıf ve cinsiyet rollerini işleyen romantik başyapıt.",
      },
      {
        id: "9",
        title: "Madam Bovary",
        author: "Gustave Flaubert",
        cover: "/placeholder-book.jpg",
        description: "Taşra hayatından sıkılan Emma Bovary'nin hüzünlü ve karanlık hikayesi.",
      },
      {
        id: "10",
        title: "Büyük Gatsby",
        author: "F. Scott Fitzgerald",
        cover: "/placeholder-book.jpg",
        description: "1920'ler Amerika'sında Amerikan rüyasının ve dekadansın sembolü olan Jay Gatsby'nin hikayesi.",
      },
      {
        id: "11",
        title: "Suç ve Ceza",
        author: "Fyodor Dostoyevski",
        cover: "/placeholder-book.jpg",
        description: "Psikolojik derinliği ile dünya edebiyatının başyapıtlarından biri.",
      },
      {
        id: "12",
        title: "Yüzüklerin Efendisi",
        author: "J.R.R. Tolkien",
        cover: "/placeholder-book.jpg",
        description: "Orta Dünya'nın destansı hikayesi. Fantastik edebiyatın başyapıtı.",
      },
      {
        id: "107",
        title: "Frankenstein",
        author: "Mary Shelley",
        cover: "/placeholder-book.jpg",
        description: "Modern bilim kurgunun öncüsü, yaratıcı ve yaratılan arasındaki ilişkiyi sorgulayan eser.",
      },
      {
        id: "109",
        title: "Faust",
        author: "Johann Wolfgang von Goethe",
        cover: "/placeholder-book.jpg",
        description: "Bilgi uğruna ruhunu şeytana satan bir bilim adamının trajedisi.",
      },
      {
        id: "111",
        title: "Oliver Twist",
        author: "Charles Dickens",
        cover: "/placeholder-book.jpg",
        description: "Yetimhaneden kaçan ve Londra'nın karanlık sokaklarında yaşam mücadelesi veren bir çocuğun hikayesi.",
      },
      {
        id: "112",
        title: "Madame Bovary",
        author: "Gustave Flaubert",
        cover: "/placeholder-book.jpg",
        description: "Taşra hayatından sıkılan Emma Bovary'nin hüzünlü ve karanlık hikayesi.",
      },
      {
        id: "114",
        title: "Robinson Crusoe",
        author: "Daniel Defoe",
        cover: "/placeholder-book.jpg",
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
        cover: "/placeholder-book.jpg",
        description: "Distopik bir gelecekte, gözetim toplumunun karanlık yüzüyle yüzleşin.",
      },
      {
        id: "14",
        title: "Küçük Prens",
        author: "Antoine de Saint-Exupéry",
        cover: "/placeholder-book.jpg",
        description: "Çocuklar için yazılmış yetişkinler için bir masal. Sevgi, dostluk ve yaşamın anlamı üzerine.",
      },
      {
        id: "15",
        title: "Simyacı",
        author: "Paulo Coelho",
        cover: "/placeholder-book.jpg",
        description: "Kişisel efsanenizi keşfetme yolculuğuna çıkın. İlham verici bir kendini bulma hikayesi.",
      },
      {
        id: "16",
        title: "Dune",
        author: "Frank Herbert",
        cover: "/placeholder-book.jpg",
        description: "Bilim kurgunun başyapıtı. Arrakis gezegeninde geçen epik bir güç ve hayatta kalma mücadelesi.",
      },
      {
        id: "17",
        title: "Sapiens",
        author: "Yuval Noah Harari",
        cover: "/placeholder-book.jpg",
        description: "İnsan türünün yolculuğunu keşfedin. Bilişsel devrimden yapay zekaya, insanlığın hikayesi.",
      },
      {
        id: "115",
        title: "Gulliver'in Gezileri",
        author: "Jonathan Swift",
        cover: "/placeholder-book.jpg",
        description: "Fantastik diyarlara yolculuk eden bir gemicinin gözünden insanlığın ve toplumun eleştirisi.",
      },
      {
        id: "116",
        title: "Candide",
        author: "Voltaire",
        cover: "/placeholder-book.jpg",
        description: "İyimserlik felsefesini alaycı bir dille eleştiren felsefi hikaye.",
      },
      {
        id: "117",
        title: "Monte Kristo Kontu",
        author: "Alexandre Dumas",
        cover: "/placeholder-book.jpg",
        description: "Haksız yere hapsedilen bir adamın intikam hikayesi.",
      },
      {
        id: "118",
        title: "Alice Harikalar Diyarında",
        author: "Lewis Carroll",
        cover: "/placeholder-book.jpg",
        description: "Tuhaf yaratıklar ve mantıksız olaylarla dolu fantastik bir dünyaya düşen küçük bir kızın maceraları.",
      },
      {
        id: "119",
        title: "Dorian Gray'in Portresi",
        author: "Oscar Wilde",
        cover: "/placeholder-book.jpg",
        description: "Gençliğini korumak için ruhunu satan bir adamın çöküş hikayesi.",
      },
      {
        id: "120",
        title: "Tom Sawyer'ın Maceraları",
        author: "Mark Twain",
        cover: "/placeholder-book.jpg",
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
    photo: "/placeholder-author.jpg",
    description: "Rus edebiyatının dev ismi, psikolojik romanın öncüsü",
    books: 15,
  },
  {
    id: 2,
    name: "Victor Hugo",
    photo: "/placeholder-author.jpg",
    description: "Fransız edebiyatının ünlü yazarı, Sefiller ve Notre Dame'ın Kamburu'nun yaratıcısı",
    books: 12,
  },
  {
    id: 3,
    name: "Lev Tolstoy",
    photo: "/placeholder-author.jpg",
    description: "Rus gerçekçi edebiyatının ustası, Savaş ve Barış ile Anna Karenina'nın yazarı",
    books: 14,
  },
  {
    id: 4,
    name: "Jane Austen",
    photo: "/placeholder-author.jpg",
    description: "İngiliz edebiyatının önemli kadın yazarlarından, romantik kurgu ustası",
    books: 7,
  },
  {
    id: 5,
    name: "Bram Stoker",
    photo: "/placeholder-author.jpg",
    description: "Gotik korku edebiyatının öncüsü, Dracula'nın yazarı",
    books: 5,
  },
  {
    id: 6,
    name: "Arthur Conan Doyle",
    photo: "/placeholder-author.jpg",
    description: "Sherlock Holmes'un yaratıcısı, dedektif ve macera öykülerinin ustası",
    books: 20,
  },
  {
    id: 7,
    name: "Mary Shelley",
    photo: "/placeholder-author.jpg",
    description: "Modern bilim kurgunun öncüsü, Frankenstein'ın yazarı",
    books: 6,
  },
  {
    id: 8,
    name: "Herman Melville",
    photo: "/placeholder-author.jpg",
    description: "Amerikan edebiyatının sembol isimlerinden, Moby Dick'in yazarı",
    books: 9,
  },
  {
    id: 9,
    name: "Johann Wolfgang von Goethe",
    photo: "/placeholder-author.jpg",
    description: "Alman edebiyatının dehası, şair, romancı ve düşünür",
    books: 12,
  },
  {
    id: 10,
    name: "Charles Dickens",
    photo: "/placeholder-author.jpg",
    description: "Viktorya dönemi İngiliz edebiyatının ünlü yazarı, toplumsal gerçekçiliğin ustası",
    books: 25,
  },
  {
    id: 11,
    name: "Gustave Flaubert",
    photo: "/placeholder-author.jpg",
    description: "Fransız gerçekçi edebiyatının temsilcisi, Madam Bovary'nin yazarı",
    books: 8,
  },
  {
    id: 12,
    name: "Miguel de Cervantes",
    photo: "/placeholder-author.jpg",
    description: "İspanyol edebiyatının babası, Don Kişot'un yazarı",
    books: 10,
  },
  {
    id: 13,
    name: "Daniel Defoe",
    photo: "/placeholder-author.jpg",
    description: "İngiliz roman türünün öncülerinden, Robinson Crusoe'nun yazarı",
    books: 7,
  },
  {
    id: 14,
    name: "Jonathan Swift",
    photo: "/placeholder-author.jpg",
    description: "İrlandalı yazar ve hiciv ustası, Gulliver'in Gezileri'nin yazarı",
    books: 6,
  },
  {
    id: 15,
    name: "Voltaire",
    photo: "/placeholder-author.jpg",
    description: "Fransız Aydınlanma çağının düşünürü ve yazarı, Candide'in yaratıcısı",
    books: 9,
  },
  {
    id: 16,
    name: "Alexandre Dumas",
    photo: "/placeholder-author.jpg",
    description: "Fransız romantik edebiyatının macera ustası, Monte Kristo Kontu'nun yazarı",
    books: 18,
  },
  {
    id: 17,
    name: "Lewis Carroll",
    photo: "/placeholder-author.jpg",
    description: "İngiliz çocuk edebiyatının ustası, Alice Harikalar Diyarında'nın yazarı",
    books: 5,
  },
  {
    id: 18,
    name: "Oscar Wilde",
    photo: "/placeholder-author.jpg",
    description: "İrlandalı şair, oyun yazarı ve romancı, Dorian Gray'in Portresi'nin yazarı",
    books: 11,
  },
  {
    id: 19,
    name: "Mark Twain",
    photo: "/placeholder-author.jpg",
    description: "Amerikan edebiyatının babası, Tom Sawyer ve Huckleberry Finn'in yaratıcısı",
    books: 14,
  },
  {
    id: 20,
    name: "Nathaniel Hawthorne",
    photo: "/placeholder-author.jpg",
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

// CSS eklentisi:
const globalStyles = `
  @media (max-width: 768px) {
    .tap-highlight-transparent {
      -webkit-tap-highlight-color: transparent;
    }
    
    .no-scrollbar {
      -ms-overflow-style: none;  /* IE ve Edge */
      scrollbar-width: none;  /* Firefox */
    }
    
    .no-scrollbar::-webkit-scrollbar {
      display: none;  /* Chrome, Safari ve Opera */
    }
  }

  /* Harf animasyonları için keyframes */
  @keyframes fadeInAndUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes colorPulse {
    0% {
      color: rgba(59, 130, 246, 1);
    }
    50% {
      color: rgba(147, 51, 234, 1);
    }
    100% {
      color: rgba(59, 130, 246, 1);
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  @keyframes wiggle {
    0%, 100% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(2deg);
    }
  }

  .animated-letter {
    display: inline-block;
    animation: fadeInAndUp 0.5s forwards;
    opacity: 0.8; /* Başlangıçta metinlerin hafif görünür olmasını sağla */
  }

  .animated-letter:hover {
    animation: bounce 0.5s ease infinite;
  }

  .subtitle-word {
    display: inline-block;
    position: relative;
    opacity: 0.8; /* Başlangıçta metinlerin hafif görünür olmasını sağla */
    transform: translateY(5px);
    animation: fadeInAndUp 0.5s forwards;
  }
`;

// Metni harflere ayırmak için yardımcı fonksiyon
function AnimatedText({ 
  text, 
  className, 
  delay = 0, 
  wordDelay = 0.05, 
  letterDelay = 0.03 
}: { 
  text: string; 
  className?: string; 
  delay?: number; 
  wordDelay?: number; 
  letterDelay?: number;
}) {
  return (
    <span className={className}>
      {text.split(' ').map((word: string, wordIndex: number) => (
        <span key={wordIndex} className="mx-1 inline-block">
          {word.split('').map((letter: string, letterIndex: number) => (
            <span 
              key={letterIndex} 
              className="animated-letter" 
              style={{ 
                animationDelay: `${delay + wordIndex * wordDelay + letterIndex * letterDelay}s`,
                display: 'inline-block'
              }}
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

function AnimatedSubtitle({ 
  text, 
  className 
}: { 
  text: string; 
  className?: string;
}) {
  return (
    <p className={className}>
      {text.split(' ').map((word: string, index: number) => (
        <span 
          key={index} 
          className="subtitle-word mx-1" 
          style={{ animationDelay: `${0.8 + index * 0.1}s` }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

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
  
  // Scroll reveal animation - tüm öğeler başlangıçta görünür olacak
  const [isVisible, setIsVisible] = useState({
    hero: true,
    books: true,
    authors: true,
    time: true,
    info: true,
    features: true,
    quote: true
  });

  // Sayfa yükleme durumunu takip et
  useEffect(() => {
    setIsFullyLoaded(true); // Sayfayı anında yüklenmiş olarak işaretle
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

  // Sayfa görünürlüğü değiştiğinde özellikleri sıfırla
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          setIsVisible(prev => ({ 
            ...prev, 
            features: true
          }));
        }
      };
      
      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, []);
  
  // URL veya geçmiş değiştiğinde özellikleri sıfırla
  useEffect(() => {
    const handleUrlChange = () => {
      setIsVisible(prev => ({ 
        ...prev, 
        features: true
      }));
    };
    
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Stil etiketi oluşturup başlığa ekle
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const styleEl = document.createElement('style');
      styleEl.innerHTML = globalStyles;
      document.head.appendChild(styleEl);
      
      return () => {
        document.head.removeChild(styleEl);
      };
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-purple-50 overflow-x-hidden">
      {/* Hero Section */}
      <div id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-20 pb-8 sm:pb-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
              </div>
              <span className="text-base sm:text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Storya</span>
            </div>
            
            {/* Başlık - animasyonsuz statik versiyon */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-blue-600 mb-3 sm:mb-4 md:mb-6 leading-tight">
              Kitapları Dinlemenin Yeni Yolu
            </h1>
            
            {/* Alt başlık - animasyonsuz statik versiyon */}
            <p className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 text-gray-700 mb-4 sm:mb-6 md:mb-8">
              Satın aldığın kitapların sesli versiyonuna tek tıkla eriş. Her yerde, her zaman, seninle.
            </p>
            
            <div className="flex items-center gap-x-3 sm:gap-x-4 md:gap-x-6">
              <Button size="lg" className="text-xs sm:text-sm md:text-base py-2 h-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 transform hover:scale-105" asChild>
                <Link href="https://lab.lunaarvision.com/m/paulo-coelho">
                  <Headphones className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  Hemen Deneyimle
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-4 sm:mt-6 md:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.03] transition-all duration-700">
              <div className="w-full h-[220px] sm:h-[300px] md:h-[450px] lg:h-[600px] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
                <div className="text-center p-4 sm:p-6 md:p-8">
                  <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 text-white/90 mx-auto mb-2 sm:mb-3 md:mb-4" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">Sesli Kitap Dünyası</h2>
                  <p className="text-sm sm:text-base md:text-lg text-white/80">Binlerce kitap, tek platform</p>
                </div>
              </div>
              {/* Floating UI Demo */}
              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-lg">
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
            <div className="flex justify-start overflow-x-auto snap-x snap-mandatory sm:justify-center sm:flex-wrap sm:overflow-visible py-2 gap-2 sm:gap-3 mb-4 sm:mb-6 md:gap-8 animate-fadeIn touch-manipulation no-scrollbar">
              {categories.map((category, index) => (
              <button
                key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    // Kategori değiştikten sonra butonun ve kitapların doğru görüntülenmesini sağla
                    setTimeout(() => {
                      if (booksScrollRef.current) {
                        booksScrollRef.current.scrollLeft = 0;
                      }
                    }, 10);
                  }}
                  className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-none snap-start focus:outline-none active:scale-95 tap-highlight-transparent ${
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
              className="overflow-x-auto touch-pan-x no-scrollbar pb-2" 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex gap-2 sm:gap-3 md:gap-4 px-4 md:px-8 pb-4 sm:pb-6 md:pb-8 min-w-max">
                {categories
                  .find((cat) => cat.id === activeCategory)
                  ?.books.map((book, i) => (
                    <div
                      key={book.id}
                      className="relative flex-none w-[120px] sm:w-[130px] md:w-[176px] transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-xl animate-fadeIn snap-start tap-highlight-transparent"
                      style={{animationDelay: `${0.05 * i}s`}}
                      onMouseEnter={() => setHoveredBook(book.id)}
                      onMouseLeave={() => setHoveredBook(null)}
                      onTouchStart={(e) => {
                        // Daha iyi dokunma davranışı
                        e.stopPropagation();
                        setHoveredBook(book.id);
                      }}
                      onTouchEnd={() => {
                        // Dokunma bittiğinde hover durumunu kontrol et
                        setTimeout(() => {
                          if (hoveredBook === book.id) {
                            setHoveredBook(null);
                          }
                        }, 1000);
                      }}
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
                                  onClick={(e) => {
                                    e.preventDefault();
                                    // Kitap bilgisi sayfasına git
                                    window.location.href = `/book/${book.id}`;
                                  }}
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
              className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
      <div id="time" className={`bg-white py-6 sm:py-8 md:py-16 lg:py-24 transition-all duration-1000 transform ${isVisible.time ? 'opacity-100 translate-y-0 time-section-visible' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
            {/* Sol taraf - İçerik */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
                  Zaman Yok Diyenlere Storya Var
                </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  Kitap okumaya zaman bulamıyor musun?
                </h3>
              <div className="space-y-4">
                {/* Madde 1 - Yukarıdan aşağı animasyon */}
                <div id="time-item-1" className="group flex items-start gap-4 transition-all duration-500 hover:-translate-x-2 p-3 rounded-xl hover:bg-blue-50 opacity-0 translate-y-[-20px]">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-white"></div>
                </div>
                  <p className="text-base md:text-lg text-gray-700">Türkiye'de kitap okuma oranı %0.5</p>
              </div>
                
                {/* Madde 2 - Yukarıdan aşağı animasyon, daha fazla gecikme */}
                <div id="time-item-2" className="group flex items-start gap-4 transition-all duration-500 hover:-translate-x-2 p-3 rounded-xl hover:bg-blue-50 opacity-0 translate-y-[-20px]">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-white"></div>
                  </div>
                  <p className="text-base md:text-lg text-gray-700">Sesli kitaplara olan ilgi hızla artıyor</p>
                  </div>
                
                {/* Madde 3 - Yukarıdan aşağı animasyon, en fazla gecikme */}
                <div id="time-item-3" className="group flex items-start gap-4 transition-all duration-500 hover:-translate-x-2 p-3 rounded-xl hover:bg-blue-50 opacity-0 translate-y-[-20px]">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-white"></div>
                  </div>
                  <p className="text-base md:text-lg text-gray-700">Her yerde, her an kitaplarını dinle</p>
                </div>
              </div>
              <Button id="time-button" className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 transform hover:scale-105 opacity-0">
                <Play className="mr-2 h-5 w-5" />
                Hemen Dinlemeye Başla
              </Button>
            </div>
            
            {/* Sağ taraf - Görseller */}
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/0 to-blue-100/50 -z-10 rounded-3xl blur-xl"></div>
              
              {/* Yolda Dinle - Soldan sağa animasyon */}
              <div id="time-card-1" className="relative row-span-2 transform transition-all duration-500 hover:scale-105 hover:rotate-1 opacity-0 translate-x-[-20px]">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 h-full shadow-lg flex flex-col items-center justify-center text-center">
                  <Volume2 className="h-12 w-12 text-blue-600 mb-4 animate-pulse" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Yolda Dinle</h3>
                  <p className="text-gray-600 text-sm">Trafik stresini unut, yolda kitaplarını dinle</p>
                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 blur-lg"></div>
          </div>

              {/* Evde Dinle - Soldan sağa animasyon, gecikme ile */}
              <div id="time-card-2" className="transform transition-all duration-500 hover:scale-105 hover:-rotate-1 opacity-0 translate-x-[-20px]">
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-5 shadow-lg flex flex-col items-center justify-center text-center">
                  <Headphones className="h-8 w-8 text-purple-600 mb-2 animate-float" />
                  <h3 className="text-base font-semibold text-gray-900 mb-1">Evde Dinle</h3>
                  <p className="text-gray-600 text-xs">İşlerini yaparken öğren</p>
                </div>
              </div>
              
              {/* Her Cihazda - Soldan sağa animasyon, en fazla gecikme */}
              <div id="time-card-3" className="transform transition-all duration-500 hover:scale-105 hover:rotate-2 opacity-0 translate-x-[-20px]">
                <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl p-5 shadow-lg flex flex-col items-center justify-center text-center">
                  <Smartphone className="h-8 w-8 text-indigo-600 mb-2 animate-float" />
                  <h3 className="text-base font-semibold text-gray-900 mb-1">Her Cihazda</h3>
                  <p className="text-gray-600 text-xs">Kesintisiz dinleme deneyimi</p>
                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

      {/* Features Section - Taşındı */}
      <div id="features" className="init-visible bg-gradient-to-b from-purple-50 to-white py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-10 sm:mb-16">
            Storya Özellikleri
                </h2>
          
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            {/* Sol taraf - İçerik */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="group bg-gradient-to-r hover:bg-gradient-to-br from-blue-50 to-blue-50/30 hover:from-blue-100 hover:to-purple-100 p-5 rounded-xl transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.01] opacity-0 translate-x-[-50px] transition-all duration-700 feature-item" 
                  id="feature-item-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg shadow-md">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Yapay Zeka Destekli</h3>
                      <p className="text-gray-700">Doğal ses tonlaması ile kitaplar sanki bir insan tarafından seslendirilmiş gibi.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-r hover:bg-gradient-to-br from-blue-50 to-blue-50/30 hover:from-blue-100 hover:to-purple-100 p-5 rounded-xl transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.01] opacity-0 translate-x-[-50px] transition-all duration-700 feature-item" 
                  id="feature-item-2">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg shadow-md">
                        <Globe2 className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Çoklu Dil Desteği</h3>
                      <p className="text-gray-700">İstediğin dilde kitap dinleme imkanı sunar, çeviri engeli olmadan.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-r hover:bg-gradient-to-br from-blue-50 to-blue-50/30 hover:from-blue-100 hover:to-purple-100 p-5 rounded-xl transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.01] opacity-0 translate-x-[-50px] transition-all duration-700 feature-item" 
                  id="feature-item-3">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg shadow-md">
                        <Repeat className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Kesintisiz Deneyim</h3>
                      <p className="text-gray-700">Farklı cihazlar arasında geçişte kaldığın yerden devam et.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="#tum-ozellikler" className="inline-flex items-center gap-2 text-blue-600 font-medium group transition-all duration-300 hover:text-purple-600 opacity-0 translate-y-10 transition-all duration-700" id="feature-link">
                Tüm özellikleri keşfet
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            {/* Sağ taraf - Görseller */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-purple-200/20 -z-10 rounded-3xl blur-xl transform rotate-6"></div>
              
              <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[500px]">
                <div className="col-span-7 row-span-4 col-start-1 row-start-1 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-lg p-6 flex flex-col justify-center transform transition-all duration-500 hover:shadow-xl hover:scale-[1.02] overflow-hidden relative opacity-0 translate-y-[50px] transition-all duration-700" id="feature-card-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full -mr-10 -mt-10 blur-xl"></div>
                  <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Geniş Kütüphane</h3>
                  <p className="text-gray-700">Binlerce kitaba anında erişim</p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Popüler</span>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Klasikler</span>
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">Yeni Çıkanlar</span>
                  </div>
                </div>
                
                <div className="col-span-5 row-span-3 col-start-8 row-start-1 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl shadow-lg p-5 flex flex-col justify-center transform transition-all duration-500 hover:shadow-xl hover:scale-[1.02] opacity-0 translate-x-[50px] transition-all duration-700" id="feature-card-2">
                  <VolumeX className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Gürültü Engelleme</h3>
                  <p className="text-gray-700 text-sm">Ortam gürültüsünü bastıran akıllı ses teknolojisi</p>
                </div>
                
                <div className="col-span-8 row-span-2 col-start-5 row-start-4 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl shadow-lg p-5 flex flex-col justify-center transform transition-all duration-500 hover:shadow-xl hover:scale-[1.02] opacity-0 translate-y-[50px] transition-all duration-700" id="feature-card-3">
                  <Clock className="h-8 w-8 text-indigo-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Zamanlayıcı</h3>
                  <p className="text-gray-700 text-sm">Uyku moduyla belirlediğin süre kadar dinle</p>
                </div>
                
                <div className="col-span-4 row-span-2 col-start-1 row-start-5 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg p-4 flex flex-col justify-center transform transition-all duration-500 hover:shadow-xl hover:scale-[1.02] opacity-0 translate-x-[-50px] transition-all duration-700" id="feature-card-4">
                  <Save className="h-6 w-6 text-blue-600 mb-2" />
                  <h3 className="text-base font-bold text-gray-900 mb-1">Çevrimdışı Dinle</h3>
                  <p className="text-gray-700 text-xs">İndirip internetsiz dinle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll animasyonu için gerekli JavaScript */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function setupFeatureAnimations() {
              // Eğer animasyon başladıysa tekrar çalıştırma
              if (window.featuresAnimStarted) return;
              
              const featureElements = [
                document.getElementById('feature-item-1'),
                document.getElementById('feature-item-2'),
                document.getElementById('feature-item-3'),
                document.getElementById('feature-link'),
                document.getElementById('feature-card-1'),
                document.getElementById('feature-card-2'),
                document.getElementById('feature-card-3'),
                document.getElementById('feature-card-4')
              ];
              
              // 3D ve bounce efekti için zamanlama fonksiyonu
              const bounceTiming = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
              
              // Reset animations for features section
              featureElements.forEach(el => {
                if (el) {
                  if (el.id.includes('feature-item')) {
                    el.style.opacity = '0';
                    // Sağdan sola giriş efekti
                    el.style.transform = 'translateX(80px)';
                    el.style.transition = 'opacity 0.8s ' + bounceTiming + ', transform 0.8s ' + bounceTiming;
                  } else if (el.id === 'feature-link') {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(15px) scale(0.95)';
                    el.style.transition = 'opacity 0.7s ' + bounceTiming + ', transform 0.7s ' + bounceTiming;
                  } else if (el.id === 'feature-card-1') {
                    el.style.opacity = '0';
                    // 3D rotasyon ve ölçekleme efekti
                    el.style.transform = 'translateY(70px) scale(0.9) rotate3d(1, 0, 0, 15deg)';
                    el.style.transition = 'opacity 0.9s ' + bounceTiming + ', transform 0.9s ' + bounceTiming;
                  } else if (el.id === 'feature-card-2') {
                    el.style.opacity = '0';
                    // Dönerek giriş efekti
                    el.style.transform = 'translateX(70px) rotate(10deg)';
                    el.style.transition = 'opacity 0.8s ' + bounceTiming + ', transform 0.8s ' + bounceTiming;
                  } else if (el.id === 'feature-card-3') {
                    el.style.opacity = '0';
                    // Çapraz hareket
                    el.style.transform = 'translateY(50px) translateX(30px) scale(0.9)';
                    el.style.transition = 'opacity 0.9s ' + bounceTiming + ', transform 0.9s ' + bounceTiming;
                  } else if (el.id === 'feature-card-4') {
                    el.style.opacity = '0';
                    // Alt soldan 3D rotasyon
                    el.style.transform = 'translateX(-30px) translateY(30px) rotate3d(0, 1, 0, -15deg)';
                    el.style.transition = 'opacity 0.7s ' + bounceTiming + ', transform 0.7s ' + bounceTiming;
                  }
                }
              });
              
              // Animasyon başlatıldı olarak işaretle
              window.featuresAnimStarted = true;
              
              // Start animations with delay for features section - sağdan sola animasyon
              setTimeout(() => {
                const featureItems = document.querySelectorAll('.feature-item');
                featureItems.forEach((item, index) => {
                  setTimeout(() => {
                    if (item) {
                      item.style.opacity = '1';
                      item.style.transform = 'translateX(0)';
                    }
                  }, index * 200); // 200ms delay between each item
                });
                
                // Then animate the other elements with 3D effects
                setTimeout(() => {
                  // Link animasyonu
                  const featureLink = document.getElementById('feature-link');
                  if (featureLink) {
                    setTimeout(() => {
                      featureLink.style.opacity = '1';
                      featureLink.style.transform = 'translateY(0) scale(1)';
                    }, 200);
                  }
                  
                  // Sağdaki kartlar için karmaşık giriş animasyonları
                  const cards = [
                    {el: document.getElementById('feature-card-1'), delay: 300},
                    {el: document.getElementById('feature-card-2'), delay: 500},
                    {el: document.getElementById('feature-card-3'), delay: 700},
                    {el: document.getElementById('feature-card-4'), delay: 900}
                  ];
                  
                  cards.forEach(card => {
                    setTimeout(() => {
                      if (card.el) {
                        card.el.style.opacity = '1';
                        if (card.el.id === 'feature-card-1') {
                          card.el.style.transform = 'translateY(0) scale(1) rotate3d(0, 0, 0, 0)';
                        } else if (card.el.id === 'feature-card-2') {
                          card.el.style.transform = 'translateX(0) rotate(0)';
                        } else if (card.el.id === 'feature-card-3') {
                          card.el.style.transform = 'translateY(0) translateX(0) scale(1)';
                        } else {
                          card.el.style.transform = 'translateX(0) translateY(0) rotate3d(0, 0, 0, 0)';
                        }
                      }
                    }, card.delay);
                  });
                }, featureItems.length * 200 + 100); // Start after feature items + 100ms buffer
              }, 300);
              
              // Observer options - daha iyi görünürlük kontrolü
              const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
              };
              
              // Intersection Observer - görünürlük kontrolü
              const sectionObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                  if (entry.isIntersecting && !window.featuresAnimStarted) {
                    setupFeatureAnimations();
                  }
                });
              }, observerOptions);
              
              // Storya özellikleri bölümünü gözlemle
              const featuresSection = document.getElementById('features');
              if (featuresSection) {
                sectionObserver.observe(featuresSection);
              }
            }
            
            // Sayfa yüklendiğinde animasyonları başlat
            if (document.readyState === 'complete' || document.readyState === 'interactive') {
              setTimeout(() => {
                const featuresSection = document.getElementById('features');
                // Ekranda görünüyorsa animasyonları başlat
                if (featuresSection && featuresSection.getBoundingClientRect().top < window.innerHeight) {
                  setupFeatureAnimations();
                }
              }, 500);
            } else {
              document.addEventListener('DOMContentLoaded', function() {
                setTimeout(() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection && featuresSection.getBoundingClientRect().top < window.innerHeight) {
                    setupFeatureAnimations();
                  }
                }, 500);
              });
            }
            
            // Sayfa görünürlüğü değiştiğinde kontrol
            document.addEventListener('visibilitychange', function() {
              if (document.visibilityState === 'visible' && !window.featuresAnimStarted) {
                const featuresSection = document.getElementById('features');
                if (featuresSection && featuresSection.getBoundingClientRect().top < window.innerHeight) {
                  setupFeatureAnimations();
                }
              }
            });
            
            // Kaydırma olayı - görünüme geldiğinde animasyonları başlat
            window.addEventListener('scroll', function() {
              if (!window.featuresAnimStarted) {
                const featuresSection = document.getElementById('features');
                if (featuresSection && featuresSection.getBoundingClientRect().top < window.innerHeight) {
                  setupFeatureAnimations();
                }
              }
            }, { passive: true });
          `
        }}
      />

      {/* Storya'yla Tanış ve Sen Neredeysen Storya Orada! Animasyonları */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function setupHowtoAnimations() {
              const howtoItems = document.querySelectorAll('.howto-item');
              const miniDemo = document.querySelector('.mini-demo');
              
              // Animasyonları sıfırla
              howtoItems.forEach((item, index) => {
                if (item) {
                  item.style.opacity = '0';
                  item.style.transform = 'translateX(-30px)';
                  item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                }
              });
              
              if (miniDemo) {
                miniDemo.style.opacity = '0';
                miniDemo.style.transform = 'scale(0.9)';
                miniDemo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
              }
              
              // Animasyonları başlat (soldan sağa)
              setTimeout(() => {
                howtoItems.forEach((item, index) => {
                  setTimeout(() => {
                    if (item) {
                      item.style.opacity = '1';
                      item.style.transform = 'translateX(0)';
                    }
                  }, index * 200);
                });
                
                setTimeout(() => {
                  if (miniDemo) {
                    miniDemo.style.opacity = '1';
                    miniDemo.style.transform = 'scale(1)';
                  }
                }, howtoItems.length * 200);
              }, 300);
            }
            
            // Sen Neredeysen Storya Orada animasyonları
            function setupWhereAnimations() {
              const whereItems = document.querySelectorAll('.where-item');
              const whereAction = document.querySelector('.where-action');
              
              // Animasyonları sıfırla
              whereItems.forEach((item, index) => {
                if (item) {
                  item.style.opacity = '0';
                  item.style.transform = 'translateY(30px)';
                  item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                }
              });
              
              if (whereAction) {
                whereAction.style.opacity = '0';
                whereAction.style.transform = 'translateY(20px)';
                whereAction.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
              }
              
              // Animasyonları başlat (aşağıdan yukarı)
              const staggerDelay = 150; // ms
              
              setTimeout(() => {
                whereItems.forEach((item, index) => {
                  setTimeout(() => {
                    if (item) {
                      item.style.opacity = '1';
                      item.style.transform = 'translateY(0)';
                    }
                  }, index * staggerDelay);
                });
                
                setTimeout(() => {
                  if (whereAction) {
                    whereAction.style.opacity = '1';
                    whereAction.style.transform = 'translateY(0)';
                  }
                }, whereItems.length * staggerDelay + 300);
              }, 300);
            }
            
            // Sayfa yüklendiğinde ve görünürlük değiştiğinde animasyonları çalıştır
            document.addEventListener('DOMContentLoaded', function() {
              setupHowtoAnimations();
              setupWhereAnimations();
            });
            
            document.addEventListener('visibilitychange', function() {
              if (document.visibilityState === 'visible') {
                setupHowtoAnimations();
                setupWhereAnimations();
              }
            });
            
            window.addEventListener('hashchange', function() {
              setupHowtoAnimations();
              setupWhereAnimations();
            });
            
            window.addEventListener('popstate', function() {
              setupHowtoAnimations();
              setupWhereAnimations();
            });
            
            // Hemen çalıştır
            if (document.readyState === 'complete' || document.readyState === 'interactive') {
              setTimeout(function() {
                setupHowtoAnimations();
                setupWhereAnimations();
              }, 100);
            }
          `
        }}
      />

      {/* Storya'yla Tanış Section - Directly on the page */}
      <div id="howto" className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Storya'yla Tanış!
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Kitaplarınla tamamen yeni bir bağ kurmanın en kolay yolu
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-10 order-2 md:order-1">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 transform hover:scale-[1.02]">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                  <div className="font-bold text-xl">1</div>
                  </div>
                  <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Kitabı al, dinlemeye başla
                  </h3>
                  <p className="text-gray-600">
                    Satın aldığın herhangi bir kitabın sesli versiyonuna anında erişim imkanı.
                    </p>
                  </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 transform hover:scale-[1.02]">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                  <div className="font-bold text-xl">2</div>
                </div>
                  <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tek tıkla sesli versiyona ulaş
                  </h3>
                  <p className="text-gray-600">
                    Beklemeden, ayrı uygulama indirmeden, anında dinlemeye başla.
                    </p>
                  </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 transform hover:scale-[1.02]">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                  <div className="font-bold text-xl">3</div>
                </div>
                  <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI destekli doğal ses kalitesi
                  </h3>
                  <p className="text-gray-600">
                    Cihaz fark etmeksizin, tüm platformlarda profesyonel kalitede sesli kitap deneyimi.
                    </p>
                  </div>
                </div>
                  </div>
            
            <div className="relative order-1 md:order-2">
              <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md mx-auto transform transition-all duration-700 hover:scale-105">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-2">Mini Demo</h3>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto"></div>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-full p-4 shadow-lg mb-4">
                      <BookOpen className="h-12 w-12 text-indigo-600" />
              </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Simyacı</h4>
                    <p className="text-gray-600 mb-6">Paulo Coelho</p>
                    <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild>
                      <Link href="https://lab.lunaarvision.com/m/paulo-coelho">
                        <Play className="mr-2 h-5 w-5" />
                        Demo Dinle
                      </Link>
                    </Button>
            </div>
          </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500">Hemen deneyin ve Storya farkını keşfedin!</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards Container - Mobile optimized - Removing the Meet Storya Section */}
      <div id="info" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24 transition-all duration-1000 transform ${isVisible.info ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Where is Storya Section - Removed */}
      </div>

      {/* Sen Neredeysen Storya Orada! - Modern tasarımla sayfaya direkt yerleştirildi */}
      <div id="whereisstorya" className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Sen Neredeysen Storya Orada!
              </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Günlük hayatının her anında, her cihazda kesintisiz dinleme deneyimi
            </p>
                    </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {/* Yolda */}
            <div className="group flex flex-col justify-center bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-to-br from-blue-600 to-purple-600 text-center h-full">
              <div className="bg-blue-100 group-hover:bg-white h-16 w-16 mx-auto rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <Mic2 className="h-8 w-8 text-blue-600 group-hover:text-blue-600" />
                    </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2">Yolda</h3>
              <p className="text-gray-600 group-hover:text-white/90">Trafikte podcast gibi dinle</p>
                  </div>

            {/* Evde */}
            <div className="group flex flex-col justify-center bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-to-br from-blue-600 to-purple-600 text-center h-full">
              <div className="bg-blue-100 group-hover:bg-white h-16 w-16 mx-auto rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <Building2 className="h-8 w-8 text-blue-600 group-hover:text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2">Evde</h3>
              <p className="text-gray-600 group-hover:text-white/90">Ev işi yaparken bilgiye kulak ver</p>
            </div>

            {/* Kütüphanede */}
            <div className="group flex flex-col justify-center bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-to-br from-blue-600 to-purple-600 text-center h-full">
              <div className="bg-blue-100 group-hover:bg-white h-16 w-16 mx-auto rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <BookOpen className="h-8 w-8 text-blue-600 group-hover:text-blue-600" />
          </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2">Kütüphanede</h3>
              <p className="text-gray-600 group-hover:text-white/90">Görme engelliler için erişilebilirlik</p>
            </div>

            {/* E-ticaret sitesinde */}
            <div className="group flex flex-col justify-center bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-to-br from-blue-600 to-purple-600 text-center h-full">
              <div className="bg-blue-100 group-hover:bg-white h-16 w-16 mx-auto rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <Globe2 className="h-8 w-8 text-blue-600 group-hover:text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2">E-ticarette</h3>
              <p className="text-gray-600 group-hover:text-white/90">Kitap alırken sesli versiyona tek tık</p>
        </div>
      </div>

          <div className="mt-16 flex justify-center">
            <div className="bg-white p-6 px-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 flex items-center gap-6 max-w-xl">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse-slow opacity-30 blur-md"></div>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-full relative">
                  <Headphones className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900">Storya Her Yerde</h3>
                <p className="text-gray-600">Kesintisiz dinleme keyfi</p>
                <Button size="sm" className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs">
                  Hemen Dene
                </Button>
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
            {/* CTA butonları kaldırıldı */}
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
        
        /* Hemen görünür içerik için yardımcı sınıf */
        .init-visible #feature-item-1,
        .init-visible #feature-item-2,
        .init-visible #feature-item-3,
        .init-visible #feature-card-1,
        .init-visible #feature-card-2,
        .init-visible #feature-card-3,
        .init-visible #feature-card-4,
        .init-visible #feature-link {
          opacity: 1 !important;
          transform: translateX(0) translateY(0) !important;
          transition: opacity 0.5s ease, transform 0.5s ease;
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
        
        /* Custom scrollbar - Bu özellik kaldırıldı */
      `}</style>

      {/* Time Section için animasyon kodunu ekledim */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function setupTimeAnimations() {
              // Time bölümü için ID'ler
              const timeItems = [
                'time-item-1',
                'time-item-2',
                'time-item-3',
                'time-button',
                'time-card-1',
                'time-card-2',
                'time-card-3'
              ];
              
              // Animasyonu başlat
              function startAnimation() {
                // Sol taraftaki maddeler - yukarıdan aşağı
                if (document.getElementById('time-item-1')) {
                  setTimeout(() => {
                    const el = document.getElementById('time-item-1');
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                  }, 300);
                }
                
                if (document.getElementById('time-item-2')) {
                  setTimeout(() => {
                    const el = document.getElementById('time-item-2');
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                  }, 700);
                }
                
                if (document.getElementById('time-item-3')) {
                  setTimeout(() => {
                    const el = document.getElementById('time-item-3');
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                  }, 1100);
                }
                
                if (document.getElementById('time-button')) {
                  setTimeout(() => {
                    const el = document.getElementById('time-button');
                    el.style.opacity = '1';
                  }, 1500);
                }
                
                // Sağ taraftaki kartlar - soldan sağa
                if (document.getElementById('time-card-1')) {
                  setTimeout(() => {
                    const el = document.getElementById('time-card-1');
                    el.style.opacity = '1';
                    el.style.transform = 'translateX(0) rotate(0)';
                  }, 500);
                }
                
                if (document.getElementById('time-card-2')) {
                  setTimeout(() => {
                    const el = document.getElementById('time-card-2');
                    el.style.opacity = '1';
                    el.style.transform = 'translateX(0) rotate(0)';
                  }, 900);
                }
                
                if (document.getElementById('time-card-3')) {
                  setTimeout(() => {
                    const el = document.getElementById('time-card-3');
                    el.style.opacity = '1';
                    el.style.transform = 'translateX(0) rotate(0)';
                  }, 1300);
                }
              }
              
              // İlk yüklemede tetiklenen animasyon
              function initAnimation() {
                // Sayfanın görünür olduğundan emin ol
                const timeSection = document.getElementById('time');
                if (timeSection) {
                  // Görünürlük sınıfını kontrol et
                  if (timeSection.classList.contains('time-section-visible') || 
                      window.innerHeight > timeSection.getBoundingClientRect().top) {
                    startAnimation();
                  } else {
                    // Observer ile izle
                    const observer = new IntersectionObserver((entries) => {
                      entries.forEach(entry => {
                        if (entry.isIntersecting) {
                          startAnimation();
                          observer.unobserve(entry.target);
                        }
                      });
                    }, { threshold: 0.2 });
                    
                    observer.observe(timeSection);
                  }
                }
              }
              
              // Sayfa yüklendikten sonra anında tetikle
              if (document.readyState === 'complete' || document.readyState === 'interactive') {
                setTimeout(initAnimation, 100);
              } else {
                document.addEventListener('DOMContentLoaded', initAnimation);
              }
              
              // Görünürlük değişikliğinde ve scroll olaylarında kontrol et
              document.addEventListener('visibilitychange', function() {
                if (document.visibilityState === 'visible') {
                  initAnimation();
                }
              });
              
              window.addEventListener('scroll', function() {
                if (!window.timeAnimationStarted) {
                  const timeSection = document.getElementById('time');
                  if (timeSection && window.innerHeight > timeSection.getBoundingClientRect().top) {
                    window.timeAnimationStarted = true;
                    startAnimation();
                  }
                }
              });
              
              // Sayfa yüklendiğinde hemen çağır
              initAnimation();
            }
            
            // Sayfada kodun çalıştığından emin olmak için hemen çağır
            setupTimeAnimations();
          `
        }}
      />
    </main>
  );
}
