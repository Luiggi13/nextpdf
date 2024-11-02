'use client'
import { GetSignedUrl, SetCors } from "./lib/actions";
import { useRef } from 'react';
import React from 'react';

function UploadSignedUrl() {
    const linkRef = useRef(null);
	const handleDownload = async (filename: string) => {
		const response = await fetch(filename);
		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const link = linkRef.current as HTMLAnchorElement | null

		if (!link) return

		link.href = url;
		link.download = filename; // Any name you want to download the file as
		link.click();
		window.URL.revokeObjectURL(url);
		link.href = '';
		link.download = ''
	}
    const HandleSubmit = async (event: FormData) => {
        await SetCors();
        const file = event.get('file') as File;
        const urls = await GetSignedUrl(file.name);

        const { url } = await fetch(urls, {
            method: 'PUT',
            body: file,
            headers: {
                'Content-Type': 'application/octet-stream',
            },
        });
        if(url) {
            handleDownload(url.split('?')[0])
        }
        window.location.reload();
    };
    return (
        <>
            <h1 className='text-gray-600 text-xl m-8'>Upload file</h1>
            <form action={HandleSubmit}>
                <input type='file' name='file' />
                <button
                    type='submit'
                    className='border border-slate-200 shadow-md hover:bg-slate-100 px-4 py-2 rounded-md'
                >
                    Upload
                </button>
            </form>
            <a ref={linkRef} download className="hidden" ></a>
        </>
    )
}

export default UploadSignedUrl