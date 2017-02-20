package 
{
	import flash.events.KeyboardEvent;
	import flash.ui.Keyboard;
	public class KeyMov
	{
		public var up:Boolean;
		public var down:Boolean;
		public var faceLeft:Boolean;
		public var walkLeft:Boolean;
		public var faceRight:Boolean;
		public var walkRight:Boolean;
		public var canRun:Boolean;
		public var jumpPressed:Boolean;
		public var spin:Boolean;
		public var attack:Boolean;
		//public var canAttack:Boolean;
		public function KeyMov()
		{
			// constructor code
			up = false;
			down = false;
			faceLeft = false;
			walkLeft = false;
			faceRight = false;
			walkRight = false;
			canRun = false;
			jumpPressed = false;
			spin = false;
			attack = false;
			//canAttack = true;
		}

		public function keyDownHandler(e:KeyboardEvent):void
		{
			if (e.keyCode == Keyboard.SHIFT)
			{
				canRun = true;
			}
			if (e.keyCode == Keyboard.UP)
			{
				up = true;
				
			}
			if (e.keyCode == Keyboard.DOWN)
			{
				down = true;
			}
			if (e.keyCode == Keyboard.LEFT)
			{
				
				walkLeft = true;
				faceLeft = true;
				faceRight = false;
			}
			if (e.keyCode == Keyboard.RIGHT)
			{
				
				walkRight = true;
				faceRight = true;
				faceLeft = false;
			}
			if (e.keyCode == Keyboard.SPACE)
			{
				spin = true;
			}
			if (e.keyCode == Keyboard.Z)
			{
				attack = true;
				//canAttack = false;
			}
		}
		public function keyUpHandler(e:KeyboardEvent):void
		{
			if (e.keyCode == Keyboard.SHIFT)
			{
				canRun = false;
			}
			if (e.keyCode == Keyboard.UP)
			{
				up = false;
				jumpPressed = false;
			}
			if (e.keyCode == Keyboard.DOWN)
			{
				down = false;
			}
			if (e.keyCode == Keyboard.LEFT)
			{
				walkLeft = false;
			}
			if (e.keyCode == Keyboard.RIGHT)
			{
				walkRight = false;
			}
			if (e.keyCode == Keyboard.SPACE)
			{
				spin = false;
			}
			if (e.keyCode == Keyboard.Z)
			{
				attack = false;
				//canAttack = true;
			}
		}

	}

}