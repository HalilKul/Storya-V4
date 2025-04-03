/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dinamik sayfa yönlendirmesine izin vermek için
  // hiçbir output seçeneği belirtmiyoruz (varsayılan olarak .next klasörü kullanılır)
  
  // Geliştirme modunda dinamik içeriğe izin vermek için:
  experimental: {
    // SSG ve ISR modlarında çalışmayı sağlar
    serverActions: true,
  }
};

export default nextConfig; 