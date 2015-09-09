/**
 * Created by neil.zhou on 2015/9/9.
 */
var MenuLayer =cc.Layer.extend({
    ctor:function(){
        this._super();
    },

    init:function(){
        var size = cc.winSize;

        var centerPos = cc.p(size.width/2,size.height/2);

        var bgSprite = new cc.Sprite(res.helloBG_png);

        bgSprite.attr({
            x:size.width/2,
            y:size.height/2
        });

        this.addChild(bgSprite,0);

        cc.MenuItemFont.setFontSize(60);

        var menuItemPlay = new cc.MenuItemSprite(
            new cc.Sprite(res.start_n_png),
            new cc.Sprite(res.start_s_png),
            this.onPlay,this
        );

        var menu = new cc.Menu(menuItemPlay);
        menu.setPosition(centerPos);

        this.addChild(menu,5);

    },

    onPlay:function(){
        cc.log("start play!");
        cc.director.runScene(new playScene());
    }

});

var MenuScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new MenuLayer();
        layer.init();
        this.addChild(layer);
    }
});