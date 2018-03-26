module.exports = {
    createSession: (req, res, next)=>{
        console.log(req.session)
        if(!req.session.user){
            req.session.user = {
                id: 0,
                username: ""
            }
        }
        next();
    }
}