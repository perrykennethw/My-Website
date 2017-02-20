

function Start () {

}



function OnGUI () 
{	
	var buttonW:int =100;
	var buttonH:int =50;
	var halfScreenW:float = Screen.width/2;
	var halfScreenH:float = Screen.height/2;
	var halfButtonW:float = buttonW/2;
	
	
	if(GUI.Button(Rect(halfScreenW-halfButtonW,halfScreenH+200,buttonW,buttonH),"Play"))
	{
		print("Clicked me");
		Application.LoadLevel(02);
	}
	
	/*if(GUI.Button(Rect(halfScreenW-halfButtonW,halfScreenH+250,buttonW,buttonH),"How to Play"))
	{
	print("Clicked me");
	Application.LoadLevel("howTo");
	}*/
}
