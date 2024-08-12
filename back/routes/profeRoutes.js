const express = require('express');
const multer=require('multer')
const path=require('path')
const router = express.Router();
const profesController = require('../controllers/ProfeController');

// Rutas para los profesores

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../uploads/'))
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname)
    }
})

const filefilter=(req,file,cb)=>{
    const tipo=file.mimetype
    const imagen=tipo.search('image')
    const pdf=tipo.search('pdf')
    if(imagen>=0 || pdf>=0){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}
const upload = multer({storage:storage,fileFilter:filefilter})

router.get('/', profesController.getProfes);
router.get('/:id', profesController.getProfeById);
router.put('/:id', upload.single('imagen'),profesController.updateProfe);
router.delete('/:id', profesController.deleteProfe);
router.post('/',upload.single('imagen'), profesController.createProfe)

module.exports = router;
