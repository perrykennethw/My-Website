

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
	
	
	if(GUI.Button(Rect(10, 50, 100, 30),"Level 1"))
	{
		Application.LoadLevel(01);
	}
	
	if(GUI.Button(Rect(500, 50, 100, 30),"Level 2"))
	{
		Application.LoadLevel(02);
	}
	
	if(GUI.Button(Rect(10, 400, 100, 30),"Level 3"))
	{
		Application.LoadLevel(03);
	}
	
	if(GUI.Button(Rect(500, 400, 100, 30),"Level 4"))
	{
		Application.LoadLevel(04);
	}
	
	if(GUI.Button(Rect(250, 300, 100, 30),"Level 5"))
	{
		Application.LoadLevel(05);
	}
	
	
}
