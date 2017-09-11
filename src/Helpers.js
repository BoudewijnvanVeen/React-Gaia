
var scramble = function(array) {       
    return array.reduceRight((pv,cv,i,arr) => {    
        var random = Math.floor(Math.random() * arr.length);
        pv.push(arr.splice(random, 1)[0]);    
        return pv;
    },[]); 
};

var getCards = function(cardsSets, n, i) {      
    var cards =  cardsSets[i].source;
    var arr1 = scramble(cards).slice(0, n);
    var arr3 = arr1.reduce((pv,cv,i,arr) => {
        pv.push(
            {id: i, value: cv, matched: false, flipped: false},
            {id: arr.length + i, value: cv, matched: false, flipped: false}
        );
        return pv;
    },[])

    return scramble(arr3);
}     

module.exports = {

    getSettingsFromQueryString : function(querystring) {
        return JSON.parse(decodeURIComponent(querystring));
    },

    setSettingsToQueryString : function(settings) {
       return encodeURIComponent(JSON.stringify(settings));;
    },

    makeState : function(settings, cardsSets) {       
        return {
            players: settings.players.map((v,i) => { return ( { id: i, name: v, matched: 0 })}),
            cards: getCards(cardsSets, settings.noOfPairs, settings.cardsSet)
        };
    }
};