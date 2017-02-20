

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
	
	if(GUI.Button(Rect(10, 300, 100, 30),"DJ skip"))
	{
		Application.LoadLevel(06);
	}
	
	
}
