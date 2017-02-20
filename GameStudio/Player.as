package  {
	import flash.display.MovieClip;
	import flash.geom.Point;

	public class Player extends MovieClip {
		public var speed:Number;
		public var prevX:Number;
		public var prevY:Number;
		public var collisionPoints:Array = new Array();
		public var startX:Number;
		public var startY:Number;
		public var vx:Number;
		public var vy:Number;
		public var ax:Number;
		public var ay:Number;
		public var canJump:Boolean;
		public var jumpSpeed:Number;
		public var scale:Number;
	
		

		public function Player() {
			startX = x;
			startY = y;
			speed  = 1;
		collisionPoints[0] = new Point();
		collisionPoints[1] = new Point();
		collisionPoints[2] = new Point();
		collisionPoints[3] = new Point();
		vx = 0;
		vy = 0;
		ay = 1;
		ax = 1;
		jumpSpeed = 25;
		canJump = false;
		scale = scaleX;
		
		}

	}
	
}
