import React from 'react';

const MasonryIframeGrid = () => {
  // Array of websites to embed
  const websites = [
    { url: 'https://peaceful-croissant-86b888.netlify.app', title: 'Lifepicr' },
    // { url: ' https://www.vye.social', title: 'Vye' },
    { url: 'https://www.eccorp.co', title: 'Eccorp' },
    { url: 'https://www.ectc.ltd', title: 'ECTC' },
    { url: 'https://goldaesthetics.uk/', title: 'Gold Aesthetics' },
    { url: 'https://amobileadership.org/', title: 'Amobi Eductaion Foundation' },
    { url: 'http://omotola-ui-app.vercel.app/', title: 'C.C.C. Omotola Cathedral Member Portal' },
  ];

//   const mobileViewport = `
//     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
//     <style>body { margin: 0; overflow-x: hidden; }</style>
//   `;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Projects</h1>
      
      <div className="columns-1 sm:columns-2 gap-4 space-y-4">
        {websites.map((site, index) => (
          <div 
            key={index}
            className="break-inside-avoid relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ height: `${Math.random() * 300 + 200}px` }}
          >
            <iframe
                src={site.url+'?platform=mobile'}
                title={site.title}
                className="w-full h-full rounded-lg border-none"
                loading="lazy"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary from-50% to-transparent p-4">
              <h2 className="text-white font-semibold text-lg truncate">
                {site.title}
              </h2>
              <a href={site.url} target="_blank" rel="noreferrer" className="text-light-green text-sm truncate">{site.url}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryIframeGrid;