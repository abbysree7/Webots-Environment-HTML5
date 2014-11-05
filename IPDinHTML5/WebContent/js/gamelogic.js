/**
 * Author: Abinaya Sree Vairasundaram (Abby)
 * Date: 11/4/2014
 * Description: Game Logic for the canvas for the prisonner's dilemma game called split or steal
 * 	It is a two player game where one player is a robot called EMYS
 * 	The user is the second player. 
 * 	The game starts with providing two golden balls to the users. The balls have a piece of paper inside with split or steal written inside it. 
 * 	The players play according to a payoff matrix as in <<link to the paper>>
 */

/*animate the ball
1. move the balls closer
2. move the balls away
3. open the ball
4. get sprite using background url(image name) x y
5. close teh ball
6. 
*/

//----------Animations-------------------
//Move ball left
function moveBallLeft(){
    $("img").animate({
      left:'250px',
      opacity:'1',
      height:'250px',
      width:'250px'
    });
    moveBallRight();
}

//Move ball left -- make it background somehow
function moveBallRight(){
    $("img").animate({
      right:'250px',
      opacity:'1',
      height:'150px',
      width:'150px'
    });
}

function openBall(){
	//place img sprite and set z index
	//rotate example: http://jsfiddle.net/ryleyb/ERRmd/
	//             or http://jsfiddle.net/LTNPs/
	//same for close Ball
	$("img").animate({
		left: "50%"
	}, 1000);
}

function closeBall(){
	
	
}
//-----------------------------------



//----------LOGIC CODE--------------

















//-------------------------------------
