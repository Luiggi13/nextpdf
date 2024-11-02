'use client'

import { GetSignedUrl, SetCors } from "./lib/actions";

function UploadSignedUrl() {
    const HandleSubmit = async (event: FormData) => {
        await SetCors();
        const file = event.get('file') as File;
        const url = await GetSignedUrl(file.name);

        await fetch(url, {
            method: 'PUT',
            body: file,
            headers: {
                'Content-Type': 'application/octet-stream',
            },
        });
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
        </>
    )
}

export default UploadSignedUrl