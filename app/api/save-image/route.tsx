import { storage } from "@/config/firebaseConfig";
import axios from "axios";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const data=await req.json();
    const {url}=data;

    const base64Image="data:image/png;base64,"+await convertImage(url);

    const fileName='/ai-story/'+Date.now()+".png"
    const imageRef=ref(storage,fileName);

    await uploadString(imageRef,base64Image,'base64').then((snapshot)=>{
        console.log('File Uploaded');

    });

    const downloaderUrl=await getDownloadURL(imageRef);
    console.log(downloaderUrl);

    return NextResponse.json({imageUrl:downloaderUrl});
}

export const convertImage=async(imageUrl:string)=>{
    try{
        const respose=await axios.get(imageUrl,{responseType:'arraybuffer'});
        const base64Image=Buffer.from(respose.data).toString('base64');
        console.log("Base64 Image:", base64Image);
        return base64Image;
    }catch(e)
    {
        console.log("Error converting base 64 image");
    }
}