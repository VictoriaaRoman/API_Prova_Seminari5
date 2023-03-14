import { Request,Response } from "express";
import { insertUser,getUsers,getUser,updateUser,deleteUser,subjectsByUser,surname} from "../services/user";
import { handleHttp } from "../utils/error.handle";

const getPerson=async({params}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await getUser(idUser);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_USER");
    }
};

const getPeople=async(req:Request,res:Response)=>{
    try{
        const response=await getUsers();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_USERS");
    }
};

const updatePerson=async ({params,body}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await updateUser(idUser,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_USER");
    }
};

const postPerson=async ({body}:Request,res:Response)=>{
    try{
        const responsePerson=await insertUser(body);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_POST_USER");
    }
};

const deletePerson=async ({params}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await deleteUser(idUser);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_USER");
    }
};
const getSubjectsByUser=async({params}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await subjectsByUser(idUser);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_OBTAINING_SUBJECTS");
    }
};
const postQuestionSurname=async({body}:Request,res:Response)=>{
    try{
        const {lastName, semester}=body;
        const response=await surname(lastName, semester);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_ANSWERING");
    }
};

export{getPerson,getPeople,postPerson,updatePerson,deletePerson, getSubjectsByUser, postQuestionSurname};