
var scramble = function(array) {       
    return array.reduceRight((pv,cv,i,arr) => {    
        var random = Math.floor(Math.random() * arr.length);
        pv.push(arr.splice(random, 1)[0]);    
        return pv;
    },[]); 
};

var getCards = function(cardsSets, n, set) {      
    var cards =  cardsSets[set].source;
    var arr1 = scramble(cards).slice(0, n);
    var arr3 = arr1.reduce((pv,cv,i,arr) => {
        pv.push(
            {id: i, value: cv, type: 'text', matched: false, flipped: false},
            {id: arr.length + i, value: cv, type: cardsSets[set].type, matched: false, flipped: false}
        );
        return pv;
    },[])

    return scramble(arr3);
}     

module.exports = {

    getSettingsFromLocalStorage : function() {
        return JSON.parse(localStorage.getItem("settings"));
    },

    setSettingsToLocalStorage : function(settings) {
       return encodeURIComponent(localStorage.setItem("settings",JSON.stringify(settings)));
    },

    removeSettingsFromLocalStorage : function() {
        return encodeURIComponent(localStorage.removeItem("settings"));
    },    

    makeState : function(settings, cardsSets) {       
        return {
            players: settings.players.map((v,i) => { return ( { id: i, name: v, matched: 0 })}),
            cards: getCards(cardsSets, settings.noOfPairs, settings.cardsSet)
        };
    }
};