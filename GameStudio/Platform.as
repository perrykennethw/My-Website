package  {
	
	import flash.display.MovieClip;
	
	public class Platform extends MovieClip {

		public function Platform() {
			
			// constructor code
			
			if(MovieClip(root).platforms){
				
				MovieClip(root).platforms.push(this);
			}
		}

	}
	
}
