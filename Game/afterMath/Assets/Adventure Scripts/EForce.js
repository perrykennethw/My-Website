var speed : int = 60;

function OnControllerColliderHit(hit : ControllerColliderHit) {
	
	// allows the player to add force to game objects
	if(hit.gameObject.tag == "Player") {
		//Debug.Log("We hit an object");
		hit.rigidbody.AddForce(transform.forward * speed); // moves objects forward on colliding with the player
	}
}