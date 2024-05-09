import config from '../config/config';
import {Client, ID, Databases, Storage, Query} from 'appwrite';

export class BlogServices{
    client = new Client();
    databases;
    storage;
    constructor(){
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client); 
    };

    async createPost({slug, title, content, featuredImage, status, userId}){
        try {
           return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch (error) {
            console.log("Appwrite Srvice :: createPost :: error ::" +error);
        }
    };

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } 
        catch (error) {
            console.log(`Appwrite Srvice :: updatePost :: error :: ${error}`);
        }
    };

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true;
        } 
        catch (error) {
            console.log(`Appwrite Srvice :: deletePost :: error :: ${error}`);
            return false;
        }
    };

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
        } 
        catch (error) {
            console.log(`Appwrite Srvice :: getPost :: error :: ${error}`);
            return false;
        }
    };

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )    
        } 
        catch (error) {
            console.log(`Appwrite Srvice :: getPosts :: error :: ${error}`);
            return false;
        }                
    };

    //File Services

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,
            )    
        } 
        catch (error) {
            console.log(`Appwrite Srvice :: uploadFile :: error :: ${error}`);
            return false;
        }
    };

    async deleteFile(fileid ){
        try {
            await this.storage.deleteFile(
                config.appwriteBucketId,
                fileid,
            );
            return true;
        } catch (error) {
            console.log(`Appwrite Srvice :: deleteFile :: error :: ${error}`);
            return false;
        }
    };

    getFileforPreview(fileid){
        return this.storage.getFilePreview(
            config.appwriteBucketId,
            fileid,
        )
    }
};


const blogServices = new BlogServices();
export default blogServices;