var speed : int = 5;

function OnControllerColliderHit(hit : ControllerColliderHit) {
	
	// allows the player to add force to game objects
	if(hit.gameObject.tag == "box") {
		Debug.Log("We hit an object");
		hit.rigidbody.AddForce(transform.forward * speed); // moves objects forward on colliding with the player
	}
}