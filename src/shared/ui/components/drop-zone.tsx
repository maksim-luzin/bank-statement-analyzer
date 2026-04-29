"use client"
import { Accept, useDropzone } from "react-dropzone"
import { type DropzoneProps as _DropzoneProps } from "react-dropzone"

import { cn } from "@/shared/lib"
import { UploadIcon } from "../icons/upload-icon"

interface DropzoneProps extends Omit<_DropzoneProps, "children"> {
  containerClassName?: string
  dropZoneClassName?: string
  showFilesList?: boolean
  showErrorMessage?: boolean
  setFilesUploaded: (file: File) => void
  setErrorMessage?: (message: string) => void
  dropzoneAccept: Accept
  inputAccept: string
}

export const Dropzone = ({
  containerClassName,
  dropZoneClassName,
  setFilesUploaded,
  setErrorMessage,
  dropzoneAccept,
  inputAccept,
  ...props
}: DropzoneProps) => {
  const dropzone = useDropzone({
    ...props,
    accept: dropzoneAccept,
    onDrop(acceptedFiles, fileRejections, event) {
      if (props.onDrop) props.onDrop(acceptedFiles, fileRejections, event)
      else {
        setFilesUploaded(acceptedFiles?.[0])
        if (fileRejections.length > 0) {
          let _errorMessage = `Could not upload ${fileRejections[0].file.name}`
          if (fileRejections.length > 1)
            _errorMessage =
              _errorMessage + `, and ${fileRejections.length - 1} other files.`
          setErrorMessage?.(_errorMessage)
        } else {
          setErrorMessage?.("")
        }
      }
    },
  })

  return (
    <div className={cn("mt-8 h-fit w-96", containerClassName)}>
      <div className={cn("flex flex-col gap-2", containerClassName)}>
        <div
          {...dropzone.getRootProps()}
          className={cn(
            "flex h-32 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-200 transition-all select-none hover:bg-accent hover:text-accent-foreground",
            dropZoneClassName
          )}
        >
          <input {...dropzone.getInputProps()} accept={inputAccept} />
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex flex-row items-center gap-0.5 text-sm font-medium">
              <UploadIcon className="mr-2 h-4 w-4" /> Перетягніть файл сюди
            </div>
            {props.maxSize && (
              <div className="text-xs font-medium text-gray-400">
                Макс. розмір файлу: {(props.maxSize / (1024 * 1024)).toFixed(2)}{" "}
                MB
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
