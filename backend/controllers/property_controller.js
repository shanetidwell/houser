module.exports = {
    add_property: (req,res,next)=>{
        const db = req.app.get('db');
        const {body} = req
        const {session} = req
        console.log("add property")
        console.log("session", session.user)
        console.log(body)
        db.add_house(body.name, body.address, body.city, body.state, body.zip, body.image_url, body.monthly_mortgage, body.desired_rent, 9 /*session.user.id*/)
        .then(properties=>{
            console.log("getting here")
            console.log("add property",properties);
           
            res.status(200).send(properties)
        })
        .catch((error)=>res.status(500).send(error))
    },
    get_properties: (req, res, next)=>{
        const db = req.app.get('db');
        const {session} = req
        // console.log("get properties session", session);
        db.get_properties(9/*session.user.id*/)
        .then(properties=>{
            // console.log("get properties",properties);
           
            res.status(200).send(properties)
        })
        .catch((error)=>res.status(500).send(error))
        
    },
    delete_property: (req, res, next)=>{
        const db = req.app.get('db');
        const {session} = req
        console.log("user");
        db.delete_house(req.params.id, 9/*session.user.id*/)
        .then(properties=>{
            console.log("get properties",properties);
           
            res.status(200).send(properties)
        })
        .catch((error)=>res.status(500).send(error))
    }
    
}