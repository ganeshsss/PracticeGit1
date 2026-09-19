import { error } from "node:console";
import cryptoJS from 'crypto-js'

export class CommonPage{
    private secretkey:string;

    constructor(){
        if(process.env.SECRET_KEY){
            this.secretkey= process.env.SECRET_KEY;
        }
        else {
            throw new Error("Please provide the secret key");
        }
    }
    public encryptData(data:string){

        const encryptedData=cryptoJS.AES.encrypt(data,this.secretkey).toString()
        console.log(encryptedData)
        return encryptedData

    }

    public decryptData(encdata:string){
        const decryptedData=cryptoJS.AES.decrypt(encdata,this.secretkey).toString(cryptoJS.enc.Utf8)
        return decryptedData
    }

        }
    
