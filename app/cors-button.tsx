'use client'

import { SetCors } from "./lib/actions";

function CorsSetButton() {
    const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await SetCors();
    };
    return (
        <>
            <form onSubmit={HandleSubmit}>
                <button
                    type='submit'
                    className='border border-slate-200 shadow-md hover:bg-slate-100 px-4 py-2 rounded-md'
                >
                    Set Cors
                </button>
            </form>
        </>
    )
}

export default CorsSetButton