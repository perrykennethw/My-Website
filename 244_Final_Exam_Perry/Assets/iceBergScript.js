#pragma strict
//var meltIceberg:boolean = true;

function Update () 
{
	/*if(meltIceberg)*/transform.localScale -= Vector3(0.005,0,0);
	
	if(transform.localScale.x <= 0)
	{
		//Debug.Log("stop melt");
		//meltIceberg = false;
		Destroy(gameObject);
	}

}
function OnCollisionEnter (col:Collision) 
{
	if(col.gameObject.tag == "Penguin")
	{
		Application.LoadLevel("Win");
		
		
	}
}