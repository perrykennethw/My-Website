public var navigating : boolean;   // flag for navigation state
private var gamePointer : GameObject;
var mouseOverColor = Color.green;  
var mouseOverMaterial : Material;
var useMOCursorChange : boolean = true;
var useMOMaterialChange : boolean = false;

// clock ver
var isPaused:boolean = false;
var startTime:float;		//(in Seconds)
var timeRemaining:float;	//(in Seconds)
var percent:float;
var resetSeconds:float;
var guitext:GUIText;

// pasued var
var paused : boolean = false;
var myCheck : boolean = false;

var bool : boolean = false;
var player : GameObject;


//text var
var customSkin : GUISkin;
var useText : boolean = true;  //flag to suppres or allow all text
var showText : boolean = false; //flag to toggle text during play
var customGUIStyle : GUIStyle; //override the skin

var useLongDesc : boolean = true;
private var showShortDesc : boolean = true;
private var showLongDesc : boolean = true;
private var showActionMsg : boolean = true;

var shortDesc : String = "";
var longDesc : String = "";
private var actionMsg : String = "";
var inRange : boolean; //distance flag for long decs

function Awake() {

   Screen.SetResolution (1024, 768, false);

}

function Start() {

   Screen.showCursor = false; // hide the os cursor
   
   // assign the actual GamePointer object to the gamePointer variable
   gamePointer = GameObject.Find("GamePointer");
   
   startTime = 300.0;
}


function Update() {
	
	// pauses the game
	if(Input.GetButtonDown( "Pause" )) {
	if(!paused) {
		Time.timeScale = 0;
		paused = true;
	}else{
		Time.timeScale = 1;
		paused = false;
	}
}
//------------------------------------------------------------------

// Navigation controller

   if (Input.GetButton("ML Enable") || Input.GetButton("Horizontal") || 
      Input.GetButton("Vertical") || Input.GetButton("Turn")) {		
      navigating = true;
	  gamePointer.guiTexture.enabled = false; // turn off the pointer
   }
   else {
      navigating = false;
	  gamePointer.guiTexture.enabled = true; // turn on the pointer
   }
//------------------------------------------------------------------


	if(!isPaused)
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
		TimeIsUp();
	}
	ShowTime();
	
}

function PauseClock()
{
	isPaused = true;
}

//function UnpauseClock()
//{
//	
//	isPaused = false;
//}

function ShowTime()
{
	var min: int;
	var sec: int;
	var timeStr: String;
	min = timeRemaining / 60;
	sec = timeRemaining % 60;
	timeStr = min.ToString() + ":";
	timeStr += sec.ToString("D2");
	guitext.text = timeStr; //display the time to the GUI
}

function TimeIsUp()
{
	if(TimeIsUp == 0)
	{
		Application.LoadLevel(0);
	}
	
}



function OnGUI() {

	GUI.skin = customSkin;
	
	var buttonW:int =100;
	var buttonH:int =50;
	var halfScreenW:float = Screen.width/2;
	var halfScreenH:float = Screen.height/2;
	var halfButtonW:float = buttonW/2;	

	// GUI button for resume
	if(paused) {
	if(GUI.Button (Rect ( 10, 350, 100, 30), "Resume" )) {
	Time.timeScale = 1f;
	paused = false;
	}
}
	// Level selecter
	if(GUI.Button(Rect(10, 300, 100, 30),"DJ skip")) {
			
		Application.LoadLevel(06);
	}
	
	// Loads up the main menu
	if(GUI.Button ( Rect(10, 400, 100, 30), "Quit" )) {
		
		Application.LoadLevel(00);
	}
	
	// Status GUI button
	if(GUI.Button( Rect (500,10,100,20), "Status")) {
		
		bool = !bool;
	}
	
	// GUI box inside - GUI status button
	if(bool)
	{
		GUI.Box(Rect (500,30,100,50), "");
		GUI.Label(Rect(500,30,100,50), "Health: " + player.gameObject.GetComponent(Health).curHealth);	// displays the health
	}
	//GUI.Label (Rect (0,0,100,50), "test");
	if(useText) 
	{//global toggle
		if(showText)
		{
			//local toggle
			if(showActionMsg)GUI.Label (Rect (Screen.width/2 - 250,10,500,35), actionMsg);
			
			if(useLongDesc && inRange)
			{
				if(showLongDesc && inRange) GUI.Label (Rect (Screen.width/2 - 250,Screen.height - 37,500,35), longDesc);
				
			}
			if(showShortDesc) GUI.Label (Rect (Screen.width/2 - 250,Screen.height - 65,500,35), shortDesc, customGUIStyle);
		} 
	 }
}