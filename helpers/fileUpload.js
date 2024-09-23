
export const uploadToImgbb = async (file) => {  
    // Create a FormData object to hold the image file
    const formData = new FormData();
    formData.append("image", file);
  
    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=apikey`, {
        method: "POST",
        body: formData,
      });
  
      const result = await response.json();
  
      if (result.success) {
        // If upload is successful, return the image URL
        return result.data.url;
      } else {
        console.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image to ImgBB:", error);
    return error; // You can handle the error as per your use case
    }
  };
  