'use server';

import { Storage } from '@google-cloud/storage'

export const GetSignedUrl = async (fileName: string) => {
    // I am not including the key in the github repo, but this key goes in the root of the project.
    const storage = new Storage({ keyFilename: 'credentials.json'});
  
    const [url] = await storage.bucket('luiggi_pdfs')
      .file(fileName)
      .getSignedUrl(
        { 
          action: 'write', 
          version: 'v4',
          expires: Date.now() + 15 * 60 * 1000,
          contentType: 'application/octet-stream',
        }
      );
  
    return url;
  }

  export const SetCors = async () => {
    const storage = new Storage({ keyFilename: 'credentials.json' });
    await storage.bucket('luiggi_pdfs').setCorsConfiguration([
      {
        maxAgeSeconds: 3600,
        method: ['GET', 'PUT'],
        origin: ['*'],
        responseHeader: ['Content-Type'],
      },
    ]);
  }