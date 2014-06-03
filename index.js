
exports = module.exports = function(){
    return function (req,res,next){
        res.locals.flashes = req.flash('flashes') || [];
    
        req.add_flash = function(type, message){
            res.locals.flashes.push({type:type, message:message});
            req.flash('flashes', res.locals.flashes);
        }
        
        next();    
    }
}