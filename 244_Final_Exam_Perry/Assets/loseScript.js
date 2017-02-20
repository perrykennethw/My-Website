var isPaused : boolean = false;
var startTime : float; //in seconds
var timeRemaining : float; // in seconds
var percent:float;
var fail_squeak:AudioClip;

function Start () 
{
	
	startTime = 11.0;
	audio.PlayOneShot(fail_squeak);
	
}

function Update () 
{
	if (!isPaused)
	{
		//make sure the timer is not paused
		DoCountdown();
	}
}

function DoCountdown()
{
	timeRemaining = startTime - Time.time;
	percent = timeRemaining/startTime * 100;
	if (timeRemaining < 0)
	{
		timeRemaining = 0;
		isPaused = true;
		Application.LoadLevel("game");
	}
	// other lines omitted for clarity
	ShowTime();
	Debug.Log("Time is up = " + timeRemaining);
}

function PauseClock()
{
	isPaused = true;
}

function UnPauseClock()
{
	isPaused = false;
}

function ShowTime()
{
	var minutes : int;
	var seconds : int;
	var timeStr : String;
	minutes = timeRemaining/60;
	seconds = timeRemaining % 60;
	timeStr = minutes.ToString() +":";
	timeStr = seconds.ToString("D2");
	guiText.text = timeStr; // display the time to the gui
	
	
}

function BuildLostPrompt()
{

	if(GUI.Button(Rect(10,40,80,20),"Try Again?"))
	{
		
		Application.LoadLevel("game");
	}
	
}
