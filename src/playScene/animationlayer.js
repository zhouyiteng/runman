/**
 * Created by neil.zhou on 2015/9/9.
 */
var animationLayer = cc.Layer.extend({
    spriteSheet: null,
    runningAction: null,
    sprite: null,
    space:null,
    body:null,
    shape:null,
    ctor:function(space){
        this._super();
        this.space = space;
        this.init();
    },
    init:function(){
        //var spriteRunner = new cc.Sprite(res.runner_png);
        //spriteRunner.attr({x: 80, y: 85});
        //
        //var actionTo= new cc.MoveTo(2,cc.p(560,85));
        //spriteRunner.runAction(new cc.Sequence(actionTo));
        //
        //this.addChild(spriteRunner);

        cc.spriteFrameCache.addSpriteFrames(res.runner_plist);
        this.spriteSheet = new cc.Sprite(res.runner_png);
        this.spriteSheet.attr({x: 40, y: 85});
        this.addChild(this.spriteSheet);

        // init runningAction
        var animFrames = [];
        for (var i = 0; i < 8; i++) {
            var str = "runner" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = new cc.Animation(animFrames, 0.1);
        this.runningAction = new cc.RepeatForever(new cc.Animate(animation));

        //1. create PhysicsSprite with a sprite frame name
        this.sprite = new cc.PhysicsSprite("#runner0.png");
        //var contentSize = this.sprite.getContentSize();
        var contentSize = {width:62,height:44};

        // 2. init the runner physic body
        this.body = new cp.Body(1.0, cp.momentForBox(1.0, contentSize.width, contentSize.height));
        //3. set the position of the runner
        this.body.p = cc.p(g_runnerStartX, g_groundHeight + contentSize.height / 2);
        //4. apply impulse to the body
        this.body.applyImpulse(cp.v(150, 0), cp.v(0, 0));//run speed
        //5. add the created body to space
        this.space.addBody(this.body);
        //6. create the shape for the body
        this.shape = new cp.BoxShape(this.body, contentSize.width - 14, contentSize.height);
        //7. add shape to space
        this.space.addShape(this.shape);
        //8. set body to the physic sprite
        this.sprite.setBody(this.body);

        this.sprite.runAction(this.runningAction);
        //this.spriteSheet.runAction(this.runningAction);
        this.spriteSheet.addChild(this.sprite);
    }
});