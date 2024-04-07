"use client";

import cloud from "@/assets/upload.svg";
import { useCallback, Dispatch, SetStateAction } from "react";
// @ts-ignore
import type { FileWithPath } from "@uploadthing/react";
import { useDropzone } from "@uploadthing/react/hooks";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { Button } from "@/components/ui/button";
import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileUploader({
  imageUrl,
  onFieldChange,
  setFiles,
}: FileUploaderProps) {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="flex justify-center items-center bg-[#28282d] cursor-pointer flex-col overflow-hidden rounded-md border-[1px] border-white/20 h-[15rem]"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center items-center">
          <img
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center mx-auto"
          />
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col py-5 text-grey-500">
          <Image src={cloud} width={77} height={77} alt="file upload" />
          <h3 className="mb-2 mt-2">Drag photo here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button
            type="button"
            className="bg-[#5a3ee5] hover:bg-[#4630b0] duration-300 translate-x-[0.5rem]"
          >
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
}
