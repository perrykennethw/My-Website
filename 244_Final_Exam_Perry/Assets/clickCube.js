#pragma strict
var ice_chip:AudioClip;
var bounce_squeak:AudioClip;
var hitCount:GUIText;
var numHits :int = 0;
var hasLost:boolean = false;


function Start () 
{

}

function Update ()
{

}
function OnMouseDown () {
audio.PlayOneShot(ice_chip);
	yield WaitForSeconds(0);
  Destroy(gameObject);
  
  
}
function OnCollisionEnter (col:Collision) 
{
	if(col.gameObject.tag == "iceCube")
	{
	
	audio.PlayOneShot(ice_chip);
	}
	
	if(col.gameObject.tag == "Penguin")
	{
		//Debug.Log("Hit");
		audio.PlayOneShot(bounce_squeak);
		
		
	}
}
