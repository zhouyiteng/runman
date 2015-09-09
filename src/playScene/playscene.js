/**
 * Created by neil.zhou on 2015/9/9.
 */
var playScene = cc.Scene.extend({
    space:null,

    onEnter:function(){
        this._super();
        this.initPhysics();

        this.addChild(new backgroundLayer());
        this.addChild(new animationLayer(this.space));
        this.addChild(new statusbarLayer());

        //this.scheduleUpdate();
    },

    initPhysics:function(){
        this.space = new cp.Space();
        this.space.gravity = cp.v(0,-350);

        var wallButtom = new cp.SegmentShape(this.space.staticBody,
        cp.v(0,g_groundHeight),
        cp.v(4294967295,g_groundHeight),
        0);
        this.space.addStaticShape(wallButtom);
    },

    update:function(){
        //this.space.step(dt);
    }
});