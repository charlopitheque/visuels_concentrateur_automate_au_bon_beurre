var express = require('express');
var router = express.Router();
router.get('/getBy', (req, res) => {
    console.log(req.query.search)
    let query = "SELECT * FROM `automaton` where unit_id = "+ req.query.search+" ORDER BY epoch LIMIT 600;"; // get automatons by unit_id
        // execute
        db.query(query, (err, result)=>{
            if (err) {
                res.status(400).send('Automaton Not found')
            }
            res.status(200).send(result)
        });
    });
module.exports = router