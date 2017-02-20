

function Start () {

}

function Update () {

	transform.eulerAngles.x = Mathf.PingPong(Time.time * .5,3) ;
}