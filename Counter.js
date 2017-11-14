#pragma strict

// this class was created to count and display how many times the spheres are touched.
// - Hunter

public var count : int = 0;
public var total : int = 0;
// resets the PlayerPrefs score to 0 everytime a new game starts
PlayerPrefs.SetInt("Score", 0);

// when a an object senses a Collision it will add 1 to the count variable and store it as the score
function OnCollisionEnter(collision : Collision){
	
		count += 1;
		total = count;
		PlayerPrefs.SetInt("Score", total);
}

// this code was reused from the Timer.js class just to display the score

function OnGUI(){
	
	var style : GUIStyle = new GUIStyle("box");
	style.fontSize = 30;
	var finalScore = PlayerPrefs.GetInt("Score");
	
	GUI.Box(new Rect(525, 10, 200, 50), "SCORE: " + count.ToString("0"), style);
	
	
}