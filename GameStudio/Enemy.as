package  {
	import flash.display.MovieClip;
	
	public class Enemy extends MovieClip 
	{

		public function Enemy() 
		{
			// constructor code
			if(MovieClip(root).enemies)
			{
				MovieClip(root).enemies.push(this);
			}
		}
	
	}

}
