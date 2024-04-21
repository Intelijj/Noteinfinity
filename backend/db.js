const mongoose= require('mongoose');
const mongoURI= "mongodb+srv://udaybhati134:cfyTTS3aSHihb3Ww@cluster0.8h7vtvg.mongodb.net/NoteInfinix?retryWrites=true&w=majority"

const connectm=()=>{
    mongoose.connect(mongoURI,).then(()=>console.log('hello')).catch((err)=>{console.error(err);});

}

module.exports=connectm;