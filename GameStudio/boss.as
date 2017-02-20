package  {
	
	import flash.display.MovieClip;
	
	
	public class boss extends MovieClip {
		
		
		public function boss() {
			// constructor code
			if(MovieClip(root).bosses)
			{
				MovieClip(root).bosses.push(this);
			}
		}
	}
	
}
