const mongoose= require('mongoose');
const mongoURI= "mongodb+srv://udaybhati134:cfyTTS3aSHihb3Ww@cluster0.8h7vtvg.mongodb.net/NoteInfinity?retryWrites=true&w=majority" || "mongodb://127.0.0.1:27017/noteinfinity"

const connectm=()=>{
    mongoose.connect(mongoURI,).then(()=>console.log('hello')).catch((err)=>{console.error(err);});

}

module.exports=connectm;