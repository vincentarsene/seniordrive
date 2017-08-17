var mysql   = require("mysql");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes = function(router,connection,md5) {
    var self = this;
    router.get("/",function(req,res){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json({"Message" : "API de SeniorDrive"});
    });
    router.get("/deplacements",function(req,res){
		res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		var query = "SELECT * FROM ??";
        var table = ["deplacements"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Erreur d'execution de requet MySQL"});
            } else {
                res.json({"Error" : false, "Message" : "Terminé", "deplacements" : rows});
            }
        });
    });
	
	router.get("/deplacements/:id",function(req,res){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["deplacements","id",req.params.id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
			if(err) {
                res.json({"Error" : true, "Message" : "Erreur d'execution de requet MySQL"});
            } else {
                res.json({"Error" : false, "Message" : "Terminé", "deplacement" : rows});

			}
		});
    });
	
}

module.exports = REST_ROUTER;
