//#pragma strict


var isPaused:boolean = false;
var startTime:float;	//(in Seconds)
var timeRemaining:float;	//(in Seconds)
var percent:float;
var resetSeconds:float;

function Start () 
{
	startTime =120.0;
}

function Update () 
{ 
	if(Input.GetKeyDown("escape"))	 
	{        
		if (Time.timeScale == 1.0)            
		    Time.timeScale = 0.0;        
		else
		    Time.timeScale = 1.0;	            
	}

	if(!isPaused)
	{
		//make sure the timer is not paused
		DoCountdown();
	}

}

function DoCountdown()
{
	timeRemaining = startTime - Time.timeSinceLevelLoad;
	percent = timeRemaining/startTime * 100;
	//(other lines omitted for clarity
	//Debug.Log("Time remaining = " + timeRemaining);
	if (timeRemaining < 0)
	{
		timeRemaining = 0;
		isPaused = true;
		TimeIsUp();
	}
	ShowTime();
	
}

function PauseClock()
{
	isPaused = true;
}

function UnpauseClock()
{
	
	isPaused = false;
}

function ShowTime()
{
	var min: int;
	var sec: int;
	var timeStr: String;
	min = timeRemaining / 60;
	sec = timeRemaining % 60;
	timeStr = min.ToString() + ":";
	timeStr += sec.ToString("D2");
	guiText.text = timeStr; //display the time to the GUI
}

function TimeIsUp()
{
	
	//Debug.Log("Time is up!");

}


