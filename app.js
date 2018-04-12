
new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function(){
            var damage = calculateDamage(3,10)
            this.monsterHealth -= damage;

            if(this.checkWin()){
                return;
            }

            damage = calculateDamage(5,12)
            this.playerHealth -= damage;
            this.checkWin();
        },
        specialAttack: function(){

        },
        heal: function(){

        },
        giveUp: function(){

        },
        calculateDamage: function(min,max){
            return Math.max(Math.floor(Math.random() * max) + 1,  min);
        },
        checkWin: function(){
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
                alert('You won!');
                this.gameIsRunning = false;
                return;
            } else if (this.playerHealth <= 0){
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
})
