"use client";

import { useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Share2, Heart, Download, ChevronLeft, Star, Info, Clock, Calendar, Award, MessageCircle, FileText, Bookmark, BarChart2, Forward, Rewind, TrendingUp, BookOpen, Headphones, SkipBack, SkipForward, Crop, List, Menu, Users, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface Book {
  id: string;
  title: string;
  author: string;
  narrator: string;
  cover: string;
  rating: number;
  ratingCount: number;
  description: string;
  duration: string;
  releaseDate: string;
  publisher: string;
  language: string;
  category: string;
  price: string;
}

interface BookDetailClientProps {
  book: Book;
}

export default function BookDetailClient({ book }: BookDetailClientProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(18000); // 5 saat örnek süre
  const [isLiked, setIsLiked] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [reviews] = useState([
    { 
      id: 1, 
      user: "Mehmet Y.", 
      rating: 5, 
      date: "12 Nisan 2024", 
      text: "Bu kitap hayatımı değiştirdi. Kesinlikle dinlemenizi tavsiye ederim.", 
      likes: 24 
    },
    { 
      id: 2, 
      user: "Ayşe K.", 
      rating: 4, 
      date: "5 Nisan 2024", 
      text: "Seslendirme harika ama bazı bölümler biraz uzun.", 
      likes: 8 
    },
    { 
      id: 3, 
      user: "Can D.", 
      rating: 5, 
      date: "28 Mart 2024", 
      text: "Hem bilgilendirici hem de dinlemesi keyifli bir kitap.", 
      likes: 17 
    }
  ]);
  
  const [similarBooks] = useState([
    { id: "101", title: "Zihin Oyunları", author: "Daniel Kahneman", rating: 4.6 },
    { id: "102", title: "Düşünme Sanatı", author: "Robert Greene", rating: 4.5 },
    { id: "103", title: "İçimizdeki Lider", author: "Stephen Covey", rating: 4.7 },
    { id: "104", title: "Psikolojik Tuzaklar", author: "Maria Thompson", rating: 4.4 }
  ]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Timer for playback simulation
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          const newTime = prevTime + playbackSpeed;
          return newTime >= duration ? duration : newTime;
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, duration, playbackSpeed]);

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const timeline = e.currentTarget;
    const rect = timeline.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = offsetX / rect.width;
    setCurrentTime(Math.floor(percentage * duration));
  };

  const ratingDistribution = [
    { stars: 5, percentage: 78 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 }
  ];

  const handleForward = () => {
    setCurrentTime(prev => Math.min(prev + 30, duration));
  };

  const handleRewind = () => {
    setCurrentTime(prev => Math.max(prev - 10, 0));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Üst Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span>Ana Sayfa</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-gray-700 hover:text-gray-900 transition-colors relative group"
            >
              <Share2 className="h-5 w-5" />
              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Paylaş</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`transition-colors relative group ${isBookmarked ? "text-purple-500" : "text-gray-700 hover:text-gray-900"}`}
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Bookmark className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Kaydet</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`transition-colors relative group ${isLiked ? "text-red-500" : "text-gray-700 hover:text-gray-900"}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className="h-5 w-5" fill={isLiked ? "currentColor" : "none"} />
              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Beğen</span>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Ana İçerik */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Sol Kolon - Kitap Görseli ve Oynatıcı */}
          <div className="md:col-span-1 space-y-8">
            {/* Kitap Görseli */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-100 to-purple-100 relative group cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Volume2 className="h-24 w-24 text-indigo-400 opacity-20 group-hover:opacity-30 transition-opacity" />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button 
                  size="lg"
                  className="w-16 h-16 rounded-full bg-white text-indigo-600 hover:bg-gray-100 shadow-lg"
                  onClick={() => setIsPlaying(true)}
                >
                  <Play className="h-8 w-8" />
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm opacity-80">{book.author}</p>
              </div>
            </motion.div>

            {/* Oynatıcı */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 space-y-6"
            >
              {/* Şu anki bölüm */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Şu an dinliyorsunuz</h3>
                <p className="text-lg font-semibold text-gray-900">Bölüm 1: {book.title}</p>
              </div>
              
              {/* Süre Göstergesi */}
              <div 
                className="relative h-2 bg-gray-200 rounded-full overflow-hidden cursor-pointer group"
                onClick={handleTimelineClick}
              >
                <div
                  className="absolute h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-300"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
                <div className="absolute h-4 w-4 bg-white border-2 border-purple-600 rounded-full -top-1 transition-all transform scale-0 group-hover:scale-100 shadow-md" style={{ left: `calc(${(currentTime / duration) * 100}% - 8px)` }}></div>
              </div>
              
              {/* Zaman ve Kontroller */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{formatTime(currentTime)}</span>
                <span>-{formatTime(duration - currentTime)}</span>
              </div>

              {/* Oynatma Kontrolleri */}
              <div className="flex items-center justify-center gap-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={handleRewind}
                >
                  <Rewind className="h-6 w-6" />
                </Button>
                <Button
                  size="lg"
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8" />
                  ) : (
                    <Play className="h-8 w-8" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={handleForward}
                >
                  <Forward className="h-6 w-6" />
                </Button>
              </div>

              {/* İleri Düzey Kontroller */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-gray-700 hover:text-gray-900 rounded-full px-2 hover:bg-gray-100"
                    onClick={() => setPlaybackSpeed(prev => prev > 0.5 ? prev - 0.25 : prev)}
                  >
                    -
                  </Button>
                  <span className="text-sm font-medium">{playbackSpeed}x</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-gray-700 hover:text-gray-900 rounded-full px-2 hover:bg-gray-100"
                    onClick={() => setPlaybackSpeed(prev => prev < 2 ? prev + 0.25 : prev)}
                  >
                    +
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-700 hover:text-gray-900"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? (
                      <VolumeX className="h-5 w-5" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </Button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(parseInt(e.target.value));
                      if (parseInt(e.target.value) > 0) setIsMuted(false);
                    }}
                    className="w-20 h-2 accent-indigo-600"
                  />
                </div>
              </div>

              {/* İndirme Butonu */}
              <Button
                className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 w-full bg-gradient-to-r from-indigo-600 to-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                <span className="relative flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Çevrimdışı Dinle
                </span>
              </Button>
            </motion.div>

            {/* Kitap İstatistikleri */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6 space-y-4"
            >
              <h3 className="font-semibold text-gray-900 flex items-center">
                <BarChart2 className="h-5 w-5 mr-2 text-indigo-600" />
                Dinleme İstatistikleri
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center">
                  <TrendingUp className="h-6 w-6 text-indigo-600 mb-1" />
                  <p className="text-xs text-gray-500">Bu Hafta</p>
                  <p className="text-lg font-semibold text-gray-900">2,456</p>
                  <p className="text-xs text-green-600">+12% ↑</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center">
                  <Users className="h-6 w-6 text-indigo-600 mb-1" />
                  <p className="text-xs text-gray-500">Toplam Dinleyici</p>
                  <p className="text-lg font-semibold text-gray-900">18,342</p>
                  <p className="text-xs text-green-600">+8% ↑</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Orta ve Sağ Kolonlar */}
          <div className="md:col-span-2 space-y-8">
            {/* Başlık ve Yazar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">{book.category}</span>
                    <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full flex items-center">
                      <Headphones className="h-3 w-3 mr-1" />
                      Sesli Kitap
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">{book.title}</h1>
                  <p className="text-xl text-gray-600">{book.author}</p>
                  <p className="text-gray-500 flex items-center mt-1">
                    <Headphones className="h-4 w-4 mr-1 text-indigo-600" />
                    Seslendiren: {book.narrator}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 p-4 rounded-2xl text-center">
                  <p className="text-sm text-gray-500 mb-1">Fiyat</p>
                  <p className="text-2xl font-bold text-gray-900">{book.price}</p>
                  <Button
                    size="lg"
                    className="mt-3 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Hemen Satın Al
                  </Button>
                </div>
              </div>

              {/* Değerlendirme */}
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5"
                      fill={i < Math.floor(book.rating) ? "#FCD34D" : "none"}
                      stroke={i < Math.floor(book.rating) ? "#FCD34D" : "#D1D5DB"}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">{book.rating}</span>
                <span className="text-gray-500">({book.ratingCount.toLocaleString()} değerlendirme)</span>
              </div>
            </motion.div>

            {/* Tab Menüsü */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-b border-gray-200"
            >
              <div className="flex gap-6">
                <button
                  className={`pb-4 text-sm font-medium ${activeTab === "description" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-900"}`}
                  onClick={() => setActiveTab("description")}
                >
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Kitap Hakkında
                  </div>
                </button>
                <button
                  className={`pb-4 text-sm font-medium ${activeTab === "details" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-900"}`}
                  onClick={() => setActiveTab("details")}
                >
                  <div className="flex items-center">
                    <Info className="h-4 w-4 mr-2" />
                    Detaylar
                  </div>
                </button>
                <button
                  className={`pb-4 text-sm font-medium ${activeTab === "reviews" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-900"}`}
                  onClick={() => setActiveTab("reviews")}
                >
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Değerlendirmeler
                  </div>
                </button>
                <button
                  className={`pb-4 text-sm font-medium ${activeTab === "chapters" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-900"}`}
                  onClick={() => setActiveTab("chapters")}
                >
                  <div className="flex items-center">
                    <List className="h-4 w-4 mr-2" />
                    Bölümler
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Tab İçeriği */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              {activeTab === "description" && (
                <div className="prose prose-indigo max-w-none">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Özet</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{book.description}</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Bu kitapta, günlük düşünce tuzaklarını tanımlayarak, zihnimizin nasıl daha net çalışabileceğini keşfedeceksiniz. Modern psikoloji araştırmalarının ışığında, yazarımız Joseph Nguyen, bilişsel önyargılardan kurtulmanın pratik yollarını sizlerle paylaşıyor.
                  </p>
                  <div className="flex gap-4 flex-wrap mt-8">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      Psikoloji
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      Kişisel Gelişim
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      Zihin
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      Düşünce
                    </span>
                  </div>
                </div>
              )}

              {activeTab === "details" && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Kitap Detayları</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">Süre</h4>
                          <p className="text-gray-700">{book.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">Yayın Tarihi</h4>
                          <p className="text-gray-700">{book.releaseDate}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <BookOpen className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">Yayınevi</h4>
                          <p className="text-gray-700">{book.publisher}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Headphones className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">Dil</h4>
                          <p className="text-gray-700">{book.language}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Menu className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">Kategori</h4>
                          <p className="text-gray-700">{book.category}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">Ödüller</h4>
                          <p className="text-gray-700">2024 Yılın En İyi Sesli Kitabı Finalisti</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Değerlendirme Dağılımı</h3>
                  <div className="space-y-2">
                    {ratingDistribution.map((item) => (
                      <div key={item.stars} className="flex items-center gap-3">
                        <div className="flex items-center w-20">
                          <span className="text-sm text-gray-700">{item.stars}</span>
                          <Star className="h-4 w-4 text-yellow-400 ml-1" fill="#FCD34D" />
                        </div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-400 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-700 w-10">{item.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Değerlendirmeler</h3>
                    <Button
                      className="bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      Değerlendirme Yaz
                    </Button>
                  </div>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{review.user}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-4 w-4"
                                    fill={i < review.rating ? "#FCD34D" : "none"}
                                    stroke={i < review.rating ? "#FCD34D" : "#D1D5DB"}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-500 hover:text-indigo-600"
                          >
                            <Heart className="h-4 w-4 mr-1" /> {review.likes}
                          </Button>
                        </div>
                        <p className="mt-3 text-gray-700">{review.text}</p>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 text-indigo-600 border-indigo-600 hover:bg-indigo-50"
                  >
                    Tüm Değerlendirmeleri Gör
                  </Button>
                </div>
              )}

              {activeTab === "chapters" && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Bölüm Listesi</h3>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((chapter) => (
                      <div 
                        key={chapter} 
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition cursor-pointer group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-medium">
                            {chapter}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Bölüm {chapter}</h4>
                            <p className="text-sm text-gray-500">{Math.floor(Math.random() * 30) + 10} dakika</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-400 opacity-0 group-hover:opacity-100 transition"
                        >
                          <Play className="h-5 w-5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Benzer Kitaplar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benzer Kitaplar</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {similarBooks.map((similarBook) => (
                  <Link href={`/book/${similarBook.id}`} key={similarBook.id} className="group">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 mb-2 shadow-md group-hover:shadow-lg transition relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="h-12 w-12 text-indigo-400 opacity-30" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-3 text-white">
                          <p className="font-medium">{similarBook.title}</p>
                          <p className="text-sm opacity-80">{similarBook.author}</p>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors truncate">{similarBook.title}</h4>
                    <p className="text-sm text-gray-500 truncate">{similarBook.author}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-3 w-3 text-yellow-400" fill="#FCD34D" />
                      <span className="text-xs text-gray-500 ml-1">{similarBook.rating}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 