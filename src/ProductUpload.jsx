import React,{useState} from 'react'

import axios from 'axios';

const ProductUpload = () => {
    const [productdetail, setproductdetail] = useState({
        name:"",
        description:"",
        price:"",
        stock:"",
        category:"",
        image:""
    })
    const HandleInputChange = (e) =>{
       console.log(e.target.value);
       console.log(e.target.name);
       const name = e.target.name
       setproductdetail({...productdetail, [name]:e.target.value })
       
    }
    const HandleFileChange = (e) =>{
      const imagefile = e.target.files[0]
      const reader = new FileReader()
       reader.readAsDataURL(imagefile)
      reader.onload =(e)=>{
        console.log(e.target.result);
        setproductdetail({...productdetail, image:e.target.result})
      }
    }
    const UploadProduct = async()=>{
       try {
        const form = new FormData()
        form.append("file", productdetail.image)
        form.append("upload_preset", "yeesha")

        const response = await axios.post("https://api.cloudinary.com/v1_1/daniyfc28/image/upload",form)
        
        const imageUrl = response.data.secure_url
        const finalProduct = { ...productdetail, image: imageUrl };
        
        if (response?.data?.secure_url) {
         const res =   await axios.post("http://localhost:4568/product", finalProduct)
         console.log(res);
         
        }
       } catch (error) {
        console.log(error);  
       }
        
    }
  return (
    <div className='w-50 mx-auto px-3 py-3 shadow'>
    <input name='name' className='form-control mt-3' onChange={HandleInputChange} placeholder='Product Name' type="text" />
    <input name='description' className='form-control mt-3' onChange={HandleInputChange} placeholder='Product Description' type="text" />
    <input name='price' className='form-control mt-3' onChange={HandleInputChange} placeholder='Product Price' type="text" />
    <input name='stock' className='form-control mt-3' onChange={HandleInputChange} placeholder='Product Stock' type="text" />
    <input name='category' className='form-control mt-3' onChange={HandleInputChange} placeholder='Product category' type="text" />
    <input onChange={HandleFileChange}  placeholder='Product Image' type="file" />
    <button onClick={UploadProduct} className='btn btn-dark'>Upload Product</button>
    </div>
  )
}

export default ProductUpload