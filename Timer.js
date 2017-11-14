#pragma strict
// The code for this script was sourced from this video on creating a timer - Hunter
// https://www.youtube.com/watch?v=w33cOjMT0fE

var timer : float = 30.0;


function Update(){
	timer -= Time.deltaTime;
	
	

	if(timer <= 0){
		timer = 0;
		// I added this to automatically switch to the final screen when the timer hits 0 - hunter
		Application.LoadLevel("FinalScore");
	}
}
// added this to display the score onto the screen using GUI.Box - hunter

function OnGUI(){

	// creates a fontstyle called style
	var style : GUIStyle = new GUIStyle("box");
	style.fontSize = 20;
	// saves the score into a text file with the PlayerPrefs class
	var finalScore = PlayerPrefs.GetInt("Score");

	GUI.Box(new Rect(10, 10, 100, 50), "TIME: " + timer.ToString("0"), style);

	
}