import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        const splitExtension = file.originalname.split('.');
        const extension = `.${splitExtension[1]}`;
        cb(null, `${splitExtension[0]} ${Date.now()}${extension} `);
    }
});

export default storage;