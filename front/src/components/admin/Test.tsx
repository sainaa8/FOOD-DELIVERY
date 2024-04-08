"use client";

import axios from "axios";

import { ChangeEvent, useState } from "react";

const getPresignedURL = async () => {
  const { data } = await axios("/api/upload-image-into-r2");

  return data as { uploadUrl: string; accessUrls: string };
};
export const Upimage = () => {
  const [image, setImage] = useState<FileList | null>(null);

  const [accessUrl, setAccessUrl] = useState<string>("");

  const [loading, setLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files);
  };
  const uploadImage = async () => {
    if (image) {
      setLoading(true);

      const img = image[0] as File;

      const { uploadUrl, accessUrls } = await getPresignedURL();

      await axios.put(uploadUrl, img, {
        headers: {
          "Content-Type": img.type,
        },
      });

      setAccessUrl(accessUrls);

      setLoading(false);
    }
  };
  return (
    <div>
      <input type="file" onChange={handleChange} />

      <button onClick={uploadImage}>
        {loading ? "Loading" : "Submit"}​​​​​{" "}
      </button>
    </div>
  );
};
