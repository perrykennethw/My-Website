
function Start () {

}

var customSkin:GUISkin;

function OnGUI () 
{
	GUI.skin = customSkin;
	var buttonW:int =100;
	var buttonH:int =50;
	var halfScreenW:float = Screen.width/2;
	var halfButtonW:float = buttonW/2;
	
	
	if(GUI.Button(Rect(halfScreenW-halfButtonW, 470,buttonW,buttonH),"START"))
	{
	print("Clicked Play Game");
	Application.LoadLevel("game");
	}
	if(GUI.Button(Rect(halfScreenW-halfButtonW, 540,buttonW,buttonH),"INSTRUCTIONS"))
	{
	print("Clicked for noobs");
	Application.LoadLevel("Instruction");
	}
	if(GUI.Button(Rect(halfScreenW-halfButtonW, 610,buttonW,buttonH),"RESET"))
	{
	
	Application.LoadLevel("vanity");
	}
	
}