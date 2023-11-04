const SuCo = require('../model/SuCoModel')
const LoaiSuCo = require('../model/LoaiSuCoModel')
const multer = require('multer');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const { initializeApp } = require("firebase/app");
const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require("firebase/storage");
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
initializeApp(firebaseConfig)
const storage = getStorage()

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});
exports.uploadProblemImage = upload.single('hinhAnh');
exports.saveProblemImageToStorage = async (req, res, next) => {
  try{
  if(!req.file) return next()
    const storageRef = ref(storage, `files/${req.file.originalname}`);
    // Create file metadata including the content type
    const metadata = {
        contentType: req.file.mimetype,
    };

    // Upload the file in the bucket storage
    const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
    //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

    // Grab the public url
    const downloadURL = await getDownloadURL(snapshot.ref);
    req.body.hinhAnh = downloadURL
    next()
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err.message
    })
  }
}
// Create new
exports.createSuCo = async (req, res, next) => {
  try {
  if(req.file) req.file.filename = `problem-${Date.now()}.jpeg`;
  const loai_su_co = await LoaiSuCo.findOne({ten: req.body.loaiSuCo})
    const suCo = await SuCo.create({
      loaiSuCo: loai_su_co._id,
      hinhAnh: req.body.hinhAnh ? req.body.hinhAnh : "",
      moTa: req.body.moTa ? req.body.moTa : "",
      phongHoc: req.body.phongHoc,
      giangVien: req.user.id
    }) 
    res.status(201).json({
      status: 'success',
      data: suCo
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message
    })
  }
}
exports.getAllLoaiSuCo = async(req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      data: await LoaiSuCo.find()
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message
    })
  }
}
exports.getSuCo = async (req, res) => {
  try {
    const userId = req.query.user_id
    const suCo = await SuCo.find({giangVien: userId})
    res.status(200).json({
      status: 'success',
      data: suCo
    })
  }
  catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message
    })
  }
}