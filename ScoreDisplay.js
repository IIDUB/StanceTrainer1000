#pragma strict

// This class grabs the score from the text file via PlayerPrefs and displays it on another scene
// Hunter

function Start () {
	
}

function Update () {
	
}

function OnGUI(){

	var style : GUIStyle = new GUIStyle("box");
	style.fontSize = 20;
	var finalScore = PlayerPrefs.GetInt("Score");
	
	GUI.Box(new Rect(525, 100, 200, 50), "FINALSCORE: " + finalScore.ToString("0"), style);


}