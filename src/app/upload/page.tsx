import React from 'react';
import FileUploader from '@/components/Upload/FileUploader';
import '../../../public/css/style.css';

const url = '/api/upload';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <div className="flex flex-col items-center justify-between gap-4 min-h-60 bg-zinc-600 mt-3 w-full max-w-2xl py-10 px-4 rounded-xl h-fit">
    {children}
  </div>
);

const Upload = () => {
  return (
    <main className="min-h-screen flex flex-col gap-8 px-4 text-white">
      {/* <h2 className="text-xl font-bold text-center">
        Note: this demo site API discards all files that are uploaded. The API
        also randomly returns a code 500 for demonstration of error handling.
      </h2> */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 2xl:grid-cols-3">
        {/* <Container>
          <h1 className="text-2xl font-bold">File Uploader</h1>
          <FileUploader
            url={url}
            acceptedFileTypes={['image/png', 'image/jpeg']}
            maxFileSize={1}
            label="Max File Size: 1MB"
            labelAlt="Accepted File Types: png, jpeg"
          />
        </Container> */}
        <Container>
          <h1 className="text-2xl font-bold">File Uploader</h1>
          <FileUploader
            url={url}
            acceptedFileTypes={[
              'image/png',
              'image/jpeg',
              'video/quicktime',
              'video/mp4',
            ]}
            allowMultiple={true}
            maxFileSize={500}
            label="Max File Size: 500MB (multiple)"
            labelAlt="Accepted File Types: png, jpeg, mp4"
          />
        </Container>
        {/* <Container>
          <h1 className="text-2xl font-bold">File Uploader</h1>
          <FileUploader
            url={'https://example.com'}
            acceptedFileTypes={['image/png', 'image/jpeg']}
            allowMultiple={true}
            maxFileSize={100}
            label="Max File Size: 100MB (non-existent endpoint)"
            labelAlt="Accepted File Types: png, jpeg"
          />
        </Container> */}
      </div>
    </main>
  );
};

export default Upload;
