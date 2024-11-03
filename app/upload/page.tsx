'use client'
import React, { ChangeEvent, useRef, useState } from "react";
import "./page.css"
import { GetSignedUrl, SetCors } from "../lib/actions";
import LoaderOverlay from "../components/Loader";

export default function Upload() {

  const linkRef = useRef(null);
  const [isPDF, setIsPDF] = useState<boolean>(false);
  const [selected, setSelected] = useState<File>();
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const HandleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();  // Evita que el formulario se recargue
    if (!selected) return;
    setShowOverlay(true);
    await SetCors();
    const urls = await GetSignedUrl(selected.name);

    const { url } = await fetch(urls, {
      method: 'PUT',
      body: selected,
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    })
    if (url) {
      handleDownload(url.split('?')[0])
    }
    setShowOverlay(false);
  };

  const handleDownload = async (filename: string) => {
    const response = await fetch(filename);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = linkRef.current as HTMLAnchorElement | null;

    if (!link) return;

    link.href = url;
    link.download = filename;
    // link.click();
    window.URL.revokeObjectURL(url);
    link.href = '';
    link.download = '';
  };

  const onChooseFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setSelected(file);

      // Verifica si el archivo es un PDF
      if (file.type === "application/pdf") {
        setIsPDF(true);
      } else {
        setIsPDF(false);
      }
    }
  };

  return (
    <>
      {!showOverlay && <div className="flex items-center justify-center w-full h-dvh">
        <form onSubmit={HandleSubmit} className="w-[90%]">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PDF (MAX. 50MB) {isPDF}</p>
              {!isPDF && selected && selected.size! > 0 && <p className="christian bg-red-300 text-black rounded-lg px-4 py-1 mt-2">El archivo no es un PDF, inténtalo de nuevo
                <span className="block text-center italic font-bold">{selected?.type}</span>
              </p>}
            </div>
            <input id="dropzone-file" type="file" name='file' className="hidden" onChange={onChooseFile} accept=".pdf" />
            {isPDF && selected && (
              <button
                type='submit'
                className='border border-slate-200 shadow-md hover:bg-slate-100 px-4 py-2 rounded-md'
              >
                Upload
              </button>
            )}
          </label>
        </form>
        <a ref={linkRef} download className="hidden" ></a>
      </div>}

      {showOverlay && selected && <LoaderOverlay />}
    </>
  );
}
