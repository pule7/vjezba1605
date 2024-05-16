/*napisite modul za brojanje koraka
Modul ce s ebrinuti o povecanju broja koraka,
a izvan ce se moci pristupiti dvjema metodama modula:
walk() i getTotalSteps().
2.exportajte modul iz datoteke */

var brojanjeKoraka = (function () {

    var koraci = 0;
    function _increaseSteps() {
        koraci++
    }

    return {
        walk: function() {
            _increaseSteps();
        },
        getTotalSteps: function(){
            return koraci;
        },
        run: function(){
             koraci += 5;
        },
    };
})();

module.exports = brojanjeKoraka;