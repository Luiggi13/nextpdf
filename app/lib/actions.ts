'use server';

import { Storage, StorageOptions } from '@google-cloud/storage'
const CREDS: StorageOptions = {
  projectId: process.env.PROJECT,
  credentials: {
    client_email: process.env.EMAIL,
    private_key: process.env.GCS_PRIVATE_KEY?.split(String.raw`\n`).join("\n"),
  },
};

export const GetSignedUrl = async (fileName: string) => {
  const storage = new Storage(CREDS);

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
  const storage = new Storage(CREDS);
  await storage.bucket('luiggi_pdfs').setCorsConfiguration([
    {
      maxAgeSeconds: 3600,
      method: ['GET', 'PUT'],
      origin: ['*'],
      responseHeader: ['Content-Type'],
    },
  ]);
}