"use client";

import { ChangeEvent, useState } from "react";

const MediaPicker = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const onMediaSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files) {
        return;
    }


    const previewUrl = URL.createObjectURL(files[0]); 
    setPreview(previewUrl);
  };

  return (
    <>
      <input
        onChange={onMediaSelected}
        type="file"
        name="coverUrl"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
      />

      {preview && (
        <img
          src={preview}
          alt=""
          className="w-full aspect-video rounded-lg object-cover"
        />
      )}
    </>
  );
};
export default MediaPicker;
