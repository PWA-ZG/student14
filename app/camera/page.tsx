"use client"

import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';

function Camera() {

  const [isClient, setIsClient] = useState(false);
  const webcamRef = useRef<Webcam>(null);  
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const capture = React.useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImageSrc(imageSrc);
    }
  }, [webcamRef]);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        }, (err) => {
          console.log('Service Worker registration failed:', err);
        });
    }
  }, []);
  


  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      {isClient && (
        <Webcam 
          ref={webcamRef} 
          screenshotFormat="image/jpeg" 
          className="w-full max-w-2xl rounded-lg shadow-xl" 
        />
      )}
      <button 
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
        onClick={capture}>
        Capture Photo
      </button>
      {imageSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <img src={imageSrc} alt="Captured" className="rounded-lg mb-4" />
            <button 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
              onClick={() => setImageSrc(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default Camera;


