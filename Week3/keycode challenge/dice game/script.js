// Single player dice game

//1. Roll fn: Create a function for rolling the dice - that will generate random number between 1 to 6, adds the results up.
//If player rolls 1, they lose. If player reaches 20, they win.

let dice;
let totalScore = 0;
let gamePlaying;



const totalPoints = document.querySelector("#totalPoints");


let diceImgs = {
    dice1:'https://static.thenounproject.com/png/2502952-200.png',
    dice2:'https://static.thenounproject.com/png/2502955-200.png',
    dice3:'https://static.thenounproject.com/png/2502954-200.png',
    dice4:'https://img.favpng.com/1/19/24/dice-four-sided-die-game-clip-art-png-favpng-34dfib7rK9tG8Ape8x4PqqvF8.jpg',
    dice5:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAaVBMVEX///8AAAD8/PwGBgYRERETExMmJiZNTU1lZWX5+flpaWn19fXHx8cNDQ0pKSmoqKiEhITh4eF2dnbr6+sdHR1FRUWgoKAZGRlTU1NgYGBKSkpsbGwgICDs7Ozk5OTJycnY2NisrKw/Pz+x0ZXWAAAE9ElEQVR4nO2d3ZqiMAyGRfwDERSBYWfcGfT+L3JF98BdWmjSJtaa9xB9SD8t0CbxczYTBEEQBCFckqJd7SLPiau2ScZ1nE910215PjM8SdfUVTHyhnm5ythGY0mWp3Pti+XlN+NQLNleUt1L59UL6bgqyTWzKzm9zLy6k1XqK76omQdiTd0oD7fqwx7TtMrDq453GPZ0J+XhnffPj/9JYuXhiHkYDlAPWYQ8DxHiGyLEN95byDzbt/kijhd5u8/0WwFrrnHW/SZ1t1pPxkEIOZQfj5vNqvxGj3SUQ7l8jPNRHsbeDRZy3MSDfXN6tBqxku/NcIO+GYkDFVIsVCmAxdiuGUWjTHss9KtymJBE8THdSSdSGTCSX7o4G10ckJDtp+78UfTpcMG8rfVxak0ciJBk5PxXJc6+k/E4tToORIh2Xt3RZjKgaOfVnY2tkGL8/FHk6IpvUHHMhRyV96tHlk5SSN+TadqF6i5sLmRiYvU4mVzIOMZCDoPn4JDYwTP+MB0mihXPeGMhpUGAqLQXgo1jKmT+MX3667rLegU5X05Hua67hnFMhWQm54+iH1shhnGGGV1TIXuzAHtbIeg4pkJaswDqxCWAtVmcNVpIbhYgtxWywsYxFTL5NLyztBViWLTcoYUYPEV61BlYAGZhouEA305IMFMrmIvds9vvMM7bPRCDWaKwLRqN4lgsGoNZxoezsZql0wG+7HUYbXVVcfxLPhjEsUs+TKeDzi500KeDJieXk4nVg0oEglKmI6nf617HWcUHlZp1lsReMyWxdclyYFlBO7u+nFbgEOULcKFHma5ZOrrOH+Io711LfXoZXHr7nQ5Lb18EfYNHVRyHpbcr32X1eHrCYug/6y7XxdCe+c++zZdxvMzb/Q9xeTrvy9MGZfD3bhjwERHiGyLEN0SIb4gQ3xAhvsEmhLoPkkkIfR8kixCOPkgOISx9kPRCmPogyYVw9UFSC+HqgyQXwtUHSS2Eqw+SWghXKWJGLYSrD3JGLISrXNdDKoSrgNpDKYSrpH2DUghXk8ENSiFcbR83KIVwNeLcoBTC1Rp1g1IIV7PaDUohXO2DN0SIAcFMrWAu9mBuv8E8EINZogSzaAxmGR/OxoqtD3ImyQdTuPog6RN0XH2Q9ClTpj7I5yaxXfZBMpQVePogWQo9HH2QLKU3jj5IpmIofR8kX3mauA9SGgZ8Q4T4hgjxDRHiGyLEN0SIb6CEQPwTbSD3aYT4J+Ih9mmE+idiofZpBPsnIqH2aYT7J6Ig92lE+CdieK5Po8Y/EQG5TyPKPxEBtU8j7gfzcKh/mI/0TwQjPo2GQrA2H1DEp9FQCNo/EYgvPo3W/4gjPo2mQtD+iUDIfRrRlmpAyK3b0CZ3QMjN9MzOr7AdBIKO83ZCgplawVzsaP9EIOLT+HZLFLR/IhDxaXy/jRXWPxGMDz6NTpIP9D6NoaSD+H5ATO/T6MVf2zjxaUT4J2Jg8Gnk+vsnBp9GqH8iEnqfRqh/IhYGn0aYfyIeDp9GgH+iDeLTOHHUa0SIb4gQ3xAhvqEecux0CciB5o/mq453GPZ0J+Xh1nnbEjWNOlnb1MzjsKZWL/CTyjr3yUtWaa7qIne4c6VnuzrrXkovL6Rke9GnBudp/jKzK1uN/qKxqOqm8/55knRNXWnn1d/3NO3J0KPlecSntvD+0xYEQRAEwYI/6vhIHwTGlvsAAAAASUVORK5CYII=',
    dice6:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAaVBMVEX///8AAAD8/PwPDw8mJiYGBgZNTU1lZWX5+flpaWkTExP19fUNDQ0pKSnHx8eoqKiEhITh4eF2dnbr6+tFRUWgoKAaGhoZGRlgYGBJSUlTU1NsbGwgICDs7Ozk5OTJycnY2NisrKw/Pz8n5DzuAAAEk0lEQVR4nO2d3XaqMBBGC4ICFlAEe6Qci77/Qx5c9sJTEjIz+WmMsy+jy+GzQcJka9/eGIZhGIYJl6zuk/fIc9Kh77LlHJeh7catm/eMTjZ2p2O98IS4SSpnR6NJVeax9MHm+tfhoWiyveayhy7JE+WYkpSS2ZUNTzOv7lRH8Rlft44PRJu2Ew734mGP6XrhcDK6PQx9xkE4/O799eMnWSocjhwfhgHEh8xBfg8O4hscxDdeO0hc7fpylaarst9V8lsBbaY669tN6nuyVtYhBNk3H483m8fmTD7SRfZN8Vjno9kvPRsd5LBJZ/fN+UHriIWcN/Mb9M1CHWyQeiVqARRLd80kOmGdlXxVjguSCd6mO7milYEj+yOrs5HVQQXZnmSvH0UngwvmbSuv00rqYIJkCzmiaG3sb5It5JiSiOtggkjn1R1pJwOLdF7d2egGqZdfP4oMnfEdqQ48yEH4OfJIYaSFdFbWWYk+heFBFBPrhpHJRawDDrKfXQfnpAau8Xt1mSgVXOPBQRpAgajRD0KtAw0Sf6hfflp3aa8g40JdZVp3zetAg1SQ14+iL90gwDrzji40yA5WYKcbhFwHGqSHFRA3LhGsYXXW5CAlrECpGySh1oEGUV6l7hS6QYCblityEMBV5Ia4A4sAViaaH+DLBQlmagVzsnv28Tuv83IXxGCWKPER8vqD/qKRujh9uWV8ODdWb7m6wKd+DtCtrqgOovmgvOUx03wANDn0mg/qdtDFRA777SDl5DIysW6QGoEGW6bGdnyWW6Yn/ZbpYhN77aiJLWuWI7cVpLPr0+gOHGH7Ar3RI/zsKgyd5w91sBtK6K23v/l86+3Tgjd4ENUxuPU2cW7+W3cN9jZDf2y6mt0MvRF/7fqySNOi7Hdflreny2mOQbbBX1sY8BEO4hscxDc4iG9wEN/gIL7BTuPD8pqdxiXYaQSMstOIhZ1G4Cg7jTjYaQSOstOIg51GYBB2GpGw0/ikUg07jeGIZ8GogMEECWZqBXOye/bxy05jOEsUdhqxsNMIDcJOIxZ2GuGj7DQiYacROspOIwF2GiGj37DTiIadRsWo13AQ3+AgvsFBfIOD+AYH8Q2q0wh2DXWw7jRiXEM6lp1GrGtIxbbTiHYNidh2GvGuIQnrTiPBNaRg3WmkuIYErDuNJNeQgG2nkdZcxmO7iU10DdGw0wgMQt0Sw8JOIzAI2TVE4ovTqP0fcdhphAYhu4ZIrDuNZP0IiXXNiSyEIbEunsFeX6DoISHXebkgwUytYE52smuIhJ3Gl1uiOPsiDDuN0CDB3FhRXUM09p1GmmuIxr7TGEo7yN2Xju07jRTXkIADp5HgGlJw4DS6+qkEB06jox+vsO80Yl1DKg6cRpxrSMeF04hwDXVgp1Ex6jUcxDc4iG9wEN8QH3JqdAnoAsk/mh9Gt4ehzzgIh3vj2pJtOnGztjs5Pg5tWvECPztq9z7dUg2Ss7ouDd652mebXGQP5dcnSrK9yluDcV4+zeyqksVvQdbHthu9v55kY9cO0nn1/ZyuH4C/6/J7pENfe/9uMwzDMAyjwT8PSVN9/iBtrgAAAABJRU5ErkJggg==',
  }

const throwDice = () => {
    //1.Generate random number  
        dice = Math.floor((Math.random() * 6) + 1);

    //2.Display result
        //   const score = document.querySelector("#point");
        //   score.innerHTML = dice;

        const diceDOM = document.querySelector("#diceImgDOM");
        diceDOM.classList.remove("no-display");
        diceDOM.src = diceImgs['dice' + dice];

    //3. If dice = 1, player loses
        
        if (dice === 1) {
            const loseMsg = document.querySelector("#display-lose");
            loseMsg.innerHTML = '💀 YOU LOSE! You rolled 1!';
            totalScore=0;
            toggleBtn(rollBtn);
        } else {
            hideMsg()
            totalScore += dice;
            totalPoints.innerHTML = totalScore;
        }
        

        if (totalScore >= 20) {
            const winMsg = document.querySelector("#display-win");
            winMsg.innerHTML = 'CONGRATULATIONS! YOU WON 🎉';
            totalScore = 0;
            tooggleBtn(rollBtn);
        }
}



//HIDE MESSAGES
const hideMsg = () => {
    document.querySelector("#display-lose").innerHTML = '';
    document.querySelector("#display-win").innerHTML = '';
}


//START GAME BY ROLLING THE DICE
const rollBtn = document.querySelector("#roll-btn");
rollBtn.addEventListener("click",  throwDice)

//DISABLE BUTTONS 
// const disableBtn = (btn, time) => {
//     btn.disabled=true;
//     setTimeout(function(){
//         btn.disabled=false;
//     }, time);
// }

const toggleBtn = (btn) => {
    if (btn.disabled === true) {
        btn.disabled = false;
    } else if (btn.disabled === false) {
        btn.disabled = true;
    };
}


//RESET GAME
const reset = () => {
    totalScore = 0;
    document.querySelector("#diceImgDOM").classList.add("no-display");
    totalPoints.textContent='0';
    hideMsg();
    toggleBtn(rollBtn);

}

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", reset);