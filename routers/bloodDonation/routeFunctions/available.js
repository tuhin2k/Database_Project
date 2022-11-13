const path = require('path');
const signUpInfo = require(path.join(__dirname,'..','..','..','dbSchemas','signUpInfo'));

const available = async ( req , res ) => {

    const email = res.locals.email;
    let data = await signUpInfo.find({email});
    data=data[0];

    signUpInfo.findByIdAndUpdate(data._id,{ available : 'Yes' } ,function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Updated User : ", docs);
                };
            }

    );

    res.json({
        msg : 'you are available for donation',
    });

};

module.exports = available ;