import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      url: 'https://i.imgur.com/QDNDDmn.jpeg',
      title: 'Event Impression',
      category: 'Event'
    },
    {
      url: 'https://i.imgur.com/J5adCai.jpeg',
      title: 'Event Impression',
      category: 'Event'
    },
    {
      url: 'https://i.imgur.com/GXjMb83.jpeg',
      title: 'Event Impression',
      category: 'Event'
    },
    {
      url: 'https://i.imgur.com/g6lPwLK.jpeg',
      title: 'Event Impression',
      category: 'Event'
    },
    {
      url: 'https://i.imgur.com/wmI9pAY.jpeg',
      title: 'Event Impression',
      category: 'Event'
    },
    {
      url: 'https://i.imgur.com/916Dzzk.jpeg',
      title: 'Event Impression',
      category: 'Event'
    },
    {
      url: 'https://i.imgur.com/0QCrBZS.jpeg',
      title: 'Event Impression',
      category: 'Event'
    },
    {
      url: 'https://i.imgur.com/4uWFIm8.jpeg',
      title: 'Event Impression',
      category: 'Event'
    },
    {
      url: 'https://i.imgur.com/TESQJS4.jpeg',
      title: 'Event Impression',
      category: 'Event'
    }
  ]

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  return (
    <section id="galerie" className="relative py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <span
              className="text-sm uppercase tracking-[0.25em] font-bold px-6 py-2 rounded-full border"
              style={{
                color: '#FF6C01',
                borderColor: 'rgba(255, 108, 1, 0.3)',
                backgroundColor: 'rgba(255, 108, 1, 0.05)'
              }}
            >
              Impressionen
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Events, die begeistern
          </h2>
          <p className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
            Ein Einblick in unsere Arbeit – von Hochzeiten bis Firmenfeiern
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-lg cursor-pointer border border-white/10 hover:border-orange-500/50 transition-all duration-500 aspect-square"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span
                  className="inline-block px-4 py-1 text-xs font-semibold rounded-full border mb-3"
                  style={{
                    borderColor: 'rgba(255, 108, 1, 0.5)',
                    color: '#FF6C01',
                    backgroundColor: 'rgba(255, 108, 1, 0.15)'
                  }}
                >
                  {image.category}
                </span>
                <h3 className="text-xl font-bold text-white">{image.title}</h3>
              </div>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 80px rgba(255, 108, 1, 0.15)'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-7xl max-h-[90vh] flex items-center justify-center">
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              {images[selectedImage].title}
            </h3>
            <span
              className="inline-block px-4 py-1 text-sm font-semibold rounded-full border"
              style={{
                borderColor: 'rgba(255, 108, 1, 0.5)',
                color: '#FF6C01',
                backgroundColor: 'rgba(255, 108, 1, 0.15)'
              }}
            >
              {images[selectedImage].category}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
