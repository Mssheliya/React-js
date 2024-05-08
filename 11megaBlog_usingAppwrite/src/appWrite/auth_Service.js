import config from '../config/config';
import {Client, Account ,ID} from 'appwrite';

export class AuthService{
    client = new Client();
    account; //Create Variable with name Acount

    constructor(){
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client);
    };
    
    async createAccount({email,password,name}){
       try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call new method Or pending
            }
            else{
                return userAccount;
            }
       } 
       catch (error) {
            throw error; 
       }
    };

    async login(email, password){
        try {
            return await this.account.createEmailSession(email, password);
        } 
        catch (error) {
            throw error;    
        }
    };

    async getCurrentUser(){
        try {
           return await this.account.get();
        } 
        catch (error) {
            console.log(`appwrite :: getCurrentUser :: error :: ${error}`);    
        }
        return null;
    };

    async logout(){
        try {
           return await this.account.deleteSessions();
        } 
        catch (error) {
            console.log(`appwrite :: logout :: error :: ${error}`);
        }
    } 
};

const authSrvice = new AuthService();
export default authSrvice;