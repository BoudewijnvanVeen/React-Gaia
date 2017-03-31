
var Helper = (function (me) {

	me.getSettingsFromQueryString = function(querystring) {   
        if (querystring.length > 0) {
            return querystring.split("&").reduce(function(prev, curr, i, arr) {
                var p = curr.split("=");
                prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
                return prev;
            }, {});        
        } 
    };    

    me.settingToState = function(setting, cards) {       
      return {
          players: this.mapPlayers(settings.players),
          cards: this.getCards(cards, settings.noOfPairs)
      };
    };

    getCards = function(cards, n) {       
        var arr1 = this.scramble(cards).slice(0, n);;
        var arr3 = arr1.reduce((pv,cv,i,arr) => {
            pv.push(
                {id: i, value: cv, matched: false, flipped: false},
                {id: arr.length + i, value: cv, matched: false, flipped: false}
            );
            return pv;
        },[])

        return this.scramble(arr3);
    }    

    mapPlayers = function(players) {       
      return players.map((v,i) => { return ( {id: i, name: v, matched: 0 })});
    };

    scramble = function(array) {       
        return array.reduceRight((pv,cv,i,arr) => {    
            var random = Math.floor(Math.random() * arr.length);
            pv.push(arr.splice(random, 1)[0]);    
            return pv;
        },[]); 
    };

	return me;
}(Helper));