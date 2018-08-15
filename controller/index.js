const Model = require('../model');
const { Quote } = Model;

const quoteController = {
    all(req, res) {
        // Returns all quotes
        Quote.find({})
            .exec((err, quotes) => {
                if(err) {
                    res.json(err);
                } else {
                    res.json(quotes);
                }
            });
    }, 
    byNum(req, res) {
        const numParam = req.params.num;
        // Returns n number of quotes
        // based on the passed in num parameter
        Quote
            .find({}).limit(numParam)
            .exec( (err, quotes) => 
            {
                if(err) {
                    res.json(err);
                } else {
                    res.json(quotes); 
                }
            });
    },
    byId(req, res) {
        const idParam = req.params.id;
        // Returns quote by id
        Quote
            .findOne({idParam})
            .exec( (err, quote) => 
            {
                if(err) {
                    res.json(err);
                } else {
                    res.json(quote); 
                }
            });
    }, 
    byCharacter(req, res) {
        const characterParam = req.params.character;
        // Returns quote by character name
        Quote
            .findOne({characterParam})
            .exec( (err, quote) => 
            {
                if(err) {
                    res.json(err);
                } else {
                    res.json(quote); 
                }
            });
    }, 
    byCharacterAndNum(req, res) {
        const characterParam = req.params.character;
        const numberParam = req.params.num;
        // Returns n number of quotes by character name
        Quote
            .find({ character: characterParam}).limit(numberParam)
            .exec( (err, quotes) => 
            {
                if(err) {
                    res.json(err);
                } else {
                    res.json(quotes); 
                }
            });
    },
    create(req, res) {
        const requestBody = req.body;
        
        const newQuote = new Quote(requestBody);
        // Save the record to the data base
        newQuote.save( (err, saved) => {
            if(err) {
                res.json(err);
            } else {
                // Returns the saved quote after a successful save
                Quote
                    .findOne({_id: saved._id})
                    .exec((err, quote) => {
                        if(err) {
                            res.json(err);
                        } else {
                            res.json(quote);
                        }
                    });
            }
        });
    },
    update(req, res) {
        const idParam = req.body.id;
        let quote = req.body;
        
        Quote.findOne({_id: idParam}, (err, data) => {
            if(err) {
                res.json(err);
            } else {
                data.quote = quote.quote;
                data.author = quote.author;
                data.season = quote.season;
                data.episode = quote.episode;
                data.image = quote.image;
                
                data.save((err, updated) => {
                    if(err) {
                        res.json(err);
                    } else {
                        res.json(updated);
                    }
                })
                
            }
        })
        
    }, 
    remove(req, res) {
        const idParam = req.body.id;
        
        Quote.findOne({_id: idParam}).remove((err, removed) => {
            if(err) {
                res.json(err);
            } else {
                res.json(idParam);
            }
        })
    }
};


module.exports = quoteController;