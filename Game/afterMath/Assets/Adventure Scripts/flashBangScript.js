var isPaused : boolean = false;
var startTime : float; //in seconds
var MainCamera : GameObject;
var flashbang:GameObject;

var fade : float = 1;
var theTexture : Texture2D;
 
function OnTriggerEnter(col:Collider)
{
	if(col.gameObject.tag == "Player")
	{
		startTime = 9.0;
		
		FadeCoroutine();
		audio.Play();
		isPaused = false;
		
		yield WaitForSeconds(5);
   	    Destroy(flashbang);
	}
}

function FadeCoroutine()
{
    while(true)
    {
        fade = 1;
        var time : float;
        while (time < 8)
        {
            yield;
            fade += Time.deltaTime / 5;
           	time += Time.deltaTime;
        }
        fade = 0;
        time = 8;
        yield WaitForSeconds(5);
        while (time < 8)
        {
            yield;
            fade -= Time.deltaTime / 5;
            time += Time.deltaTime;
        }
        fade = 0;
        yield WaitForSeconds(180);
    }
}
	
function Update () 
{
	StopCoroutine("FadeCoroutine");
}

function OnGUI()
{
    if (fade > 0)
    {
        GUI.color = Color.white;
        GUI.color.a = fade;
        GUI.DrawTexture(Rect(0,0,2000, 800), theTexture);
        GUI.color = Color.white;
    }  
}
