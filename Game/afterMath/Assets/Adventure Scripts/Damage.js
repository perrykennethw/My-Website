var damage : float = 1;
var enable:boolean = true;

// allows player to take damage while next to object
function OnTriggerStay(col : Collider) {
	
	if(enable) 
	{	
		// checks for players collision
		if(col.gameObject.tag == "fire")
		{	
			GetComponent(Health).curHealth -= damage; // decreases the health
			enable = false;
			yield WaitForSeconds(.5);
			enable = true;
		}
	}
}

function Update() {

	//Debug.Log(GetComponent(Health).curHealth);
	
	// Checks the players health
	if(GetComponent(Health).curHealth <= 0)
	{
		Application.LoadLevel(00);	
		GetComponent(Health).curHealth = GetComponent(Health).maxHealth; // restores health when player spwans
	}
}