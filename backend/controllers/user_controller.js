module.exports = {
    login: (req, res, next)=>{
        const db = req.app.get('db');
        // console.log("login")
        // console.log(req.body)
        db.get_user_by_username(req.body.data.username, req.body.data.password)
        .then(response=>{
            // console.log(response)
            const user = response[0]
            // console.log("login",user);
            if (user.password != req.body.data.password){
                res.status(403).send("Password doesn't match");
            }else{
                req.session.user = {
                    id: user.id,
                    username: user.username
                }
            }
            // console.log("req.session.user",req.session)
            res.status(200).send(req.session.user)
           
        })
        .catch((error)=>res.status(500).send(error))
    },

    register: (req,res,next)=>{
        const db = req.app.get('db');
        const {session} = req;
        // console.log("req.body", req.body);
        db.register(req.body.username, req.body.password)
        .then(response=>{
            const user = response[0]
            // console.log("user..id", user.id, user.username)
            session.user = {
                id: user.id,
                username: user.username
            }
            res.status(200).send(session.user);
        })
        .catch((error)=>res.status(500).send(error))
    },

    logout: (req,res,next)=>{
        console.log("logout");
        req.session.destroy();
        res.status(200).send(req.session)
    }
}