/**
 * Created by neil.zhou on 2015/9/9.
 */

var backgroundLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        this.init();
    },

    init:function(){
        var bgSprite = new cc.Sprite(res.playBG_png);

        var size = cc.director.getWinSize();

        bgSprite.attr({
            x:size.width/2,
            y:size.height/2
        });

        this.addChild(bgSprite);
    }
});
