
var audioClips:AudioClip;

var impactSoundThreshold = 0.5;  // tweak this value

function Start () {

}

function Update () 
{
	
 
if (Input.GetButtonDown( "Horizontal" ) || Input.GetButtonDown( "Vertical") )
	{    
		audio.clip = audioClips;
		audio.Play(); 
		audio.loop = true;
	}
	
else if (( !Input.GetButton( "Horizontal" ) && !Input.GetButton( "Vertical" ) && audio.isPlaying ))
	{
		audio.Stop();
	}

}

