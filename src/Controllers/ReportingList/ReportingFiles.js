const ReportingFiles = require("../../Models/Reporting");

module.exports.ReportingFilesList = async ( req, res ) => {
try{
    const ReportingFilesList = await ReportingFiles.find({ });
    res.status(200).json( ReportingFilesList )
}
catch( err ){
    res.send({
        status: 400,
        message: " Could not display list of Reporting Files"
    })
}
}
