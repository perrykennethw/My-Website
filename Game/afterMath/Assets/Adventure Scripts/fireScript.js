var fire:GameObject;
var fireSound:AudioClip;
var fireSound2:AudioClip;

function OnTriggerEnter(col:Collider)
{
	if(col.gameObject.tag == "Player")
	{
		Instantiate(fire,transform.position, transform.rotation);
		audio.PlayOneShot(fireSound);
		audio.PlayOneShot(fireSound2);
	}
	
}