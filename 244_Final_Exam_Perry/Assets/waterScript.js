#pragma strict

var kerplunk:AudioClip;
var plunk:AudioClip;
function Start () {

}

function Update () {
	
}
function OnTriggerEnter (col:Collider) 
{
	if(col.gameObject.tag == "Penguin")
	{
		Debug.Log("Hit");
		audio.PlayOneShot(kerplunk);
		Application.LoadLevel("lose");
		
	}
	
	if(col.gameObject.tag == "iceCube")
	{
		Debug.Log("Hit");
		audio.PlayOneShot(plunk);
		
	}
}