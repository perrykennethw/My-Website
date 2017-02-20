// Players health var
static var maxHealth : int = 100;
static var curHealth : int = 100;


function Update () {

	Debug.Log(curHealth);
	
	// Players health
if(curHealth < 0)
	{
		curHealth = 0;
	}
	
	if(curHealth > maxHealth) 
	{
		curHealth = maxHealth;		
	}

	if(maxHealth < 1) 
	{
		maxHealth = 1;
	}	
//------------------------------------------------------------------

}
