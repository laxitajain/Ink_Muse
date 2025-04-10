import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://laxitajain8:<db_password>@ac-qeddbk2-shard-00-00.j7qmmvo.mongodb.net:27017,ac-qeddbk2-shard-00-01.j7qmmvo.mongodb.net:27017,ac-qeddbk2-shard-00-02.j7qmmvo.mongodb.net:27017/?ssl=true&replicaSet=atlas-4uy4by-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 