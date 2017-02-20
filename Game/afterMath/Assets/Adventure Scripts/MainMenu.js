

function Start () {

}

var customSkin:GUISkin;

function OnGUI () 
{	
	GUI.skin = customSkin;
	
	var buttonW:int =100;
	var buttonH:int =50;
	var halfScreenW:float = Screen.width/2;
	var halfScreenH:float = Screen.height/2;
	var halfButtonW:float = buttonW/2;
	
	
	if(GUI.Button(Rect(250, 250, 100, 30),"Play"))
	{
		Application.LoadLevel(01);
	}
	
	if(GUI.Button (Rect ( 250, 300, 100, 30), "Options" )) {
	
		Application.LoadLevel(07);
	}
}
