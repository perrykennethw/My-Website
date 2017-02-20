using UnityEngine;

// script for the minimap
public class CameraFollow : MonoBehaviour {
	
	public Transform Target;
	
	
	void LateUpdate () 
	{
		transform.position = new Vector3(Target.position.x,  transform.position.y, Target.position.z); // makes camera follows the minimap
	}
}
