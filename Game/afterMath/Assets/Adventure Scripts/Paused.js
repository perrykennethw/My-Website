var paused : boolean = false;
var myCheck : boolean = false;


function Update () {
	if(Input.GetButtonDown( "Pause" )) {
	if(!paused) {
		Time.timeScale = 0;
		paused = true;
	}else{
		Time.timeScale = 1;
		paused = false;
	}
}
}

function OnGUI() {
	if(paused) {
	if(GUI.Button (Rect ( 10, 50, 100, 30), "Resume" )) {
	Time.timeScale = 1f;
	paused = false;
	}
}

	if(GUI.Button (Rect ( 10, 90, 100, 30), "Options" )) {
	}

	if(GUI.Button ( Rect(10, 130, 100, 30), "Quit" )) {
	}
}
